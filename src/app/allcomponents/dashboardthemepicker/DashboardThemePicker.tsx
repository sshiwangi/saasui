"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Theme {
  id: string;
  preview: {
    background: string;
    window: {
      background: string;
      dots: string;
    };
    sidebar: string;
    content: string;
    boxes: string;
  };
}

const themes: Theme[] = [
  {
    id: "dark",
    preview: {
      background: "bg-[#15181A]",
      window: {
        background: "#1C1F21",
        dots: "#464A4D",
      },
      sidebar: "#252829",
      content: "#1C1F21",
      boxes: "#2A2E30",
    },
  },
  {
    id: "light",
    preview: {
      background: "bg-[#F8F8F8]",
      window: {
        background: "#FFFFFF",
        dots: "#E0E0E0",
      },
      sidebar: "#FFFFFF",
      content: "#F8F8F8",
      boxes: "#EAEAEA",
    },
  },
  {
    id: "golden",
    preview: {
      background: "bg-[#E6D5B8]",
      window: {
        background: "#E6D5B8",
        dots: "#B8A88A",
      },
      sidebar: "#D4C4A3",
      content: "#E6D5B8",
      boxes: "#C4B190",
    },
  },
];

const WindowPreview = ({
  theme,
  isSelected,
  isTransparent,
}: {
  theme: Theme;
  isSelected: boolean;
  isTransparent: boolean;
}) => (
  <button
    className={cn(
      "relative w-full rounded-xl overflow-hidden transition-all duration-200",
      theme.preview.background,
      isSelected
        ? "ring-2 ring-secondary-dark"
        : "hover:ring-2 hover:ring-primary-muted"
    )}
  >
    <div
      className="aspect-video relative p-2"
      style={{ backgroundColor: theme.preview.window.background }}
    >
      {/* Window Controls */}
      <div className="absolute top-2 left-2 flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: theme.preview.window.dots }}
          />
        ))}
      </div>

      {/* Browser Content */}
      <div className="mt-4 h-full flex">
        {/* Sidebar */}
        <div
          className="w-1/3 h-full rounded-l-md transition-colors duration-200"
          style={{
            backgroundColor: isTransparent
              ? "transparent"
              : theme.preview.sidebar,
          }}
        >
          <div className="p-2 space-y-1.5">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-1 rounded-full w-8"
                style={{ backgroundColor: theme.preview.boxes }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          className="flex-1 h-full rounded-r-md"
          style={{ backgroundColor: theme.preview.content }}
        >
          <div className="p-3 grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-2 rounded"
                style={{ backgroundColor: theme.preview.boxes }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </button>
);

const ThemeCustomizer = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const [sidebarTransparent, setSidebarTransparent] = useState(false);

  return (
    <Card className="w-[480px] p-8 bg-primary-dark border-primary-ash">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <h2 className="text-[2.5rem] font-light tracking-tight text-neutrals-light">
          Appearance
        </h2>
        <button className="p-2 rounded-full hover:bg-primary-light transition-colors">
          <X className="w-6 h-6 text-primary-muted" />
        </button>
      </div>

      {/* Theme Section */}
      <div className="space-y-10">
        <div>
          <h3 className="text-xl text-neutrals-light">Theme</h3>
          <p className="text-primary-muted text-lg mt-1">Customize UI colors</p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            {themes.map((theme) => (
              <WindowPreview
                key={theme.id}
                theme={theme}
                isSelected={selectedTheme.id === theme.id}
                isTransparent={sidebarTransparent}
              />
            ))}
          </div>
        </div>

        {/* Sidebar Toggle */}
        <div className="flex items-center justify-between py-2">
          <div>
            <h3 className="text-xl text-neutrals-light">Sidebar</h3>
            <p className="text-primary-muted text-lg mt-1">
              Make the sidebar transparent
            </p>
          </div>
          <Switch
            checked={sidebarTransparent}
            onCheckedChange={setSidebarTransparent}
            className="data-[state=checked]:bg-secondary-dark"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex gap-4 mt-10">
        <button className="flex-1 py-3 rounded-xl border border-primary-ash text-neutrals-light hover:bg-primary-light/10 transition-colors">
          Cancel
        </button>
        <button className="flex-1 py-3 rounded-xl bg-secondary-dark text-neutrals-light hover:bg-secondary-light transition-colors">
          Save
        </button>
      </div>
    </Card>
  );
};

export default ThemeCustomizer;
