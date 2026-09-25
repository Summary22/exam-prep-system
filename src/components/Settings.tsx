import React, { useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Eye,
  EyeOff,
  Info,
  KeyRound,
  RefreshCw,
  Smartphone,
  Sparkles,
  Trash2,
  Upload,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Question } from '@/src/data/mockData';
import {
  DEFAULT_GEMINI_MODEL,
  applyProgress,
  clearProgress,
  countAnswered,
  downloadProgress,
  extractProgress,
  loadSettings,
  parseProgressFile,
  saveSettings,
} from '@/src/lib/userState';
import { verifyApiKey } from '@/src/lib/gemini';

interface SettingsProps {
  questions: Question[];
  onImportProgress: (questions: Question[]) => void;
  onClearProgress: () => void;
}

type Tone = 'ok' | 'err' | 'info';

function Notice({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  const styles: Record<Tone, string> = {
    ok: 'bg-green-50 border-green-200 text-green-800',
    err: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };
  const Icon = tone === 'ok' ? CheckCircle2 : tone === 'err' ? AlertTriangle : Info;
  return (
    <div className={`flex items-start gap-2 p-3 border rounded-lg text-sm ${styles[tone]}`}>
      <Icon className="w-4 h-4 mt-0.5 shrink-0" />
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

export function Settings({ questions, onImportProgress, onClearProgress }: SettingsProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [importNotice, setImportNotice] = useState<{ tone: Tone; text: string } | null>(null);

  const initial = loadSettings();
  const [apiKey, setApiKey] = useState(initial.geminiApiKey || '');
  const [model, setModel] = useState(initial.geminiModel || '');
  const [showKey, setShowKey] = useState(false);
  const [keyNotice, setKeyNotice] = useState<{ tone: Tone; text: string } | null>(null);
  const [savedFlash, setSavedFlash] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const stats = useMemo(() => {
    const progress = extractProgress(questions);
    const entries = Object.values(progress);
    return {
      total: questions.length,
      answered: countAnswered(questions),
      incorrect: entries.filter((e) => e.isIncorrect).length,
      important: entries.filter((e) => e.isImportant).length,
      touched: entries.length,
      withExplanation: questions.filter((q) => (q.explanation || '').trim().length > 0).length,
    };
  }, [questions]);

  const handleExport = () => {
    const { filename, count } = downloadProgress(questions);
    setImportNotice({
      tone: 'ok',
      text: `已导出 ${count} 条记录到 ${filename}。把这个文件传到另一台设备，再点「导入进度」即可。`,
    });
  };

  const handleImportClick = () => fileRef.current?.click();

  const handleFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    evt.target.value = '';
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = parseProgressFile(text);
      const { questions: merged, applied, unknown } = applyProgress(questions, parsed);
      onImportProgress(merged);
      const when = parsed.exportedAt ? new Date(parsed.exportedAt).toLocaleString('zh-CN') : '未知时间';
      const unknownNote = unknown.length ? ` 有 ${unknown.length} 个题目 ID 已不存在，已跳过。` : '';
      setImportNotice({ tone: 'ok', text: `导入成功：应用了 ${applied} 条记录（导出于 ${when}）。${unknownNote}` });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setImportNotice({ tone: 'err', text: `导入失败：${msg}` });
    }
  };

  const handleClear = () => {
    if (!window.confirm('确定清空本机所有答题记录、错题本和重点标记吗？此操作不可撤销。')) return;
    clearProgress();
    onClearProgress();
    setImportNotice({ tone: 'info', text: '已清空本机进度。' });
  };

  const handleSaveKey = () => {
    saveSettings({ geminiApiKey: apiKey.trim(), geminiModel: model.trim() });
    setKeyNotice({ tone: 'ok', text: '已保存到本机浏览器。' });
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 1500);
  };

  const handleClearKey = () => {
    setApiKey('');
    setModel('');
    saveSettings({});
    setKeyNotice({ tone: 'info', text: '已清除 API Key。' });
  };

  const handleVerify = async () => {
    setVerifying(true);
    setKeyNotice(null);
    try {
      saveSettings({ geminiApiKey: apiKey.trim(), geminiModel: model.trim() });
      const reply = await verifyApiKey();
      setKeyNotice({ tone: 'ok', text: `Key 可用，模型返回：${reply}` });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setKeyNotice({ tone: 'err', text: `验证失败：${msg}` });
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">设置</h1>
        <p className="text-slate-500 mt-2">进度同步与可选的 AI 功能配置。所有数据都只存在你自己的浏览器里。</p>
      </div>

      {/* ── 进度同步 ───────────────────────────────────────────── */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <RefreshCw className="w-5 h-5 text-blue-600" />
            学习进度同步
          </CardTitle>
          <CardDescription>
            答题记录保存在本机浏览器（localStorage），<strong>不会自动跨设备同步</strong>。用下面的导出／导入在手机和电脑之间搬运进度。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: '题库总量', value: stats.total, cls: 'text-slate-900' },
              { label: '已作答', value: stats.answered, cls: 'text-blue-600' },
              { label: '错题', value: stats.incorrect, cls: 'text-red-600' },
              { label: '重点', value: stats.important, cls: 'text-amber-600' },
            ].map((s) => (
              <div key={s.label} className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
                <div className={`text-2xl font-bold ${s.cls}`}>{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={handleExport} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              导出进度
            </Button>
            <Button variant="outline" onClick={handleImportClick}>
              <Upload className="w-4 h-4 mr-2" />
              导入进度
            </Button>
            <Button variant="destructive" onClick={handleClear}>
              <Trash2 className="w-4 h-4 mr-2" />
              清空本机进度
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={handleFile}
            />
          </div>

          {importNotice && <Notice tone={importNotice.tone}>{importNotice.text}</Notice>}

          <Notice tone="info">
            导入是<strong>合并</strong>而不是覆盖：文件里没提到的题目，本机记录会保留。所以可以放心先导出、再导入。
          </Notice>
        </CardContent>
      </Card>

      {/* ── AI 解析 ───────────────────────────────────────────── */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="w-5 h-5 text-purple-600" />
            AI 智能解析（可选）
          </CardTitle>
          <CardDescription>
            题库共 {stats.total} 道题，其中 <strong>{stats.withExplanation} 道自带标准解析</strong>，
            另外 {stats.total - stats.withExplanation} 道只有答案、没有解析——这部分才是 AI 解析真正有用的地方。
            不配置这一项也完全能刷题，只是这些题看不到讲解。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">
              <KeyRound className="w-4 h-4" />
              Gemini API Key
            </Label>
            <div className="flex gap-2">
              <Input
                id="api-key"
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIza... （留空即禁用 AI 解析）"
                autoComplete="off"
                spellCheck={false}
              />
              <Button variant="outline" size="icon" onClick={() => setShowKey((v) => !v)} title={showKey ? '隐藏' : '显示'}>
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="api-model">模型（留空用默认）</Label>
            <Input
              id="api-model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder={DEFAULT_GEMINI_MODEL}
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={handleSaveKey} className="bg-purple-600 hover:bg-purple-700 text-white">
              {savedFlash ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <KeyRound className="w-4 h-4 mr-2" />}
              {savedFlash ? '已保存' : '保存'}
            </Button>
            <Button variant="outline" onClick={handleVerify} disabled={verifying || !apiKey.trim()}>
              {verifying ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : <CheckCircle2 className="w-4 h-4 mr-2" />}
              验证可用性
            </Button>
            <Button variant="ghost" onClick={handleClearKey} disabled={!apiKey && !model}>
              清除
            </Button>
          </div>

          {keyNotice && <Notice tone={keyNotice.tone}>{keyNotice.text}</Notice>}

          <Notice tone="info">
            Key 只保存在这台设备的浏览器里，<strong>不会上传到任何服务器，也不会被打包进网页文件</strong>。在 Google AI Studio 里可以免费获取，免费额度按天重置（太平洋时间午夜，即北京时间下午 4 点）。
          </Notice>
          <Notice tone="err">
            提醒：不要在公共电脑上保存 Key。浏览器里保存的凭证能被同机的其他程序读到。
          </Notice>
        </CardContent>
      </Card>

      {/* ── 关于 ─────────────────────────────────────────────── */}
      <Card className="border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Info className="w-5 h-5 text-slate-600" />
            关于
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            纯前端静态站点：题库、解析、错题本、重点标记全部在浏览器本地运行，没有后端服务器，因此<strong>永久免费</strong>，也不会因为服务下线而失效。
          </p>
          <p>
            「C 语言在线运行」调用公共编译服务 <code className="px-1 py-0.5 bg-slate-100 rounded">wandbox.org</code>，无需任何 Key；仅该功能依赖网络。
          </p>
          <p className="flex items-start gap-2">
            <Smartphone className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
            <span>
              手机上用浏览器打开后，可「添加到主屏幕」当作 App 使用，界面全屏、无需再输网址。
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
