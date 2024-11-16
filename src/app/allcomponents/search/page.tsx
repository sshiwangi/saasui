"use client";

import { useState, useEffect } from "react";
import CodePreview from "@/components/shared/CodeViewer1";
import CommandPalette from "./Search";

const CommandPaletteExample = () => {
  const [source, setSource] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `/api/source?path=${encodeURIComponent(
        "src/app/allcomponents/search/Search.tsx"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSource(data.source);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading source:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px] text-primary-muted">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8 h-full">
        <CodePreview component={CommandPalette} code={source} />
      </div>
  );
};

export default CommandPaletteExample;
