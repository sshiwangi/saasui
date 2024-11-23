import React, { useState, useRef, useEffect } from "react";
import { Send, Wand2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

const MessageInput = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <motion.div
        layout
        initial={false}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <Card
          className="bg-primary-light border-primary-ash overflow-hidden"
          ref={inputRef}
        >
          <div className="relative flex flex-col p-2">
            <div className="flex items-start">
              <Wand2 className="w-5 h-5 text-primary-muted ml-2 mt-2" />
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsExpanded(true)}
                placeholder="Ask AI a question or make a request..."
                className="flex-1 bg-transparent border-0 text-neutrals-light placeholder:text-primary-muted focus:ring-0 focus:outline-none resize-none ml-2 py-2"
                style={{
                  height: isExpanded ? "120px" : "36px",
                  transition: "height 0.2s ease",
                }}
              />
              <AnimatePresence mode="wait">
                {!isExpanded && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="flex items-center gap-2 mr-2 mt-2"
                  >
                    <span className="text-xs text-primary-muted">
                      {inputValue.length}/2000
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-lg ${
                        inputValue.length > 0
                          ? "bg-secondary-dark text-neutrals-light"
                          : "bg-primary-ash text-primary-muted"
                      } transition-colors`}
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-2 justify-end mr-2 mt-2"
                >
                  <span className="text-xs text-primary-muted">
                    {inputValue.length}/2000
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg ${
                      inputValue.length > 0
                        ? "bg-secondary-dark text-neutrals-light"
                        : "bg-primary-ash text-primary-muted"
                    } transition-colors`}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default MessageInput;
