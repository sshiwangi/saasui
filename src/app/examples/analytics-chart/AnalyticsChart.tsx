"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const timeRanges = [
  { label: "Last 3 months", value: "3m" },
  { label: "Last 6 months", value: "6m" },
  { label: "Last year", value: "1y" },
];

const data = [
  { name: "Jul", value: 0 },
  { name: "Jul", value: 0 },
  { name: "Aug", value: 500 },
  { name: "Aug", value: 500 },
  { name: "Sep", value: 1000 },
  { name: "Sep", value: 645 },
];

const PageViewsChart = () => {
  const [timeRange, setTimeRange] = useState("3m");

  return (
    <Card className="p-6 w-[350px] bg-primary-dark border-primary-ash">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-neutrals-light">Page Views</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-1.5 bg-primary-light rounded-lg text-neutrals-light hover:bg-primary-ash transition-colors text-sm">
            Last 3 month
            <ChevronDown className="w-4 h-4 opacity-60" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-primary-dark border-primary-ash"
          >
            {timeRanges.map((range) => (
              <DropdownMenuItem
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className="text-neutrals-light hover:bg-primary-light focus:bg-primary-light"
              >
                {range.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className="text-[32px] font-semibold text-neutrals-light">
          645
        </span>
        <div className="flex items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-secondary-dark -rotate-180"
          >
            <path
              d="M12 4v16m7-7-7 7-7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-medium text-secondary-dark">18%</span>
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#41BB91" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#41BB91" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="6 6"
              vertical={false}
              stroke="#272B2B"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#85A6AD", fontSize: 14 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#85A6AD", fontSize: 14 }}
              tickFormatter={(value) => (value === 1000 ? "1K" : value)}
              ticks={[0, 500, 1000]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#41BB91"
              strokeWidth={2}
              fill="url(#colorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PageViewsChart;
