"use client";

import {
  Bar,
  BarChart as BarChartComponent,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface BarChartProps {
  data: any[];
}

export function BarChart({ data }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChartComponent data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#41BB91" radius={[4, 4, 0, 0]} />
      </BarChartComponent>
    </ResponsiveContainer>
  );
}
