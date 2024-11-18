"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { MoreHorizontal, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PageData {
  path: string;
  visitors: number;
  percentage: number;
}

const pages: PageData[] = [
  { path: "/Home page", visitors: 832, percentage: 100 },
  { path: "/Pricing", visitors: 450, percentage: 54 },
  { path: "/Contact", visitors: 320, percentage: 38 },
  { path: "/News", visitors: 200, percentage: 24 },
  { path: "/About", visitors: 345, percentage: 41 },
];

const PagesAnalytics = () => {
  const [activeTab, setActiveTab] = useState<string>("Pages");

  return (
    <Card className="bg-primary-dark border-primary-ash">
      {/* Header with Tabs and Actions */}
      <div className="flex justify-between items-center p-4 border-b border-primary-ash">
        <div className="flex bg-primary-light/5 rounded-lg p-1">
          {["Pages", "Entry Pages", "Exit Pages"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-neutrals-light text-primary-dark"
                  : "text-primary-muted hover:text-neutrals-light"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-primary-light/5 text-neutrals-light px-4 py-1.5 rounded-lg flex items-center gap-2">
              This month
              <ChevronDown className="w-4 h-4 opacity-60" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-primary-dark border-primary-ash"
            >
              {["This week", "This month", "Last 3 months"].map((item) => (
                <DropdownMenuItem
                  key={item}
                  className="text-primary-muted hover:text-neutrals-light hover:bg-primary-light/10"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="p-2 rounded-lg text-primary-muted hover:bg-primary-light/5">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr,2fr,auto] gap-4 px-4 mb-2">
          <span className="text-primary-muted">Pages Name</span>
          <span className="text-primary-muted">Visitors</span>
          <span className="text-primary-muted text-right w-[60px]"></span>
        </div>

        {/* Table Rows */}
        <div className="space-y-2">
          {pages.map((page) => (
            <div
              key={page.path}
              className="grid grid-cols-[1fr,2fr,auto] gap-4 px-4 items-center"
            >
              <span className="text-neutrals-light">{page.path}</span>
              <div className="h-2 rounded bg-primary-light/5">
                <div
                  className="h-full rounded bg-secondary-dark transition-all"
                  style={{ width: `${page.percentage}%` }}
                />
              </div>
              <span className="text-neutrals-light text-right w-[60px]">
                {page.visitors}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PagesAnalytics;
