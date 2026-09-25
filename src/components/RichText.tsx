import React from 'react';

/**
 * Renders question/option text that may contain inline image references.
 *
 * Some subjects (离散数学, 高等数学（工本）) express formulas as images rather than text.
 * Those are embedded in the data as `![](qimg/<file>)` tokens, which keep the string a
 * plain string — important because option correctness is decided by exact string equality
 * against `question.answer`.
 *
 * A 【图片缺失】 marker is rendered as a visible warning instead of vanishing silently,
 * since a handful of source questions referenced images that were never shipped with the
 * original material.
 */

const TOKEN = /!\[\]\(([^)]+)\)|\u3010\u56FE\u7247\u7F3A\u5931\u3011/g;

export function RichText({
  text,
  imageClassName = 'inline-block max-h-8 align-middle mx-0.5',
}: {
  text: string;
  imageClassName?: string;
}) {
  if (!text) return null;

  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  let key = 0;

  while ((m = TOKEN.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1]) {
      nodes.push(
        <img
          key={`img-${key++}`}
          src={m[1]}
          alt="公式"
          loading="lazy"
          className={imageClassName}
        />
      );
    } else {
      nodes.push(
        <span
          key={`miss-${key++}`}
          className="inline-block align-middle mx-0.5 px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-medium"
          title="原始题库中该处为图片，但素材未随文件提供，无法还原"
        >
          图片缺失
        </span>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes}</>;
}
