"use client";

import { useState, useEffect } from "react";
import CodePreview from "@/components/shared/CodeViewer1";
import ProfileCard from "./ProfileCard";

interface CodePreviewProps {
  component: () => JSX.Element;
  code: string;
}

export default function ProfileCardExample() {
  const [source, setSource] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `/api/source?path=${encodeURIComponent(
        "src/app/allcomponents/profilecard/ProfileCard.tsx"
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

  const profileData = {
    name: "Emma Green",
    role: "Agent & Team Leader @ Blue Banks Realty LLC",
    license: "01753779",
    bio: "Principal and Founder of GreenHouse team. Miami Beach native – I spend time golfing, walking my dogs, and helping clients find their dream home.",
    website: "emmagreen.com",
    experience: "10+ years",
    company: "GreenHouse",
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px] text-primary-muted">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-secondary-dark"></div>
        <span className="ml-3">Loading...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8 h-full">
      <CodePreview
        component={() => <ProfileCard {...profileData} />}
        code={source}
      />
    </div>
  );
}
