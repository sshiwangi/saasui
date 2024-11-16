"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { MoreVertical, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface DayStats {
  day: string;
  percentage: number;
  isActive?: boolean;
}

const activityData: DayStats[] = [
  { day: "Mon", percentage: 92, isActive: true },
  { day: "Tue", percentage: 41, isActive: true },
  { day: "Wed", percentage: 78, isActive: true },
  { day: "Thu", percentage: 0, isActive: false },
  { day: "Fri", percentage: 0, isActive: false },
];

const averagePercentage = 83;
const percentageIncrease = 12;

const ActivityBar = ({ percentage, day, isActive }: DayStats) => (
  <div className="flex flex-col items-center gap-2 w-full">
    <div className="relative w-full h-32 bg-primary-light/20 rounded-xl overflow-hidden">
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />

      {/* Activity bar */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 w-full bg-gradient-to-t from-secondary-dark to-secondary-light"
        style={{
          opacity: isActive ? 1 : 0.3,
        }}
      />

      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 5px,
            rgba(255,255,255,0.1) 5px,
            rgba(255,255,255,0.1) 10px
          )`,
        }}
      />
    </div>
    <span className="text-primary-muted text-sm">{day}</span>
    <span className="text-neutrals-light text-sm">{percentage}%</span>
  </div>
);

const ActivityTracker = () => {
  return (
    <Card className="w-[400px] p-6 bg-primary-dark border-primary-ash">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl text-neutrals-light font-medium">
              Activity
            </h2>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-dark/20 text-secondary-dark">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs font-medium">
                +{percentageIncrease}%
              </span>
            </div>
          </div>
          <p className="text-4xl font-semibold text-neutrals-light">
            {averagePercentage}%
          </p>
        </div>
        <button className="p-1 hover:bg-primary-light/10 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-primary-muted" />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {activityData.map((data) => (
          <ActivityBar key={data.day} {...data} />
        ))}
      </div>
    </Card>
  );
};

export default ActivityTracker;
