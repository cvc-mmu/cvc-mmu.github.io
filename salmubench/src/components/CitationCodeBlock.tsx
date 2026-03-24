"use client";

import { useState } from "react";

interface CitationCodeBlockProps {
  text: string;
}

export function CitationCodeBlock({ text }: CitationCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="not-prose relative">
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded px-2 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto rounded-lg bg-zinc-100 dark:bg-zinc-800 p-4 pr-20 text-sm text-zinc-900 dark:text-zinc-100">
        <code>{text}</code>
      </pre>
    </div>
  );
}