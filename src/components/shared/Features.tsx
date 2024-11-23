"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Terminal,
  Code2,
  Rocket,
  Code,
  Palette,
  Settings,
  Layout,
  Sparkles,
  Sun,
  Moon,
  Zap,
  Paintbrush,
  Smartphone,
  Shield,
  Check,
  Copy,
  Boxes,
  Box,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import InstallationCard from "./InstallationFeat";

const data = [
  { name: "Jan", total: 100 },
  { name: "Feb", total: 89 },
  { name: "Mar", total: 75 },
  { name: "Apr", total: 65 },
  { name: "May", total: 55 },
];

const installSteps = [
  "npm install @ui/components",
  "import { Button } from '@ui/components'",
  "<Button>Click me!</Button>",
];

const Features = () => {
  const [count, setCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-increment animation for stats
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < 40) {
        setCount((prev) => prev + 1);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [count]);

  // Installation step animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % installSteps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101213] to-[#1C2021] p-8">
      <motion.div
        className="max-w-7xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="space-y-2 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-4xl font-bold text-white">
            Beautiful UI Components
          </h1>
          <p className="text-gray-400">
            Re-usable components built using Radix UI and Tailwind CSS.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Installation Card */}
          <InstallationCard />

          {/* Components Usage */}
          <Card className="bg-[#1C2021] border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <span>Premium Components</span>
                <motion.span
                  className="text-[10px] px-2 py-0.5 bg-secondary-dark/20 rounded-full text-secondary-dark flex items-center gap-1"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Check className="w-3 h-3" />
                  Production Ready
                </motion.span>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <div className="relative h-full">
                {/* Background Grid Effect */}
                <motion.div
                  className="absolute inset-0 grid grid-cols-6 gap-px opacity-[0.03]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.03 }}
                  transition={{ duration: 1 }}
                >
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-secondary-dark"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Main Content */}
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-full max-w-md space-y-6">
                    {/* Component Preview Row */}
                    <motion.div
                      className="flex justify-between gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Dark Mode Toggle */}
                      {/* <motion.div
                        className="h-8 px-4 rounded-md bg-secondary-dark/10 border border-secondary-dark/20 flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className="flex items-center gap-2"
                          animate={{
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Sun className="w-4 h-4 text-secondary-dark" />
                          <Moon className="w-4 h-4 text-secondary-dark" />
                        </motion.div>
                      </motion.div> */}

                      {/* Quality Badge */}
                      {/* <motion.div
                        className="flex items-center gap-1.5 text-xs text-secondary-dark"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Pixel Perfect</span>
                        <Sparkles className="w-3 h-3" />
                      </motion.div> */}
                    </motion.div>

                    {/* Component Showcase */}
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {/* Live Preview Area */}
                      <motion.div
                        className="h-24 bg-[#101213] rounded-lg p-4 relative overflow-hidden"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {/* Animated Elements */}
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="p-2 rounded-md bg-secondary-dark/20"
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            >
                              <Layout className="w-4 h-4 text-secondary-dark" />
                            </motion.div>
                            <motion.div
                              className="p-2 rounded-md bg-secondary-dark/20"
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.3,
                              }}
                            >
                              <Palette className="w-4 h-4 text-secondary-dark" />
                            </motion.div>
                            <motion.div
                              className="p-2 rounded-md bg-secondary-dark/20"
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.6,
                              }}
                            >
                              <Settings className="w-4 h-4 text-secondary-dark" />
                            </motion.div>
                          </div>
                        </div>

                        {/* Scanning Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-dark/5 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>

                      {/* Features List */}
                      <div className="grid grid-cols-2 gap-4 px-4">
                        {[
                          { icon: Zap, text: "Zero Dependencies" },
                          { icon: Paintbrush, text: "Customizable" },
                          { icon: Smartphone, text: "Responsive" },
                          { icon: Shield, text: "Pixel Perfect" },
                        ].map((Feature, i) => (
                          <motion.div
                            key={Feature.text}
                            className="flex items-center gap-2 text-sm text-gray-400"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                          >
                            <Feature.icon className="w-4 h-4 text-secondary-dark" />
                            <span>{Feature.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Bottom features bar */}
                    <motion.div
                      className="flex justify-center gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      {/* <motion.div
                        className="flex items-center gap-1 text-xs text-gray-400"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Code className="w-3 h-3 text-secondary-dark" />
                        <span>Modern Stack</span>
                      </motion.div> */}
                      {/* <motion.div
                        className="flex items-center gap-1 text-xs text-gray-400"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.3,
                        }}
                      >
                        <Rocket className="w-3 h-3 text-secondary-dark" />
                        <span>Ship Faster</span>
                      </motion.div> */}
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component Stats */}
          <div className="grid grid-cols-2 gap-4">
            {/* Components Card */}
            <Card className="bg-[#1C2021] border-0 shadow-lg relative group overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-secondary-dark/5"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(65,187,145,0.03) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(65,187,145,0.03) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(65,187,145,0.03) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/10 to-transparent opacity-20" />

              <CardContent className="pt-6 relative">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-secondary-dark" />
                    <p className="text-gray-400 text-sm">Components</p>
                  </div>

                  <div className="relative">
                    <motion.div
                      className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-secondary-light"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      {count}
                      <motion.span
                        className="text-2xl ml-1"
                        animate={{
                          opacity: [1, 0.5, 1],
                          y: [0, -2, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        +
                      </motion.span>
                    </motion.div>

                    <motion.div
                      className="absolute -right-2 -top-2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {/* <div className="relative">
                        <motion.div
                          className="absolute inset-0 bg-secondary-dark rounded-full blur-md"
                          animate={{ opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="relative bg-secondary-dark/20 text-secondary-dark text-xs rounded-full px-2 py-0.5">
                          Ready
                        </div>
                      </div> */}
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-secondary-dark"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Boxes className="w-4 h-4" />
                    </motion.div>
                    <span className="text-sm">Production Ready</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Styles Card */}
            <Card className="bg-[#1C2021] border-0 shadow-lg relative group overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-secondary-dark/5"
                animate={{
                  background: [
                    "radial-gradient(circle at 100% 0%, rgba(65,187,145,0.03) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 100%, rgba(65,187,145,0.03) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, rgba(65,187,145,0.03) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 bg-gradient-to-bl from-secondary-dark/10 to-transparent opacity-20" />

              <CardContent className="pt-6 relative">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-secondary-dark" />
                    <p className="text-gray-400 text-sm">Style Variants</p>
                  </div>

                  <div className="relative">
                    <motion.div
                      className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-secondary-light"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                    >
                      100
                      <motion.span
                        className="text-2xl ml-1"
                        animate={{
                          opacity: [1, 0.5, 1],
                          y: [0, -2, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        +
                      </motion.span>
                    </motion.div>

                    <motion.div
                      className="absolute -right-2 -top-2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      {/* <div className="relative">
                        <motion.div
                          className="absolute inset-0 bg-secondary-dark rounded-full blur-md"
                          animate={{ opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="relative bg-secondary-dark/20 text-secondary-dark text-xs rounded-full px-2 py-0.5">
                          Custom
                        </div>
                      </div> */}
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-secondary-dark"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Paintbrush className="w-4 h-4" />
                    </motion.div>
                    <span className="text-sm">Fully Customizable</span>
                  </motion.div>
                </div>

                {/* Background decoration */}
                <motion.div
                  className="absolute -bottom-8 -right-8 text-secondary-dark/5"
                  animate={{
                    rotate: 360,
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Palette className="w-32 h-32" />
                </motion.div>
              </CardContent>
            </Card>
          </div>
          {/* Documentation */}
          <Card className="bg-[#1C2021] border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Documentation</CardTitle>
              <p className="text-gray-400 text-sm">
                Comprehensive guides and API references
              </p>
            </CardHeader>
            <CardContent className="h-48 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="h-full w-full rounded-lg bg-[#101213] p-4"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Animated code documentation preview */}
                  <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-2 bg-secondary-dark/20 rounded"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.random() * 50 + 50}%` }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
