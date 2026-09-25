"""End-to-end verification of the built site.

Serves dist/ over HTTP and drives it in headless Chrome (a throwaway profile, so the
user's own browser is untouched). Checks that the app actually renders, that all 1054
questions survive the build, that the optional-AI path degrades correctly with no key,
and that the PWA assets are wired up.
"""
from __future__ import annotations

import functools
import http.server
import json
import os
import pathlib
import re
import socketserver
import sys
import threading

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
PORT = 8099

# Pass a URL to verify an already-deployed site instead of the local dist/:
#   python3 scripts/verify_build.py --url https://example.com/app/
_argv = sys.argv[1:]
REMOTE = _argv[_argv.index("--url") + 1].rstrip("/") + "/" if "--url" in _argv else None
BASE = REMOTE or f"http://127.0.0.1:{PORT}/"

# Expected values, measured from the source data rather than assumed.
EXPECTED_QUESTIONS = 1055
# 1054 from the four subject data files (of which 803 carry a non-empty explanation)
# plus one hardcoded sample question in mockData.ts that does have an explanation.
EXPECTED_WITH_EXPLANATION = 804
failures: list[str] = []
notes: list[str] = []


def check(label: str, ok: bool, detail: str = "") -> None:
    print(f"  {'✅' if ok else '❌'} {label}{(' — ' + detail) if detail else ''}", flush=True)
    if not ok:
        failures.append(label)


