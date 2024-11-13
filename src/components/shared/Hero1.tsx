"use client";

import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="bg-primary-dark min-h-screen relative overflow-hidden">
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
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Hero Content */}
        <div className="text-center space-y-6 py-20">
          <h1 className="text-[#F6F3EB] text-6xl font-medium leading-tight">
            Beautiful Components
            <br />
            <span className="text-gray-500">for Modern Apps</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beautifully designed components built with Radix UI and Tailwind
            CSS. Fully accessible and ready to drop into your React application.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button className="bg-secondary-light text-black hover:bg-secondary-dark px-8">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-primary-light text-white gap-2"
            >
              <Play className="w-4 h-4" />
              Give a star
            </Button>
          </div>
        </div>

        {/* Built With Section */}
        <div className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <h2 className="text-center text-4xl text-gray-500 font-medium">
              Built With
            </h2>

            <div className="flex justify-center items-center gap-16 flex-wrap">
              {/* Next.js */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                <svg className="h-8" viewBox="0 0 180 48" fill="currentColor">
                  <path d="M23.4 8.9h12.7v2.3H26v7.5h9.6v2.3H26v9h-2.6V8.9zm17.4 0h2.7l7.4 11 7.5-11h2.7v21.1h-2.6V13.3l-7.5 11h-.1l-7.5-11v16.7h-2.5V8.9h-.1zm34.1 2.3v18.8h-2.6v-19h2.6v.2zm13.8-2.3h2.7L99 19.9l7.5-11h2.7v21.1h-2.6V13.3l-7.5 11h-.1l-7.5-11v16.7h-2.5V8.9h-.1z" />
                </svg>
              </motion.div>

              {/* shadcn/ui */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                <div className="font-medium text-2xl tracking-wider">
                  shadcn/ui
                </div>
              </motion.div>

              {/* Tailwind CSS */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                <div className="flex">
                  <span className="font-medium text-2xl tracking-wider">
                    tailwindcss
                  </span>
                </div>
              </motion.div>

              {/* Aceternity UI */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                <div className="font-bold text-2xl tracking-wider flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2L2 19.7778H22L12 2Z" />
                  </svg>
                  Aceternity UI
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
