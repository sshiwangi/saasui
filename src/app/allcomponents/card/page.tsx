"use client";

import { useState, useEffect } from "react";
import CodePreview from "@/components/shared/CodeViewer1";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Settings } from "lucide-react";

const CardShowcase = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>Default card with header and content</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-neutrals-light">This is the basic card content.</p>
      </CardContent>
    </Card>
  );
};

export default function CardExample() {
  const [source, setSource] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `/api/source?path=${encodeURIComponent(
        "src/app/allcomponents/card/Card.tsx"
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
      <CodePreview component={CardShowcase} code={source} />
    </div>
  );
}
