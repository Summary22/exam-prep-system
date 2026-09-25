import type { Question } from '@/src/data/mockData';

/**
 * Local persistence helpers.
 *
 * Two separate concerns live here:
 *
 * 1. App settings (the Gemini API key the user optionally supplies). The key is kept
 *    in localStorage and read at call time, so no credential is ever baked into the
 *    built JavaScript. This is what replaced the AI Studio `define`-inlined key.
 *
 * 2. Study progress. Progress lives in localStorage, which means it is per-device:
 *    answers marked on a phone do not appear on a laptop. The export/import helpers
 *    below move progress between devices as a small JSON file.
 */

export const PROGRESS_KEY = 'app_questions_state';
export const SETTINGS_KEY = 'app_settings';

/** Model used for the optional "AI 智能解析" button. */
export const DEFAULT_GEMINI_MODEL = 'gemini-3-flash-preview';

export interface AppSettings {
  geminiApiKey?: string;
  geminiModel?: string;
}

export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') return parsed as AppSettings;
    return {};
  } catch (err) {
    console.error('读取设置失败', err);
    return {};
  }
}

export function saveSettings(next: AppSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  } catch (err) {
    console.error('保存设置失败', err);
  }
}

/** The user's own part of a question's state — everything else is static data. */
export interface ProgressEntry {
  userAnswer?: string | string[] | null;
  isImportant?: boolean;
  isIncorrect?: boolean;
  showAnswer?: boolean;
}

export interface ProgressFile {
  app: string;
  version: number;
  exportedAt: string;
  totalQuestions: number;
  touchedCount: number;
  answered: Record<string, ProgressEntry>;
}

const FILE_APP = 'exam-prep-system';
const FILE_VERSION = 1;

function entryOf(q: Question): ProgressEntry | null {
  const entry: ProgressEntry = {};
  let touched = false;

  const answer = q.userAnswer;
  const hasAnswer =
    answer !== undefined &&
    answer !== null &&
    !(Array.isArray(answer) && answer.length === 0) &&
    !(typeof answer === 'string' && answer.trim() === '');
  if (hasAnswer) {
    entry.userAnswer = answer;
    touched = true;
  }
  if (q.isImportant) {
    entry.isImportant = true;
    touched = true;
  }
  if (q.isIncorrect) {
    entry.isIncorrect = true;
    touched = true;
  }
  if (q.showAnswer) {
    entry.showAnswer = true;
    touched = true;
  }

  return touched ? entry : null;
}

/** Reduce the full question list to just the entries the user actually touched. */
export function extractProgress(questions: Question[]): Record<string, ProgressEntry> {
  const out: Record<string, ProgressEntry> = {};
  for (const q of questions) {
    const entry = entryOf(q);
    if (entry) out[q.id] = entry;
  }
  return out;
}

export function countAnswered(questions: Question[]): number {
  return Object.values(extractProgress(questions)).filter((e) => e.userAnswer !== undefined).length;
}

export function buildProgressFile(questions: Question[]): ProgressFile {
  const answered = extractProgress(questions);
  return {
    app: FILE_APP,
    version: FILE_VERSION,
    exportedAt: new Date().toISOString(),
    totalQuestions: questions.length,
    touchedCount: Object.keys(answered).length,
    answered,
  };
}

function stamp(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}

/** Trigger a browser download of the progress file. Returns what was written. */
export function downloadProgress(questions: Question[]): { filename: string; count: number } {
  const file = buildProgressFile(questions);
  const filename = `刷题进度-${stamp()}.json`;
  const blob = new Blob([JSON.stringify(file, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // Revoke on the next tick so Safari has time to start the download.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return { filename, count: file.touchedCount };
}

/** Parse and validate an imported progress file. Throws with a readable message. */
export function parseProgressFile(text: string): ProgressFile {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('不是合法的 JSON 文件');
  }
  if (!parsed || typeof parsed !== 'object') throw new Error('文件内容不是一个对象');
  const obj = parsed as Partial<ProgressFile>;
  if (obj.app !== FILE_APP) {
    throw new Error(`不是本应用的进度文件（app = ${String(obj.app ?? '缺失')}）`);
  }
  if (!obj.answered || typeof obj.answered !== 'object') {
    throw new Error('文件里没有 answered 字段');
  }
  return {
    app: FILE_APP,
    version: typeof obj.version === 'number' ? obj.version : FILE_VERSION,
    exportedAt: typeof obj.exportedAt === 'string' ? obj.exportedAt : '',
    totalQuestions: typeof obj.totalQuestions === 'number' ? obj.totalQuestions : 0,
    touchedCount: typeof obj.touchedCount === 'number' ? obj.touchedCount : Object.keys(obj.answered).length,
    answered: obj.answered as Record<string, ProgressEntry>,
  };
}

/**
 * Apply an imported progress file onto the question list.
 *
 * Fields absent from an entry are left alone, so importing a file that only records
 * wrong-answer marks does not wipe the answers already on this device. Question ids in
 * the file that no longer exist in the bank are reported rather than silently dropped.
 */
export function applyProgress(
  questions: Question[],
  file: ProgressFile
): { questions: Question[]; applied: number; unknown: string[] } {
  const known = new Set(questions.map((q) => q.id));
  const unknown = Object.keys(file.answered).filter((id) => !known.has(id));

  let applied = 0;
  const next = questions.map((q) => {
    const entry = file.answered[q.id];
    if (!entry) return q;
    applied += 1;
    const merged: Question = { ...q };
    if ('userAnswer' in entry) merged.userAnswer = entry.userAnswer ?? null;
    if ('isImportant' in entry) merged.isImportant = !!entry.isImportant;
    if ('isIncorrect' in entry) merged.isIncorrect = !!entry.isIncorrect;
    if ('showAnswer' in entry) merged.showAnswer = !!entry.showAnswer;
    return merged;
  });

  return { questions: next, applied, unknown };
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(PROGRESS_KEY);
  } catch (err) {
    console.error('清空进度失败', err);
  }
}
