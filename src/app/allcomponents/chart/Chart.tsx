"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreVertical, TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 6000 },
  { month: "Mar", value: 4000 },
  { month: "Apr", value: 7000 },
  { month: "Jun", value: 5000 },
  { month: "Jul", value: 12000 },
  { month: "Aug", value: 6000 },
  { month: "Sep", value: 4000 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex items-center gap-2 bg-secondary-dark text-neutrals-light px-3 py-1.5 rounded-lg">
        <TrendingUp className="w-4 h-4" />
        <span className="font-medium">
          Growth {payload[0].value.toLocaleString()}%
        </span>
      </div>
    );
  }
  return null;
};

const TransactionChart = () => {
  return (
    <Card className="w-[400px] p-6 bg-primary-dark border-primary-ash">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-neutrals-light mb-1">
            Transaction
          </h3>
          <div className="flex items-center gap-3">
            <span className="text-sm text-primary-muted">22 Oct-21 Nov</span>
            <span className="text-sm text-secondary-dark">+2.5%</span>
          </div>
        </div>
        <button className="p-1 hover:bg-primary-light/10 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-primary-muted" />
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        <Badge
          variant="secondary"
          className="bg-secondary-dark text-neutrals-light hover:bg-secondary-light"
        >
          Increment
        </Badge>
        <Badge
          variant="outline"
          className="text-primary-muted border-primary-ash hover:bg-primary-light/10"
        >
          Last year
        </Badge>
      </div>

      <div className="mb-2">
        <h4 className="text-sm text-primary-muted mb-1">Progress Chart</h4>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#85A6AD", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#85A6AD", fontSize: 12 }}
              dx={-10}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#41BB91"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: "#41BB91",
                strokeWidth: 2,
                stroke: "#101213",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TransactionChart;
