"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PremiumImageReveal from './PremiumImageReveal';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yHeadline = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);
  const yParagraph = useTransform(scrollYProgress, [0, 1], ["0px", "-20px"]);
  const yVisual = useTransform(scrollYProgress, [0, 1], ["0px", "-25px"]);
  const yForm = useTransform(scrollYProgress, [0, 1], ["0px", "-15px"]);
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Line-by-line staggered headline variants
  const headlineContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
  };

  const headlineLine = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-[100svh] flex items-center pt-20 bg-dark overflow-hidden" id="home">
      {/* Decorative premium background */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 bg-dark z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,119,153,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPjwvc3ZnPg==')]" />

        {/* Subtle grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

        {/* Slow moving shapes */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/4"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
        <div className="text-white">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="mb-4"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Strategic Healthcare Partner</span>
          </motion.div>

          <motion.h1
            style={{ y: yHeadline }}
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
            className="text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
          >
            <motion.div variants={headlineLine}>Elevate Your</motion.div>
            <motion.div variants={headlineLine}>Health Coverage</motion.div>
            <motion.div variants={headlineLine}>with the Ultimate</motion.div>
            <motion.div variants={headlineLine}>IMO Strategic Partner</motion.div>
          </motion.h1>

          <motion.p
            style={{ y: yParagraph }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light max-w-xl"
          >
            Move beyond standard General Agencies and FMOs. Pegasus Health Group is your Independent Marketing Organization (IMO), delivering premier ACA-compliant PPO health solutions, broad provider networks, and dedicated support engineered specifically to amplify success for organizations, associations, and employers.
          </motion.p>

          <motion.div
            style={{ y: yForm }}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link href="#contact" className="group bg-primary hover:bg-secondary text-white px-8 py-4 font-bold tracking-wider rounded-sm transition-colors uppercase text-sm inline-block shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 duration-300">
              <span className="flex items-center gap-2">
                Partner With Pegasus Today
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs font-medium">
              Streamlining operations and maximizing earning potential across every tier of your organization.
            </p>
          </motion.div>
        </div>

        {/* Hero Visual Area with Premium Image Reveal */}
        <motion.div
          style={{ y: yVisual }}
          className="hidden lg:block w-full h-[600px] rounded-sm relative overflow-hidden backdrop-blur-sm"
        >
          <PremiumImageReveal skeletonColor="bg-white/5" delay={0}>
            <div className="w-full h-full bg-white/10 border border-white/10 flex flex-col items-center justify-center text-gray-500 relative">
              <span className="font-semibold tracking-widest">VISUAL ASSET</span>
              <span className="text-sm opacity-50 mt-2">Placeholder for hero photography</span>

              {/* Decorative line reveal overlay */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "circOut" }}
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent origin-top"
              />
            </div>
          </PremiumImageReveal>
        </motion.div>
      </div>
    </section>
  );
}
