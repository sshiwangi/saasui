import { Code, Code2, Copy, Check } from "lucide-react"; // Added Check import
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";

const InstallationCard = () => {
  const [isShowingCode, setIsShowingCode] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copyButtonPosition, setCopyButtonPosition] = useState({ x: 0, y: 0 });

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`import { Button } from '@/components/ui/button'

export function MyComponent() {
  return (
    <Button variant="primary">Click me!</Button>
  )
}`);
    setHasCopied(true);
  };

  useEffect(() => {
    if (isShowingCode) {
      // Set initial cursor position
      setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      // Get copy button position
      const button = document.querySelector(".copy-button");
      if (button) {
        const rect = button.getBoundingClientRect();
        setCopyButtonPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    }
  }, [isShowingCode]);

  return (
    <Card className="bg-[#1C2021] border-0 shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 flex-col">
            <span className="text-4xl font-bold text-white">Components</span>
            <p className="text-gray-400">Copy and paste. It's that simple.</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-48 relative">
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden"
            animate={isShowingCode ? { opacity: 1 } : { opacity: 0 }}
          >
            {/* Code View */}
            <div className="h-full bg-[#101213] p-4 font-mono text-sm relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">//code</span>
                </div>
                <motion.button
                  className="flex items-center gap-1.5 text-xs bg-secondary-dark/10 hover:bg-secondary-dark/20 text-secondary-dark px-2 py-1 rounded-md copy-button" // Added copy-button class
                  onClick={handleCopy}
                  whileTap={{ scale: 0.97 }}
                >
                  {hasCopied ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy code</span>
                    </>
                  )}
                </motion.button>
              </div>
              <motion.div
                className="text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary-muted">import</span>{" "}
                {"{ Button }"} <span className="text-primary-muted">from</span>
                {" '@/components/ui/button'"}
                <br />
                <br />
                <span className="text-secondary-dark">export</span>{" "}
                <span className="text-primary-muted">function</span>{" "}
                MyComponent() {"{"}
                <br />
                {"  return ("}
                <br />
                {"    "}
                <span className="text-secondary-dark">&lt;Button</span>
                {' variant="primary">&'}
                {"gt;"}Click me!
                <span className="text-secondary-dark">&lt;/Button&gt;</span>
                <br />
                {"  )"}
                <br />
                {"}"}
              </motion.div>
            </div>
          </motion.div>

          {/* Preview View */}
          <div className="w-full absolute -top-10 flex items-center justify-end">
            <motion.button
              className="flex items-center gap-2 text-sm text-gray-400 bg-secondary-dark/10 px-3 py-1.5 rounded-md"
              onClick={() => setIsShowingCode(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code className="w-4 h-4" />
            </motion.button>
          </div>
          <motion.div
            className="absolute inset-0 bg-[#101213] rounded-lg p-6 "
            animate={isShowingCode ? { opacity: 0 } : { opacity: 1 }}
          >
            <div className="h-full flex flex-col items-center justify-center gap-4">
              <motion.button
                className="bg-secondary-dark text-black px-4 py-2 rounded-md font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Click me!
              </motion.button>
            </div>
          </motion.div>

          {/* Animated Cursor */}
          {isShowingCode && (
            <motion.div
              className="absolute w-4 h-4 pointer-events-none"
              initial={{ x: mousePosition.x, y: mousePosition.y }}
              animate={{
                x: [mousePosition.x, copyButtonPosition.x],
                y: [mousePosition.y, copyButtonPosition.y],
              }}
              transition={{ duration: 1, delay: 0.5 }}
              onAnimationComplete={() => {
                setHasCopied(true);
                setTimeout(() => {
                  setIsShowingCode(false);
                  setHasCopied(false);
                }, 1000);
              }}
            >
              <motion.div
                className="h-3 w-3 border-2 border-secondary-dark rounded-full"
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default InstallationCard;
