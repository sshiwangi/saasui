"use client";

import { useState, useEffect } from "react";
import CodePreview from "@/components/shared/CodeViewer1";
import UserStats from "./Stats";

export default function UserStatsExample() {
  const [source, setSource] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `/api/source?path=${encodeURIComponent(
        "src/app/allcomponents/stats/Stats.tsx"
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
      <CodePreview component={UserStats} code={source} />
    </div>
  );
}
