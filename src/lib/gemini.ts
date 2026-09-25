import type { GoogleGenAI } from '@google/genai';
import { DEFAULT_GEMINI_MODEL, loadSettings } from './userState';

/**
 * Thin wrapper around the optional Gemini client.
 *
 * Two deliberate choices:
 *
 *  - The key comes from localStorage at call time, never from a build-time constant,
 *    so the built bundle carries no credential.
 *  - `@google/genai` is imported dynamically. It is a large package that serves only
 *    the optional "AI 智能解析" button; bundling it eagerly would make every visitor
 *    download it just to answer practice questions. The chunk now loads on first use.
 */

export function getApiKey(): string | undefined {
  const key = (loadSettings().geminiApiKey || '').trim();
  return key === '' ? undefined : key;
}

export function getModel(): string {
  const model = (loadSettings().geminiModel || '').trim();
  return model === '' ? DEFAULT_GEMINI_MODEL : model;
}

export function hasApiKey(): boolean {
  return getApiKey() !== undefined;
}

let clientPromise: Promise<GoogleGenAI> | null = null;
let clientKey: string | undefined;

/** Resolve the Gemini client, loading the SDK chunk on first call. */
export async function getClient(): Promise<GoogleGenAI | null> {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  // Cache per key so repeated clicks reuse one client, but a changed key rebuilds it.
  if (clientPromise && clientKey === apiKey) return clientPromise;

  clientKey = apiKey;
  clientPromise = import('@google/genai').then(
    ({ GoogleGenAI: Ctor }) => new Ctor({ apiKey })
  );
  return clientPromise;
}

/** Prompt used by the "AI 智能解析" button. */
export function explanationPrompt(input: {
  text: string;
  options?: string[];
  answer: string | string[];
}): string {
  const options = input.options ? input.options.join(', ') : '无';
  return (
    `作为一个计算机专业的老师，请为以下题目提供详细的解析：\n\n` +
    `题目：${input.text}\n选项：${options}\n正确答案：${input.answer}\n\n` +
    `请给出详细、易懂的解析，帮助学生理解背后的知识点。`
  );
}

/** One tiny round-trip so the settings page can confirm a key actually works. */
export async function verifyApiKey(): Promise<string> {
  const ai = await getClient();
  if (!ai) throw new Error('还没有填写 API Key');
  const res = await ai.models.generateContent({
    model: getModel(),
    contents: '只回复两个字：可用',
  });
  const text = (res.text || '').trim();
  if (!text) throw new Error('接口返回了空内容');
  return text;
}
