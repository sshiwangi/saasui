"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Users, MoreHorizontal } from "lucide-react";

const GaugeSemicircle = ({ percentage }: { percentage: number }) => {
  const radius = 85;
  const strokeWidth = 12;
  const normalizedPercentage = percentage > 100 ? 100 : percentage;
  const circumference = radius * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const rotation = -90;
  const strokeDashoffset =
    circumference - (normalizedPercentage / 100) * circumference;

  return (
    <div className="relative w-[200px] h-[100px] overflow-hidden">
      {/* Background Arc */}
      <svg
        className="absolute transform -rotate-180"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{ overflow: "visible" }}
      >
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#272B2B"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={circumference / 2}
          style={{
            transformOrigin: "center",
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </svg>

      {/* Foreground Arc */}
      <svg
        className="absolute transform -rotate-180"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{ overflow: "visible" }}
      >
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#41BB91"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transformOrigin: "center",
            transform: `rotate(${rotation}deg)`,
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>

      {/* Center Icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[10px]">
        <div className="bg-primary-light/20 p-2 rounded-full">
          <Users className="w-5 h-5 text-secondary-dark" />
        </div>
      </div>
    </div>
  );
};

const UserStats = () => {
  const totalUsers = 2324;
  const premiumUsers = 1809;
  const basicUsers = 515;
  const percentagePremium = (premiumUsers / totalUsers) * 100;

  return (
    <Card className="w-[300px] p-6 bg-primary-dark border-primary-ash">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-medium text-neutrals-light">
            Registered users
          </h3>
          <p className="text-sm text-primary-muted">
            an overview of your users
          </p>
        </div>
        <button className="p-1 hover:bg-primary-light/10 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-primary-muted" />
        </button>
      </div>

      <div className="flex flex-col items-center mt-6">
        <GaugeSemicircle percentage={percentagePremium} />

        <div className="text-center -mt-4">
          <h2 className="text-3xl font-bold text-neutrals-light">
            {totalUsers.toLocaleString()}
          </h2>
          <p className="text-primary-muted text-sm">Total Users</p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <div className="flex items-center gap-2">
          <div className="w-1 h-14 bg-secondary-dark rounded-full" />
          <div>
            <p className="text-lg font-semibold text-neutrals-light">
              {premiumUsers.toLocaleString()}
            </p>
            <p className="text-sm text-primary-muted">Premium Plan</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-1 h-14 bg-primary-ash rounded-full" />
          <div>
            <p className="text-lg font-semibold text-neutrals-light">
              {basicUsers.toLocaleString()}
            </p>
            <p className="text-sm text-primary-muted">Basic Plan</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserStats;