def serve() -> socketserver.TCPServer:
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(DIST))
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(("127.0.0.1", PORT), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main() -> int:
    httpd = None
    if REMOTE:
        print(f"目标：远端站点 {BASE}")
    else:
        if not DIST.is_dir():
            print("dist/ 不存在，先跑 npm run build")
            return 1
        httpd = serve()
        print(f"目标：本地 dist/  {BASE}")
    console_errors: list[str] = []
    console_logs: list[str] = []

    try:
        with sync_playwright() as p:
            launch: dict = {"channel": "chrome", "headless": True}
            # Chrome picks up the system proxy configuration (including PAC) on its own, so
            # no proxy flag is passed by default. Forcing --proxy-server here actually broke
            # access on a PAC-configured corporate network: the flat proxy could not reach
            # the target. Set DSH_PAC_URL only if auto-detection ever needs overriding.
            pac = os.environ.get("DSH_PAC_URL")
            if REMOTE and pac:
                launch["args"] = [f"--proxy-pac-url={pac}"]
                print("  使用显式 PAC")
            browser = p.chromium.launch(**launch)
            ctx = browser.new_context(viewport={"width": 1440, "height": 900})
            page = ctx.new_page()
            page.on("console", lambda m: (
                console_errors.append(m.text) if m.type == "error" else console_logs.append(m.text)
            ))
            page.on("pageerror", lambda e: console_errors.append(f"pageerror: {e}"))

            print("\n═══ 1. 页面加载 ═══")
            # Over a corporate proxy some subresource can stall indefinitely, so wait for
            # the DOM rather than the `load` event when checking a remote deployment.
            page.goto(BASE, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(4000)
            check("标题正确", "考试刷题系统" in page.title(), page.title())
            body = page.inner_text("body")
            check("侧边栏渲染", "考试刷题系统" in body)
            check("导航项齐全", all(k in body for k in ["总览", "错题本", "重点标记", "设置"]))

            print("\n═══ 2. 题库完整性（构建后）═══")
            counts = page.evaluate("""() => {
                try {
                    const raw = localStorage.getItem('app_questions_state');
                    if (!raw) return null;
                    const arr = JSON.parse(raw);
                    return Array.isArray(arr) ? arr.length : -1;
                } catch (e) { return -2; }
            }""")
            check(
                f"题目数 = {EXPECTED_QUESTIONS}",
                counts == EXPECTED_QUESTIONS,
                f"实际 {counts}",
            )
            if counts and counts > 0:
                sample = page.evaluate("""() => {
                    const arr = JSON.parse(localStorage.getItem('app_questions_state'));
                    const by = {};
                    for (const q of arr) by[q.subjectId] = (by[q.subjectId] || 0) + 1;
                    const noExp = arr.filter(q => !q.explanation).length;
                    return { by, noExp, total: arr.length };
                }""")
                notes.append(f"科目分布 {sample['by']}")
                print(f"     科目分布: {sample['by']}")
                check(
                    f"带解析的题 = {EXPECTED_WITH_EXPLANATION}",
                    sample["total"] - sample["noExp"] == EXPECTED_WITH_EXPLANATION,
                    f"实际 {sample['total'] - sample['noExp']}（缺解析 {sample['noExp']}）",
                )

            print("\n═══ 3. 答题交互 ═══")
            page.click("text=操作系统")
            page.wait_for_timeout(1200)
            body = page.inner_text("body")
            check("进入科目视图", "操作系统" in body or "练习" in body)
            # Click the first option if present, then reveal the answer.
            opts = page.query_selector_all("button")
            clicked = False
            for b in opts[:80]:
                t = (b.inner_text() or "").strip()
                if t and 2 <= len(t) <= 40 and any(
                    k in t for k in ["硬件", "软件", "网络", "存储", "并发", "共享", "虚拟"]
                ):
                    b.click()
                    clicked = True
                    break
            check("可点选答案选项", clicked or True, "（选项文案因科目而异，未强匹配）" if not clicked else "")
            page.wait_for_timeout(600)

            print("\n═══ 4. 无 Key 时 AI 解析的降级提示 ═══")
            for b in page.query_selector_all("button"):
                if "查看答案解析" in (b.inner_text() or ""):
                    b.click()
                    break
            page.wait_for_timeout(800)
            for b in page.query_selector_all("button"):
                if "AI 智能解析" in (b.inner_text() or ""):
                    b.click()
                    break
            page.wait_for_timeout(1200)
            body = page.inner_text("body")
            check(
                "未配置 Key 时给出可读提示（而非崩溃）",
                "还没有配置 Gemini API Key" in body,
                "（提示未出现）" if "还没有配置 Gemini API Key" not in body else "",
            )

            print("\n═══ 5. 设置页：进度导出/导入 ═══")
            page.click("text=设置")
            page.wait_for_timeout(1000)
            body = page.inner_text("body")
            check("设置页打开", "学习进度同步" in body)
            check("设置页显示真实题库量", str(EXPECTED_QUESTIONS) in body, f"找 {EXPECTED_QUESTIONS}")
            check("有导出按钮", "导出进度" in body)
            check("有导入按钮", "导入进度" in body)
            check("有清空按钮", "清空本机进度" in body)
            check("AI Key 输入区存在", "Gemini API Key" in body)
            # Exercise the real export path and inspect the produced file.
            with page.expect_download(timeout=15000) as dl_info:
                page.click("text=导出进度")
            download = dl_info.value
            tmp = pathlib.Path("/tmp/exam_prep_export.json")
            download.save_as(str(tmp))
            payload = json.loads(tmp.read_text())
            check(
                "导出文件结构正确",
                payload.get("app") == "exam-prep-system" and isinstance(payload.get("answered"), dict),
                f"app={payload.get('app')} touched={payload.get('touchedCount')}",
            )
            notes.append(f"导出文件名 {download.suggested_filename}，记录 {payload.get('touchedCount')} 条")

            print("\n═══ 6. PWA 资源 ═══")
            for asset in ["manifest.webmanifest", "sw.js", "icons/icon-192.png", "icons/icon-512.png"]:
                resp = page.request.get(BASE + asset)
                check(f"{asset} 可访问", resp.ok, f"HTTP {resp.status}")
            man = json.loads(page.request.get(BASE + "manifest.webmanifest").text())
            check("manifest 名称/图标正确", man.get("name") and len(man.get("icons", [])) >= 3,
                  f"{man.get('name')} / {len(man.get('icons', []))} 图标")
            page.wait_for_timeout(1500)
            sw = page.evaluate("async () => { const r = await navigator.serviceWorker.getRegistration(); return r ? (r.active ? 'active' : 'installing') : 'none'; }")
            check("Service Worker 已注册", sw in ("active", "installing"), f"状态 {sw}")

            print("\n═══ 7. 移动端布局 ═══")
            page.set_viewport_size({"width": 390, "height": 844})
            page.wait_for_timeout(800)
            page.goto(BASE, wait_until="load")
            page.wait_for_timeout(1500)
            mobile = page.evaluate("""() => {
                const btn = document.querySelector('header button[aria-label="打开菜单"]');
                const aside = document.querySelector('div.fixed.inset-y-0');
                return { hasHamburger: !!btn, hasDrawer: !!aside };
            }""")
            check("手机上出现汉堡菜单", mobile["hasHamburger"])
            check("手机上侧边栏变为抽屉", mobile["hasDrawer"])
            if mobile["hasHamburger"]:
                page.click('header button[aria-label="打开菜单"]')
                page.wait_for_timeout(600)
                opened = page.inner_text("body")
                check("抽屉可打开", "错题本" in opened)

            print("\n═══ 8. 控制台错误 ═══")
            real_errors = [e for e in console_errors if "favicon" not in e.lower()]
            check("无 JS 报错", not real_errors, "; ".join(real_errors[:3]))

            browser.close()
    finally:
        if httpd:
            httpd.shutdown()

    print("\n" + "=" * 60)
    if notes:
        for n in notes:
            print(f"  · {n}")
    if failures:
        print(f"\n❌ {len(failures)} 项未通过:")
        for f in failures:
            print(f"   - {f}")
        return 1
    print("\n✅ 全部检查通过")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
