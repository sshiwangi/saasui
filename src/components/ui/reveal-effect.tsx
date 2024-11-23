import { motion } from "framer-motion";
import { FC } from "react";

interface HoverRevealProps {
  text: string;
}

const HoverReveal: FC<HoverRevealProps> = ({ text }) => {
  return (
    <div className="bg-primary-dark">
      <div className="flex items-center justify-center p-4">
        <div className="relative">
          {/* Moving dot effect */}
          <div className="absolute -inset-[1px]">
            <svg width="100%" height="100%">
              <motion.circle
                r="2"
                className="fill-secondary-light"
                style={{
                  filter: "blur(1px) brightness(1.5)",
                }}
              >
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M 0,20 
                        A 20,20 0 0,1 20,0 
                        L calc(100% - 20),0 
                        A 20,20 0 0,1 100%,20
                        L 100%,calc(100% - 20)
                        A 20,20 0 0,1 calc(100% - 20),100%
                        L 20,100%
                        A 20,20 0 0,1 0,calc(100% - 20)
                        L 0,20"
                  rotate="auto"
                />
              </motion.circle>
            </svg>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-full px-6 py-2 cursor-pointer"
            whileHover="hover"
            initial="initial"
          >
            {/* Background that slides in */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary-light"
              initial={{ x: "-100%" }}
              variants={{
                hover: { x: 0 },
                initial: { x: "-100%" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            {/* Static border */}
            <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-ash to-primary-light border border-secondary-dark opacity-20" />

            {/* Icon */}
            <span className="relative inline-block mr-2 text-secondary-dark">
              ✦
            </span>

            {/* Text */}
            <span className="relative text-sm text-neutrals-light">{text}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HoverReveal;
