"""Audit the question bank for completeness.

Reports explanation and answer coverage per subject/type, and calls out questions whose
text looks like a fragment of a larger code block — those come from a parsing pass that
split multi-line fill-in-the-blank programs into one "question" per line.

Usage:  python3 scripts/audit_questions.py [--json]
"""
from __future__ import annotations

import collections
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
SUBJECT_FILES = [
    # 最初的 AI Studio 版题库
    "osQuestions", "networkQuestions", "programmingQuestions", "introQuestions",
    # 按自考课程代码整理的分科题库
    "networkprincipleQuestions", "sysprincipleQuestions", "hardwareQuestions",
    "sysintegrationQuestions", "datastructureQuestions", "discretemathQuestions",
    "mathQuestions", "englishQuestions", "gangyaoQuestions", "marxismQuestions",
    "xigaiQuestions",
]

# Heuristics for "this is not a real question, it is a slice of a code listing".
FRAGMENT_STARTS = (
    "______", "return", "break", "}", "{", "char ", "int ", "struct ", "FILE",
    "for(", "for (", "while", "if(", "if (", "printf", "scanf", "void ", "double ",
    "float ", "long ", "static ", "unsigned ", "#include", "else",
)
FRAGMENT_MAXLEN = 60


def load(name: str) -> list[dict]:
    src = (DATA / f"{name}.ts").read_text(encoding="utf-8")
    m = re.search(r"=\s*(\[.*\])\s*;?\s*$", src, re.S)
    if not m:
        raise SystemExit(f"cannot locate the array literal in {name}.ts")
    body = re.sub(r",(\s*[\]}])", r"\1", m.group(1))
    return json.loads(body)


def is_blank(value) -> bool:
    if value is None:
        return True
    if isinstance(value, str):
        return value.strip() == ""
    if isinstance(value, (list, tuple)):
        return len(value) == 0 or all(is_blank(v) for v in value)
    return False


def looks_like_fragment(text: str) -> bool:
    t = (text or "").strip()
    if len(t) > FRAGMENT_MAXLEN:
        return False
    if any(t.startswith(p) for p in FRAGMENT_STARTS):
        return True
    # Mostly code punctuation rather than prose.
    if t and sum(c in "{}();[]=<>*&%#_" for c in t) / len(t) > 0.18:
        return True
    return False


def main() -> int:
    as_json = "--json" in sys.argv
    rows: list[dict] = []
    for f in SUBJECT_FILES:
        for q in load(f):
            rows.append(
                {
                    "source": f,
                    "id": q.get("id", ""),
                    "subject": q.get("subjectId", "?"),
                    "type": q.get("type", "?"),
                    "section": q.get("section", "?"),
                    "exam": q.get("examName", ""),
                    "text": q.get("text", ""),
                    "hasAnswer": not is_blank(q.get("answer")),
                    "hasExplanation": not is_blank(q.get("explanation")),
                }
            )

    for r in rows:
        r["fragment"] = looks_like_fragment(r["text"])

    total = len(rows)
    with_answer = sum(r["hasAnswer"] for r in rows)
    with_exp = sum(r["hasExplanation"] for r in rows)
    both = sum(r["hasAnswer"] and r["hasExplanation"] for r in rows)
    neither = sum(not r["hasAnswer"] and not r["hasExplanation"] for r in rows)
    fragments = [r for r in rows if r["fragment"] and not r["hasAnswer"]]

    if as_json:
        print(json.dumps(
            {
                "total": total,
                "withAnswer": with_answer,
                "withExplanation": with_exp,
                "both": both,
                "neither": neither,
                "fragments": [
                    {"id": r["id"], "source": r["source"], "text": r["text"][:120],
                     "type": r["type"], "exam": r["exam"]}
                    for r in fragments
                ],
            },
            ensure_ascii=False,
            indent=2,
        ))
        return 0

    print("=" * 68)
    print(f"题库审计 · {len({r['subject'] for r in rows})} 科共 {total} 题")
    print("=" * 68)

    print(f"\n有答案            {with_answer:>5}  ({with_answer / total * 100:.1f}%)")
    print(f"有解析            {with_exp:>5}  ({with_exp / total * 100:.1f}%)")
    print(f"答案+解析都有     {both:>5}  ({both / total * 100:.1f}%)")
    print(f"答案和解析都没有  {neither:>5}  ← 最需要补")
    print(f"有答案但无解析    {with_answer - both:>5}  ← AI 解析真正有用的部分")

    print("\n── 按科目 ──")
    per = collections.defaultdict(lambda: [0, 0, 0])
    for r in rows:
        per[r["subject"]][0] += 1
        per[r["subject"]][1] += r["hasAnswer"]
        per[r["subject"]][2] += r["hasExplanation"]
    for k, (t, a, e) in sorted(per.items()):
        bar = "#" * round(e / t * 26)
        print(f"  {k:<13} 题{t:>5}  答案{a:>5}  解析{e:>5} ({e / t * 100:5.1f}%)  {bar}")

    print("\n── 按题型 ──")
    pert = collections.defaultdict(lambda: [0, 0])
    for r in rows:
        pert[r["type"]][0] += 1
        pert[r["type"]][1] += r["hasExplanation"]
    for k, (t, e) in sorted(pert.items()):
        print(f"  {k:<16} {e:>5}/{t:<5} {e / t * 100:5.1f}%")

    print("\n── 按 section ──")
    pers = collections.defaultdict(lambda: [0, 0])
    for r in rows:
        pers[r["section"]][0] += 1
        pers[r["section"]][1] += r["hasExplanation"]
    for k, (t, e) in sorted(pers.items()):
        print(f"  {k:<12} {e:>5}/{t:<5} {e / t * 100:5.1f}%")

    if fragments:
        print(f"\n── ⚠️ 疑似被切碎的题目：{len(fragments)} 条（题干只有半行代码，且无答案）──")
        bysrc = collections.Counter((r["source"], r["exam"]) for r in fragments)
        for (src, exam), n in sorted(bysrc.items()):
            print(f"  {src:<26} {exam or '(无试卷名)':<18} {n:>3} 条")
        print("\n  示例:")
        for r in fragments[:8]:
            print(f"    {r['id']:<18} {r['text'][:64]!r}")
        print(
            "\n  这些来自把一份填空题的代码清单按行拆分的解析流程。原始素材在"
            "\n  data-sources/*.txt，可以重新解析修好。"
        )

    print()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
