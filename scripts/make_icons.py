"""Generate the PWA icon set for the exam-prep app.

No image libraries beyond Pillow, no network, no font dependency — the mark is
geometric (an open book with a check badge) so it renders identically everywhere.

Framing is computed rather than hand-tuned: the mark is drawn once into a scratch
canvas, its actual ink bounding box is measured, and that box is then scaled to a
target fraction of the icon and centred. That guarantees the artwork is never clipped
and the margins are deliberate, whatever the shape ends up being.

The script prints an ASCII preview too, so the result can be verified without an
image viewer.
"""
from __future__ import annotations

import pathlib

from PIL import Image, ImageDraw

OUT = pathlib.Path(__file__).resolve().parents[1] / "public" / "icons"

BG_TOP = (15, 23, 42)        # slate-900
BG_BOTTOM = (30, 58, 138)    # blue-900
PAGE = (248, 250, 252)       # slate-50
RULE = (147, 197, 253)       # blue-300 — text lines on the pages
SPINE = (37, 99, 235)        # blue-600 — the gap between pages
BADGE = (37, 99, 235)        # blue-600
CHECK = (255, 255, 255)

SCRATCH = 1024  # resolution the mark is drawn at before measuring


def gradient(size: int) -> Image.Image:
    strip = Image.new("RGB", (1, size))
    px = strip.load()
    for y in range(size):
        t = y / max(1, size - 1)
        px[0, y] = tuple(round(BG_TOP[i] + (BG_BOTTOM[i] - BG_TOP[i]) * t) for i in range(3))
    return strip.resize((size, size), Image.NEAREST)


def rounded_mask(size: int, radius: int) -> Image.Image:
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return mask


def render_mark(size: int = SCRATCH) -> Image.Image:
    """Draw the mark on a transparent canvas in a 0..1 coordinate space."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    s = float(size)

    def p(fx: float, fy: float) -> tuple[float, float]:
        return (fx * s, fy * s)

    # Two facing pages of an open book, with a tapered spine gap between them.
    d.polygon([p(0.10, 0.30), p(0.48, 0.20), p(0.48, 0.72), p(0.10, 0.82)], fill=PAGE)
    d.polygon([p(0.52, 0.20), p(0.90, 0.30), p(0.90, 0.82), p(0.52, 0.72)], fill=PAGE)
    d.polygon([p(0.46, 0.21), p(0.54, 0.21), p(0.54, 0.735), p(0.46, 0.735)], fill=SPINE)

    # Text rules, kept thin so they survive downscaling to 48 px as texture.
    rule_h = 0.030
    for i in range(3):
        fy = 0.34 + i * 0.115
        d.rounded_rectangle([*p(0.18, fy), *p(0.41, fy + rule_h)], radius=s * 0.015, fill=RULE)
        d.rounded_rectangle([*p(0.59, fy), *p(0.82, fy + rule_h)], radius=s * 0.015, fill=RULE)

    # Check badge overlapping the lower-right page corner, kept inside the canvas.
    br = 0.19 * s
    bx, by = 0.755 * s, 0.775 * s
    d.ellipse([bx - br, by - br, bx + br, by + br], fill=BADGE)

    w = max(2.0, s * 0.042)
    pts = [
        (bx - br * 0.46, by + br * 0.00),
        (bx - br * 0.12, by + br * 0.34),
        (bx + br * 0.50, by - br * 0.36),
    ]
    d.line(pts, fill=CHECK, width=round(w), joint="curve")
    r = w / 2
    for pt in (pts[0], pts[-1]):
        d.ellipse([pt[0] - r, pt[1] - r, pt[0] + r, pt[1] + r], fill=CHECK)

    return img


def build(size: int, *, ink_fraction: float, bleed: bool, corner_radius_ratio: float) -> Image.Image:
    """Compose an icon with the mark scaled so its ink occupies `ink_fraction` of the side."""
    mark = render_mark()
    bbox = mark.getbbox()
    if bbox is None:
        raise RuntimeError("mark rendered empty")
    mark = mark.crop(bbox)

    target = max(1, round(size * ink_fraction))
    scale = target / max(mark.width, mark.height)
    new = (max(1, round(mark.width * scale)), max(1, round(mark.height * scale)))
    mark = mark.resize(new, Image.LANCZOS)

    bg = gradient(size).convert("RGBA")
    if not bleed:
        # Transparent corners for the "any" purpose icons.
        bg.putalpha(rounded_mask(size, round(size * corner_radius_ratio)))

    mark_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    mark_layer.paste(mark, ((size - new[0]) // 2, (size - new[1]) // 2), mark)
    return Image.alpha_composite(bg, mark_layer)


def ascii_preview(img: Image.Image, cols: int = 50) -> str:
    """Render to text so the shape can be checked without an image viewer."""
    bg = Image.new("RGB", img.size, (255, 255, 255))
    bg.paste(img, mask=img.split()[3])
    rows = max(1, round(cols * img.height / img.width / 2.1))
    small = bg.convert("L").resize((cols, rows), Image.LANCZOS)
    ramp = " .:-=+*#%@"
    return "\n".join(
        "".join(ramp[min(len(ramp) - 1, small.getpixel((x, y)) * len(ramp) // 256)] for x in range(cols))
        for y in range(rows)
    )


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    jobs = [
        ("icon-192.png", 192, 0.72, False, 0.22),
        ("icon-512.png", 512, 0.72, False, 0.22),
        # Maskable: full-bleed background, artwork inside the central safe zone.
        ("icon-maskable-512.png", 512, 0.56, True, 0.0),
        # iOS applies its own rounding and ignores transparency.
        ("apple-touch-icon.png", 180, 0.68, True, 0.0),
    ]
    for name, size, ink, bleed, radius in jobs:
        img = build(size, ink_fraction=ink, bleed=bleed, corner_radius_ratio=radius)
        path = OUT / name
        img.save(path, "PNG", optimize=True)
        print(f"  wrote {name:<26} {size}x{size}  {path.stat().st_size:>7} B  ink={ink}")

    preview = build(512, ink_fraction=0.72, bleed=False, corner_radius_ratio=0.22)
    print("\n── ASCII 预览（512，浅色=亮）──")
    print(ascii_preview(preview))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
