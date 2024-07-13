import React, { useState } from "react";
import clsx from "clsx";

interface TabProps {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  containerClassName?: string;
}

export function Tabs({ tabs, containerClassName }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={clsx("border border-gray-700 rounded-lg", containerClassName)}
    >
      <div className="flex border-b border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={clsx(
              "p-4 cursor-pointer",
              activeTab === index
                ? "bg-gray-900 text-white"
                : "bg-gray-800 text-gray-400"
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
}
