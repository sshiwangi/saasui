"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: "overview", label: "Overview" },
  { id: "analytics", label: "Analytics" },
  { id: "finance", label: "Finance" },
  { id: "workouts", label: "Workouts" },
];

const SegmentedTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-fit p-1 bg-primary-light/20 rounded-full relative">
      {/* Background Selector */}
      <motion.div
        className="absolute inset-y-1 rounded-full bg-secondary-dark"
        initial={false}
        animate={{
          width: `${100 / tabs.length}%`,
          x: `${tabs.findIndex((tab) => tab.id === activeTab) * 100}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />

      {/* Tabs */}
      <div className="relative flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-8 py-2 text-sm font-medium rounded-full transition-colors z-10",
              "min-w-[120px]",
              activeTab === tab.id
                ? "text-neutrals-light"
                : "text-primary-muted hover:text-neutrals-light"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SegmentedTabs;
