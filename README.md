# 考试刷题系统 · 计算机自考

计算机专业自考刷题应用。四个科目、**1055 道题**，纯前端静态站点，无后端、无数据库、无需任何 API Key 即可完整使用。

| 科目 | 题目数 | 答案 | 解析 |
|---|---:|---:|---:|
| 操作系统 | 299 | 293 | 199（66.6%）|
| 高级语言程序设计 | 350 | 330 | 199（56.9%）|
| 计算机网络维护技术 | 206 | 206 | 206（100%）|
| 计算机导论 | 199 | 199 | 199（100%）|
| **合计** | **1055** | **1029** | **804（76.2%）** |

功能：按科目刷题、历年真题、错题本、重点标记、进度导出／导入、C 语言在线运行，可安装到手机主屏幕并离线使用。

---

## 快速开始

```bash
npm ci
npm run dev          # 开发服务器
npm run build        # 产出 dist/（纯静态，可直接托管）
npm run preview      # 本地预览构建产物
```

辅助脚本：

```bash
python3 scripts/audit_questions.py     # 题库完整性审计（答案/解析覆盖率、坏数据）
python3 scripts/make_icons.py          # 重新生成 PWA 图标
python3 scripts/verify_build.py        # 用无头浏览器端到端验证 dist/
```

> `verify_build.py` 需要 Playwright 与系统 Chrome；`make_icons.py` 需要 Pillow。两者都不参与构建。

---

## 部署

`base` 设为 `'./'`，所以**同一份构建产物可以放在任意路径**：GitHub Pages 的项目子路径、Cloudflare Pages、Netlify、任意静态服务器都行，不需要改配置。

### GitHub Pages（仓库已带 workflow）

推送到 `main` 后 `.github/workflows/deploy.yml` 会自动构建并发布。首次需要在仓库 **Settings → Pages → Source** 里选择 **GitHub Actions**。

访问地址形如 `https://<用户名>.github.io/<仓库名>/`。

### 其他静态托管

把 `dist/` 整个上传即可，无服务端要求。

---

## 关于 AI 智能解析

题目页有个可选的「AI 智能解析」按钮，用 Gemini 生成更详细的讲解。两点设计说明：

1. **API Key 不打包进产物。** Key 由用户在「设置」页自行填写，存在浏览器 `localStorage`，调用时才读取。换句话说，**构建产物里没有任何凭证**，可以放心公开托管。

   > 原始 AI Studio 导出用 `vite.config.ts` 的 `define` 把 Key 编译进了 JS bundle。那样一旦公开托管，任何访客按 F12 就能取走 Key。这里改掉了。

2. **SDK 按需加载。** `@google/genai` 通过动态 `import()` 拆成独立 chunk（约 284 KB），只有真的点了按钮才下载。不碰 AI 功能的用户不会为它付出首屏代价。

不填 Key 也完全不影响刷题，按钮会给出提示而不是报错。

---

## 学习进度与跨设备同步

进度存在浏览器 `localStorage`，因此**天然是分设备的**：手机上做的题不会自动出现在电脑上。

「设置」页提供**导出／导入**来手工搬运。导入是**合并**语义——文件里没提到的题目，本机记录会保留，所以不会因为导入旧备份而丢掉新做的题。

导出文件很小（只含用户自己的状态，不含题干），格式：

```json
{
  "app": "exam-prep-system",
  "version": 1,
  "exportedAt": "2026-09-25T04:18:00.000Z",
  "totalQuestions": 1055,
  "touchedCount": 42,
  "answered": { "os_q1": { "userAnswer": "软件系统", "isImportant": true } }
}
```

题目按 `id` 合并且答案存在，所以换设备后即使题库有更新，旧进度也能对上。

---

## 数据质量：已知问题

题库由 AI Studio 的解析脚本从 `data-sources/` 的原始素材生成，**存在已知缺陷**，不要指望它每题都有讲解：

```
有答案             1028  (97.5%)
有解析              803  (76.2%)
答案和解析都没有      26
有答案但无解析       225   ← AI 解析真正有用的部分

按 section：
  practice   801/821  97.6%
  exam         2/233   0.9%   ← 历年真题几乎全部没有解析
按题型：
  multiple_choice  60/60   100%
  single_choice   741/860  86.2%
  short_answer      2/134    1.5%
```

具体问题：

1. **历年真题几乎无解析。** 233 道 `exam` 题里只有 2 道带解析；操作系统和高级语言程序设计的真题基本是「有答案、无讲解」。
2. **简答题缺解析严重**（132/134）。这类题最需要参考答案。
3. **9 道题是解析事故的残渣。** 填空题的代码清单被按行拆成了独立「题目」，题干只剩半行代码（如 `prog_202510_39` 的题干就是 `struct call`），且没有答案。原始素材在 `data-sources/2025年10月真题_C.txt` 等处，可重新解析修复。
4. `src/data/mockData.ts` 里还留着一道 AI Studio 的示例题（`q5`），总计构成 1055。

跑 `python3 scripts/audit_questions.py` 可随时复查这些数字；界面上的「题库解析覆盖」面板也如实显示覆盖率。

---

## 项目结构

```
index.html                 入口（PWA meta / manifest / 图标引用）
vite.config.ts             构建配置（base: './'，不含任何密钥）
public/
  manifest.webmanifest     PWA 清单
  sw.js                    Service Worker：导航走网络优先并回退缓存，静态资源
                           stale-while-revalidate，跨域请求（Wandbox）不缓存
  icons/                   图标（SVG + 3 种 PNG，含 maskable）
src/
  main.tsx                 挂载 + 注册 Service Worker（仅生产环境）
  lib/userState.ts         进度与设置的读写、导出导入、合并逻辑
  lib/gemini.ts            Gemini 客户端（动态加载、Key 来自 localStorage）
  components/
    Layout.tsx             视图切换、题目状态、移动端顶栏
    Sidebar.tsx            导航（桌面固定 / 移动抽屉）
    Dashboard.tsx          总览 + 题库解析覆盖
    SubjectView.tsx        科目刷题
    QuestionCard.tsx       单题卡片
    IncorrectQuestions.tsx 错题本
    ImportantQuestions.tsx 重点标记
    Compiler.tsx           C 语言在线运行（调 wandbox.org）
    Settings.tsx           进度同步 + AI Key + 关于
  data/                    题库（4 个科目 + mockData 类型定义）
data-sources/              原始素材与 AI Studio 解析脚本（保留出处，不参与构建）
components/ui/             shadcn / Base UI 组件
scripts/                   审计、图标生成、构建验证
```

## 外部依赖

| 用途 | 服务 | 是否需要 Key |
|---|---|---|
| C 语言在线运行 | `wandbox.org/api/compile.json` | 否（公共免费服务）|
| AI 智能解析（可选）| Gemini API | 是，用户自备 |

除这两项外全部在浏览器本地运行。**C 语言在线运行是唯一必须联网的功能**，其余可离线使用。

## 出处与许可

代码由 Google AI Studio（Build / applet 导出）于 2026-04-07 生成，原始应用：
`https://ai.studio/apps/b9a42887-44cb-40ce-af9b-5bbb293cbe74`。
源文件保留 AI Studio 生成的 `SPDX-License-Identifier: Apache-2.0` 头。

在此基础上的改动：移除产物内嵌的 API Key、按需加载 AI SDK、新增 PWA 与离线支持、
进度导出导入、移动端抽屉导航、题库审计与如实展示覆盖率、修正原始数据中的错误统计文案。
