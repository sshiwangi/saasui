import React, { useState } from "react";
import { Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";

const VoiceCommandInner = () => {
  const [isListening, setIsListening] = useState(false);
  const { listening, attachMicrophone, start, stop } = useSpeechContext();

  const handleStart = async () => {
    try {
      await attachMicrophone();
      await start();
      setIsListening(true);
    } catch (err) {
      console.error("Error starting recording:", err);
    }
  };

  const handleStop = async () => {
    await stop();
    setIsListening(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <AnimatePresence mode="wait">
        {!isListening ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card
              className="bg-primary-light border-primary-ash hover:bg-primary-ash cursor-pointer transition-colors"
              onClick={handleStart}
            >
              <div className="flex items-center justify-between p-4">
                <span className="text-neutrals-light">
                  Tap here to start work with AI
                </span>
                <div className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center">
                  <Mic className="w-5 h-5 text-neutrals-light" />
                </div>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
            onClick={handleStop}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary-dark" />
              </motion.div>

              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary-dark" />
              </motion.div>

              <motion.div
                className="relative w-16 h-16 rounded-full bg-secondary-dark flex items-center justify-center cursor-pointer"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Mic className="w-8 h-8 text-neutrals-light" />
              </motion.div>

              <motion.div
                className="mt-4 text-neutrals-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Listening...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Wrap the component with SpeechProvider
const VoiceCommand = () => {
  return (
    <SpeechProvider appId="your-speechly-app-id">
      <VoiceCommandInner />
    </SpeechProvider>
  );
};

export default VoiceCommand;
