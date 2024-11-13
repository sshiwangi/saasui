"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  return (
    <div className="relative min-h-screen bg-[#101213] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Headers */}
      <div className="relative z-10 text-center mb-16">
        <span className="inline-block text-secondary-light text-sm mb-2">
          Custom Components
        </span>
        <h2 className="text-neutrals-light text-5xl font-light mb-2">
          Want a custom component?
        </h2>
        <p className="text-neutrals-light/80 text-xl font-light">
          Reach out and let's build it!
        </p>
      </div>

      {/* Form with glass panels */}
      <div className="relative w-full max-w-md">
        {/* Background panels */}
        <div
          className="absolute -left-6 top-0 w-full h-full rounded-2xl transform -rotate-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(28, 32, 33, 0.3) 0%, rgba(28, 32, 33, 0.1) 100%)",
            backdropFilter: "blur(8px)",
          }}
        />
        <div
          className="absolute -right-6 top-0 w-full h-full rounded-2xl transform rotate-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(28, 32, 33, 0.3) 0%, rgba(28, 32, 33, 0.1) 100%)",
            backdropFilter: "blur(8px)",
          }}
        />

        {/* Main form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-b from-[#1C2021]/90 to-[#1C2021]/70 rounded-2xl backdrop-blur-md p-8"
          style={{
            boxShadow: "0 0 40px rgba(56, 182, 255, 0.1)",
          }}
        >
          <form className="space-y-6">
            <div>
              <label className="flex items-center text-neutrals-light text-sm mb-2">
                Full Name
                <span className="text-secondary-dark ml-1">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 h-12 bg-[#101213]/50 rounded-lg border border-[#272B2B]/50 text-neutrals-light placeholder:text-gray-500 focus:outline-none focus:border-secondary-light"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="flex items-center text-neutrals-light text-sm mb-2">
                Component Details
                <span className="text-secondary-dark ml-1">*</span>
              </label>
              <textarea
                className="w-full p-4 h-32 bg-[#101213]/50 rounded-lg border border-[#272B2B]/50 text-neutrals-light placeholder:text-gray-500 focus:outline-none focus:border-[#41BB91] resize-none"
                placeholder="Describe the component you need..."
              />
            </div>

            <button
              type="submit"
              className={cn(
                "w-full h-12 rounded-lg",
                "bg-gradient-to-b from-secondary-light/90 to-secondary-light/80",
                "text-gray-800 font-medium",
                "hover:brightness-110 transition-all",
                "focus:outline-none focus:ring-2 focus:ring-[#41BB91]"
              )}
            >
              Send Request →
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
