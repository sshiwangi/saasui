"use client";

import { useState, useEffect } from "react";
import CodePreview from "@/components/shared/CodeViewer1";
import { AvatarStack } from "./Avatar";

const AvatarStackShowcase = () => {
  const demoAvatars = [
    {
      src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "User 1",
    },
    {
      src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "User 2",
    },
    {
      src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "User 3",
    },
    {
      src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "User 4",
    },
    {
      src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "User 5",
    },
    {
      src: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "User 6",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-start">
      <AvatarStack
        avatars={demoAvatars}
        showAdd
        onAddClick={() => console.log("Add clicked")}
      />
    </div>
  );
};

export default function AvatarStackExample() {
  const [source, setSource] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `/api/source?path=${encodeURIComponent(
        "src/app/allcomponents/avatar/Avatar.tsx"
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
      <CodePreview component={AvatarStackShowcase} code={source} />
    </div>
  );
}
