"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  skeletonColor?: string;
}

export default function PremiumImageReveal({ 
  children, 
  className = "", 
  delay = 0,
  skeletonColor = "bg-gray-200"
}: PremiumImageRevealProps) {
  // We simulate a 1.2s load time. If a staggered delay is passed in, we add it.
  const loadTime = 1.2 + delay;

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      className={`relative overflow-hidden ${className}`}
    >
      {/* Skeleton Layer */}
      <motion.div 
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 0, transition: { delay: loadTime, duration: 0.4 } }
        }}
        className={`absolute inset-0 z-10 ${skeletonColor}`}
      >
        {/* Soft horizontal shimmer */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </motion.div>
      
      {/* Real Image Layer */}
      <motion.div
        variants={{
          hidden: { clipPath: "inset(0 100% 0 0)", scale: 1.04 },
          visible: { 
            clipPath: "inset(0 0 0 0)", 
            scale: 1, 
            transition: { delay: loadTime, duration: 0.9, ease: [0.25, 1, 0.5, 1] } 
          }
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
