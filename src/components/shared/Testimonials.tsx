// components/Testimonials.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialType {
  id: number;
  avatar: string;
  comment?: string;
  position: string;
}

const reviews = [
  {
    id: 1,
    text: "The components are exceptionally well-designed and customizable. The documentation is clear and implementation was seamless. Reduced our development time by 40% on our last project.",
    additionalText: "Perfect for our next.js application!",
    author: "Sarah Chen",
    role: "Senior Developer",
  },
  {
    id: 2,
    text: "These UI components have revolutionized our development workflow. The accessibility features and type safety make it a joy to work with. The responsive design works flawlessly.",
    author: "Alex Thompson",
    role: "Lead Engineer",
  },
  {
    id: 3,
    text: "Fantastic component library with incredible attention to detail. The dark mode implementation and animation utilities are outstanding. Every component follows best practices.",
    author: "Maria Garcia",
    role: "UI Architect",
  },
];

const testimonials: TestimonialType[] = [
  {
    id: 1,
    avatar: "/api/placeholder/48/48",
    position: "top-24 left-[25%]",
  },
  {
    id: 2,
    avatar: "/api/placeholder/48/48",
    position: "top-12 left-[50%] -translate-x-1/2",
  },
  {
    id: 3,
    avatar: "/api/placeholder/48/48",
    position: "top-24 right-[25%]",
  },
  {
    id: 4,
    avatar: "/api/placeholder/48/48",
    comment: "Type-safe!",
    position: "bottom-64 left-[20%]",
  },
  {
    id: 5,
    avatar: "/api/placeholder/48/48",
    comment: "Great DX",
    position: "bottom-64 right-[20%]",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#101213] relative min-h-screen pt-20 overflow-hidden">
      <div className="flex justify-center mb-6">
        <span className="bg-[#1C2021] text-[#41BB91] px-4 py-1.5 rounded-full text-sm">
          Testimonials
        </span>
      </div>

      <h2 className="text-center text-[#F6F3EB] text-6xl font-serif mb-32">
        Hear what our
        <br />
        customers have to say
      </h2>

      <div className="max-w-[1200px] mx-auto relative h-[700px]">
        {/* Perfect Semicircle Arcs with Gradient Fade */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="fadeGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#272B2B" />
              <stop offset="90%" stopColor="#272B2B" />
              <stop offset="100%" stopColor="#101213" />
            </linearGradient>
          </defs>
          {/* Top Arc - Larger radius */}
          <path
            d="M 250,300 A 350,350 0 0,1 950,300"
            stroke="url(#fadeGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* Middle Arc - Medium radius */}
          <path
            d="M 150,300 A 450,450 0 0,1 1050,300"
            stroke="url(#fadeGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />
          {/* Bottom Arc - Smaller radius */}
          <path
            d="M 250,300 A 350,350 0 0,0 950,300"
            stroke="url(#fadeGradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />
        </svg>

        {/* Avatars positioned higher */}
        <div className="absolute inset-0 pt-12">
          <div className="relative h-full">
            {/* Top row - positioned higher */}
            <div className="absolute top-10 left-1/4 transform -translate-x-1/2">
              <img
                src="/api/placeholder/48/48"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-[#1C2021]"
              />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <img
                src="/api/placeholder/48/48"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-[#1C2021]"
              />
            </div>
            <div className="absolute top-10 right-1/4 transform translate-x-1/2">
              <img
                src="/api/placeholder/48/48"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-[#1C2021]"
              />
            </div>

            {/* Bottom row - chat bubbles */}
            <div className="absolute bottom-64 left-[20%]">
              <div className="relative">
                <img
                  src="/api/placeholder/48/48"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-[#1C2021]"
                />
                <div className="absolute -top-10 left-14">
                  <span className="bg-[#41BB91]/10 text-[#41BB91] px-4 py-1.5 rounded-full text-sm">
                    Cool !
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-64 right-[20%]">
              <div className="relative">
                <img
                  src="/api/placeholder/48/48"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-[#1C2021]"
                />
                <div className="absolute -top-10 left-14">
                  <span className="bg-[#41BB91]/10 text-[#41BB91] px-4 py-1.5 rounded-full text-sm">
                    Very good service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Card - Positioned lower */}
        <div className="absolute inset-0 flex items-end justify-center pb-32">
          <div className="relative w-[540px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
              >
                <Card className="bg-[#1C2021] border-0">
                  <CardContent className="p-8">
                    <span className="text-5xl text-[#41BB91] font-serif">
                      "
                    </span>
                    <p className="text-gray-200 text-lg leading-relaxed mt-2 mb-8">
                      {reviews[currentIndex].text}
                      {reviews[currentIndex].additionalText && (
                        <>
                          <br />
                          <br />
                          {reviews[currentIndex].additionalText}
                        </>
                      )}
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src="/api/placeholder/48/48"
                        alt={reviews[currentIndex].author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="text-[#F6F3EB] font-medium">
                          {reviews[currentIndex].author}
                        </h4>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#41BB91]">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
