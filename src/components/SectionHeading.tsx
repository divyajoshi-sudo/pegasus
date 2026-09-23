"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  lineColor?: string;
}

export default function SectionHeading({
  children,
  className = "",
  delay = 0,
  lineColor = "bg-primary"
}: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <motion.h2
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={`text-[clamp(2.5rem,4vw,4.5rem)] font-bold leading-tight ${className}`}
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 50 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.3, ease: "easeOut" }}
        className={`h-1 mt-6 ${lineColor}`}
      />
    </div>
  );
}
