import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Eye, Copy, Check } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodePreviewProps {
  component: React.ComponentType;
  code: string;
}

const CodePreview = ({ component: Component, code }: CodePreviewProps) => {
  const [view, setView] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full max-w-4xl mx-auto rounded-lg overflow-hidden bg-primary-dark border border-primary-ash">
      <div className="flex items-center justify-end p-4 border-b border-primary-ash">
        <div className="flex gap-2">
          <button
            onClick={() => setView("preview")}
            className={`p-2 rounded-md transition-colors ${
              view === "preview"
                ? "bg-primary-ash text-neutrals-light"
                : "text-primary-muted hover:text-secondary-dark"
            }`}
          >
            <Eye size={20} />
          </button>
          <button
            onClick={() => setView("code")}
            className={`p-2 rounded-md transition-colors ${
              view === "code"
                ? "bg-primary-ash text-neutrals-light"
                : "text-primary-muted hover:text-secondary-dark"
            }`}
          >
            <Code size={20} />
          </button>
        </div>
      </div>

      <div className="relative h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {view === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-primary-dark p-6"
            >
              <Component />
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 w-full h-full overflow-auto"
            >
              <div className="relative">
                <button
                  onClick={copyToClipboard}
                  className="absolute right-4 top-4 p-2 rounded-md bg-primary-ash/50 hover:bg-primary-ash transition-colors text-primary-muted hover:text-secondary-dark z-10"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
                <div className="overflow-auto">
                  <SyntaxHighlighter
                    language="tsx"
                    style={oneDark}
                    showLineNumbers
                    customStyle={{
                      margin: 0,
                      padding: "1.5rem",
                      background: "transparent",
                    }}
                    wrapLines
                    wrapLongLines
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CodePreview;
