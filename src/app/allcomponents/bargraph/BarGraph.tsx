"use client"
import React from "react";
import { Bitcoin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface CryptoDisplayProps {
  value?: number;
  currency?: string;
  chartData?: number[];
  variant?: "default" | "blue" | "green" | "red";
  className?: string;
}

const variants = {
  default: {
    icon: "text-zinc-900",
    text: "text-zinc-900",
    bar: "bg-zinc-200/80",
    barBg: "bg-zinc-100/50",
  },
  blue: {
    icon: "text-blue-600",
    text: "text-blue-600",
    bar: "bg-blue-200/80",
    barBg: "bg-blue-100/50",
  },
  green: {
    icon: "text-emerald-600",
    text: "text-emerald-600",
    bar: "bg-emerald-200/80",
    barBg: "bg-emerald-100/50",
  },
  red: {
    icon: "text-rose-600",
    text: "text-rose-600",
    bar: "bg-rose-200/80",
    barBg: "bg-rose-100/50",
  },
};

const BarGraph = ({
  value = 0.0895,
  currency = "BTC",
  chartData = [60, 35, 90, 45],
  variant = "default",
  className,
}: CryptoDisplayProps) => {
  const maxValue = Math.max(...chartData);
  const currentVariant = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "px-6 py-4 w-[280px] bg-white rounded-xl shadow-sm border-0 overflow-hidden",
          className
        )}
      >
        <motion.div
          className="flex items-center gap-2.5 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Bitcoin
              size={20}
              className={cn(currentVariant.icon, "transition-colors")}
            />
          </motion.div>
          <motion.span
            className={cn(
              "text-lg font-medium transition-colors tracking-tight",
              currentVariant.text
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {value} {currency}
          </motion.span>
          <motion.button
            className="ml-auto text-zinc-400 hover:text-zinc-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            •••
          </motion.button>
        </motion.div>

        <div className="relative flex items-end gap-3 h-[120px] mb-2">
          <AnimatePresence>
            {chartData.map((value, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex-1 rounded-t-md transition-colors h-full",
                  currentVariant.barBg
                )}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "100%" }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className={cn("rounded-t-md w-full", currentVariant.bar)}
                  initial={{ height: 0 }}
                  animate={{ height: `${(value / maxValue) * 100}%` }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{ opacity: 0.9 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="flex justify-between px-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          {chartData.map((_, index) => (
            <div key={index} className="text-xs font-medium text-zinc-400">
              {index * 30}k
            </div>
          ))}
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default BarGraph;
