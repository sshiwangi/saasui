"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell } from "recharts";

interface GrantData {
  name: string;
  value: number;
  color: string;
}

interface GrantPieChartProps {
  data?: GrantData[];
  title?: string;
  totalAreas?: number;
}

const defaultData: GrantData[] = [
  { name: "Welfare for all grants", value: 44, color: "#6B7280" },
  { name: "Melbourne grant", value: 19, color: "#93C5FD" },
  { name: "Liberty grant", value: 16, color: "#67E8F9" },
  { name: "Inner city grant", value: 12, color: "#6EE7B7" },
  { name: "Community grant", value: 9, color: "#A5B4FC" },
];

const GrantPieChart = ({
  data = defaultData,
  title = "5 areas",
  totalAreas = 1,
}: GrantPieChartProps) => {
  return (
    <Card className="p-6 bg-primary-dark border-primary-ash w-fit">
      <div className="flex items-baseline gap-2 mb-4">
        <h3 className="text-2xl font-semibold text-neutrals-light">{title}</h3>
        <span className="text-primary-muted">(+{totalAreas})</span>
      </div>

      <div className="flex items-center gap-8">
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={80}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="flex flex-col gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-neutrals-light">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default GrantPieChart;
