// components/examples/BarGraphExample.tsx
"use client";
import { useState, useEffect } from "react";
import CodePreview from "@/components/shared/CodeViewer1";
import BarGraph from "./BarGraph";

export default function BarGraphExample() {
  const [source, setSource] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `/api/source?path=${encodeURIComponent(
        "src/app/allcomponents/bargraph/BarGraph.tsx"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.source); // Print source
        setSource(data.source);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading source:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <CodePreview
      component={BarGraph}
      code={source}
    />
  );
}
