"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeViewer = ({
  code,
  preview,
}: {
  code: string;
  preview: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden mb-4">
      <div className="flex justify-start gap-4 p-2 bg-gray-900 border-b border-gray-300">
        <button
          onClick={togglePreview}
          className="px-3 py-1 bg-gray-600 text-white rounded hover:opacity-95"
        >
          {isPreview ? "View Code" : "Preview"}
        </button>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="px-3 py-1 bg-gray-600 text-white rounded hover:opacity-95">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
      <div className="p-4 bg-gray-900">
        {isPreview ? (
          <div className="h-[350px] flex items-center justify-center w-full">
            {preview}
          </div>
        ) : (
          <SyntaxHighlighter language="javascript" style={dark}>
            {code}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default CodeViewer;
