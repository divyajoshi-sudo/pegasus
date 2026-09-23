"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import PremiumImageReveal from './PremiumImageReveal';
import SectionHeading from './SectionHeading';

export default function StickyFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yCard1 = useTransform(scrollYProgress, [0, 0.3], [150, 0]);
  const yCard2 = useTransform(scrollYProgress, [0.2, 0.5], [150, 0]);
  const yCard3 = useTransform(scrollYProgress, [0.4, 0.7], [150, 0]);

  const opacityCard1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacityCard2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const opacityCard3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section
      ref={containerRef}
      className={`bg-white ${isMobile ? 'py-24' : 'h-[220svh]'}`}
      id="solutions"
    >
      <div className={`${isMobile ? '' : 'sticky top-0 h-screen flex items-center overflow-hidden'}`}>
        <div className="container mx-auto px-6 w-full">

          <div className="text-center max-w-4xl mx-auto mb-16">
            <SectionHeading delay={0}>
              Engineered to Meet the Distinct Needs of Organizations, Associations, and Employers
            </SectionHeading>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 ${isMobile ? '' : 'items-start'}`}>

            {/* For Employers */}
            <motion.div
              style={isMobile ? {} : { y: yCard1, opacity: opacityCard1 }}
              whileHover={{ y: -8 }}
              transition={{ type: "tween", duration: 0.5 }}
              className="bg-light p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow border-t-4 border-primary group flex flex-col h-full"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-sm">
                <PremiumImageReveal delay={0}>
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-gray-500 font-semibold group-hover:scale-105 transition-transform duration-700">Image 1</span>
                  </div>
                </PremiumImageReveal>
              </div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:-translate-y-[2px] transition-transform duration-500">For Employers</h3>
                <h4 className="text-lg font-semibold text-primary mb-3">Protect Your Workforce with Transparent, High-Value PPO Coverage</h4>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.20 }}>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-500">
                  Safeguard employee and client finances with ACA-compliant PPO health plans featuring transparent cost structures, clear deductibles, predictable copayments, and annual out-of-pocket maximums. Give your team access to broad provider networks while optimizing overall benefit administration.
                </p>
              </motion.div>
            </motion.div>

            {/* For Professional Associations */}
            <motion.div
              style={isMobile ? {} : { y: yCard2, opacity: opacityCard2 }}
              whileHover={{ y: -8 }}
              transition={{ type: "tween", duration: 0.5 }}
              className="bg-dark text-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow border-t-4 border-secondary group flex flex-col h-full"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-sm">
                <PremiumImageReveal delay={0.14} skeletonColor="bg-gray-800">
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center border-2 border-dashed border-gray-500">
                    <span className="text-gray-400 font-semibold group-hover:scale-105 transition-transform duration-700">Image 2</span>
                  </div>
                </PremiumImageReveal>
              </div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.26 }}>
                <h3 className="text-xl font-bold mb-4 group-hover:-translate-y-[2px] transition-transform duration-500">For Professional Associations</h3>
                <h4 className="text-lg font-semibold text-secondary mb-3">Deliver Superior Member Benefits & Subsidized Coverage Options</h4>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.34 }}>
                <p className="text-gray-300 leading-relaxed text-sm transition-colors duration-500">
                  Enhance member retention and value by providing access to top-tier health coverage. Help members qualify for subsidized premium eligibility and significant financial assistance, making quality healthcare affordable and accessible across your association.
                </p>
              </motion.div>
            </motion.div>

            {/* For Organizations */}
            <motion.div
              style={isMobile ? {} : { y: yCard3, opacity: opacityCard3 }}
              whileHover={{ y: -8 }}
              transition={{ type: "tween", duration: 0.5 }}
              className="bg-light p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow border-t-4 border-primary group flex flex-col h-full"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-sm">
                <PremiumImageReveal delay={0.28}>
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-gray-500 font-semibold group-hover:scale-105 transition-transform duration-700">Image 3</span>
                  </div>
                </PremiumImageReveal>
              </div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.40 }}>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:-translate-y-[2px] transition-transform duration-500">For Organizations</h3>
                <h4 className="text-lg font-semibold text-primary mb-3">Amplify Success with Full-Scale IMO Operational Backing</h4>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.48 }}>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-500">
                  Elevate your group's growth strategy with a strategic partner built to streamline your daily operations and maximize earning potential. Gain immediate access to specialized digital resources, structured training schedules, and comprehensive FAQ hubs.
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
