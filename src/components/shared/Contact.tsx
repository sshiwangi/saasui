"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Sparkles from "./Sparkles";

const ContactSection1 = () => {
  return (
    <div className="relative min-h-screen bg-[#101213] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Sparkles */}
      <Sparkles />

      {/* Stars background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 1px),
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0, 15px 15px",
        }}
      />

      {/* Blue glow effects */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] z-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,182,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] z-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,182,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[250px] h-[250px] z-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,182,255,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Small label */}
      <span className="text-[#41BB91] text-sm mb-4 relative z-10">
        Custom Components
      </span>

      {/* Headings */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-[#F6F3EB] text-5xl font-normal mb-4">
          Want a custom component?
        </h2>
        <p className="text-[#F6F3EB] text-3xl font-light">
          Reach out and let's build it!
        </p>
      </div>

      {/* Form Container with background cards */}
      <div className="relative w-full max-w-lg z-10">
        {/* Background cards */}
        <div className="absolute -left-4 -top-4 w-full h-full bg-[#1C2021]/20 rounded-3xl transform rotate-[-3deg]" />
        <div className="absolute -right-4 -top-4 w-full h-full bg-[#1C2021]/20 rounded-3xl transform rotate-[3deg]" />

        {/* Main form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-b from-[#1C2021] to-[#1C2021]/80 rounded-3xl backdrop-blur-sm p-8"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-[#F6F3EB] text-sm mb-2">
                Full Name
                <span className="text-[#41BB91]"> *</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className={cn(
                  "w-full h-12 px-4 rounded-lg",
                  "bg-[#101213]/60 border border-[#272B2B]",
                  "text-[#F6F3EB] placeholder:text-gray-500",
                  "focus:outline-none focus:ring-2 focus:ring-[#41BB91] focus:border-transparent",
                  "transition duration-200"
                )}
              />
            </div>

            <div>
              <label className="block text-[#F6F3EB] text-sm mb-2">
                Component Details
                <span className="text-[#41BB91]"> *</span>
              </label>
              <textarea
                rows={4}
                placeholder="Describe the component you need..."
                className={cn(
                  "w-full p-4 rounded-lg",
                  "bg-[#101213]/60 border border-[#272B2B]",
                  "text-[#F6F3EB] placeholder:text-gray-500",
                  "focus:outline-none focus:ring-2 focus:ring-[#41BB91] focus:border-transparent",
                  "transition duration-200",
                  "resize-none"
                )}
              />
            </div>

            <button
              type="submit"
              className={cn(
                "w-full h-12 rounded-lg",
                "bg-gradient-to-r from-[#41BB91] to-[#3CA27A]",
                "text-[#F6F3EB] font-medium",
                "flex items-center justify-center gap-2",
                "transform transition-all duration-200",
                "hover:brightness-110 hover:scale-[1.01]",
                "focus:outline-none focus:ring-2 focus:ring-[#41BB91] focus:ring-offset-2 focus:ring-offset-[#101213]"
              )}
            >
              Send Request
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection1;
