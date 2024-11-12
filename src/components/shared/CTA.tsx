"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";

const transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0.2,
};

const AnimatedCtaBanner: React.FC = () => {
  return (
    <MotionConfig transition={transition}>
      <div className=" bg-neutrals-light flex items-center justify-center w-full pb-20 p-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-dark to-primary-light group max-w-6xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            {/* Image Container */}
            <motion.div
              layout
              className="w-full md:w-1/2 relative aspect-[4/3] rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-secondary-light/20 z-10 mix-blend-overlay"
                whileHover={{ opacity: 0 }}
              />
              <motion.img
                src="https://images.pexels.com/photos/7976210/pexels-photo-7976210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional Camera Setup"
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.1 }}
                layoutId="cta-image"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary-dark/40 via-primary-light/20 to-transparent"
                whileHover={{ opacity: 0 }}
              />
            </motion.div>

            {/* Content Container */}
            <motion.div
              layout
              className="w-full md:w-1/2 text-neutrals-light space-y-6"
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutrals-light to-secondary-dark"
                whileHover={{ scale: 1.02 }}
              >
                Build Interfaces That Stand Out
              </motion.h2>

              <motion.p
                className="text-primary-muted text-lg leading-relaxed"
                whileHover={{ x: 10 }}
              >
                Craft exceptional digital experiences with our versatile,
                ready-to-use UI components.
              </motion.p>

              <motion.button
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-neutrals-light px-6 py-3 text-primary-dark transition-transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">Explore Components</span>
                <motion.svg
                  className="h-4 w-4"
                  whileHover={{ x: 5 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Background Animation Elements */}
          <motion.div
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary-dark/30 blur-3xl"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-muted/30 blur-3xl"
            whileHover={{ scale: 1.2 }}
          />
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default AnimatedCtaBanner;
