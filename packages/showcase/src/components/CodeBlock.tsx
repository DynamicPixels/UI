"use client";

import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import jsx from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";

// Register languages
SyntaxHighlighter.registerLanguage("javascript", jsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", typescript);

interface CodeBlockProps {
  children: string;
  language?: string;
  theme?: "light" | "dark";
  showCopyButton?: boolean;
  title?: string;
  className?: string;
}

export function CodeBlock({
  children,
  language = "jsx",
  theme = "dark",
  showCopyButton = true,
  title,
  className = "",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {title && (
        <div className="bg-gray-900 text-gray-100 px-4 py-2 text-sm font-medium rounded-t-lg border-b border-gray-600">
          {title}
        </div>
      )}

      <div className="relative">
        {showCopyButton && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 z-10 px-3 py-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-100 rounded transition-colors opacity-0 group-hover:opacity-100 border border-gray-600"
            title="Copy code"
          >
            {copied ? (
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Copied
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                Copy
              </span>
            )}
          </button>
        )}

        <SyntaxHighlighter
          language={language}
          className="text-gray-50"
          style={theme === "dark" ? atomOneDark : atomOneLight}
          customStyle={{
            margin: 0,
            borderRadius: title ? "0 0 0.5rem 0.5rem" : "0.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            padding: "1rem",
          }}
          showLineNumbers={false}
          wrapLines={true}
          wrapLongLines={true}
        >
          {children.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeBlock;
