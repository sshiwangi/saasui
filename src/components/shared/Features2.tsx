"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { BarChart } from "@/components/ui/chart";

const data = [
  {
    name: "Jan",
    total: 100,
  },
  {
    name: "Feb",
    total: 89,
  },
  {
    name: "Mar",
    total: 75,
  },
  {
    name: "Apr",
    total: 65,
  },
  {
    name: "May",
    total: 55,
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101213] to-[#1C2021] p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-white">
            Beautiful UI Components
          </h1>
          <p className="text-gray-400">
            Re-usable components built using Radix UI and Tailwind CSS.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Installation Card */}
          <Card className="bg-[#1C2021] border-0 shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-4xl font-bold text-white">Install</span>
                  <p className="text-gray-400">
                    Quick setup. Easy integration.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-48 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Globe className="w-32 h-32 text-[#41BB91] opacity-20" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Installation Guide
                </h3>
                <p className="text-gray-400 text-sm">
                  Copy-paste the install command. Integrated with your favorite
                  tools and frameworks.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Components Usage */}
          <Card className="bg-[#1C2021] border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Component Usage</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <BarChart data={data} />
            </CardContent>
          </Card>

          {/* Component Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-[#1C2021] border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-gray-400">Components</p>
                  <p className="text-3xl font-bold text-white">40+</p>
                  <p className="text-[#41BB91]">Ready to use</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#1C2021] border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-gray-400">Styles</p>
                  <p className="text-3xl font-bold text-white">100+</p>
                  <p className="text-[#41BB91]">Variants</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Documentation */}
          <Card className="bg-[#1C2021] border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Documentation</CardTitle>
              <p className="text-gray-400 text-sm">
                Comprehensive guides and API references for all components
              </p>
            </CardHeader>
            <CardContent className="h-48">
              <BarChart data={data} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
