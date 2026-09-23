"use client";

import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Lightbulb, Settings } from "lucide-react";
import SectionHeading from './SectionHeading';
import PremiumImageReveal from './PremiumImageReveal';

export default function StrategicFeatures() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden" id="advantages">
      {/* Subtle animated background */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl transform translate-x-1/4 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <SectionHeading delay={0} lineColor="bg-secondary">
              Why Partner with Pegasus Health Group?
            </SectionHeading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 mb-12 text-lg leading-relaxed"
            >
              We provide the tools, networks, and transparency you need to succeed in today's competitive landscape.
            </motion.p>

            <div className="w-full h-80 rounded-sm overflow-hidden hidden md:block border border-gray-700 shadow-2xl">
              <PremiumImageReveal delay={0.4} skeletonColor="bg-gray-800">
                <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
                  <span className="text-gray-500 font-semibold tracking-widest uppercase">Feature Illustration</span>
                </div>
              </PremiumImageReveal>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4 group"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Globe className="w-8 h-8 text-secondary flex-shrink-0 group-hover:text-primary transition-colors" />
              </motion.div>
              <div>
                <motion.h4
                  initial={{ x: -15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="font-bold text-lg mb-2 text-white"
                >
                  Broad Provider Networks
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-sm text-gray-400 leading-relaxed"
                >
                  Provide expansive nationwide coverage options giving clients and members complete flexibility and quality care.
                </motion.p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4 group"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <ShieldCheck className="w-8 h-8 text-secondary flex-shrink-0 group-hover:text-primary transition-colors" />
              </motion.div>
              <div>
                <motion.h4
                  initial={{ x: -15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="font-bold text-lg mb-2 text-white"
                >
                  Transparent Cost Structures
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-sm text-gray-400 leading-relaxed"
                >
                  Eliminate financial surprises with clear deductibles, set copayments, and protected annual out-of-pocket maximums.
                </motion.p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 group"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Lightbulb className="w-8 h-8 text-secondary flex-shrink-0 group-hover:text-primary transition-colors" />
              </motion.div>
              <div>
                <motion.h4
                  initial={{ x: -15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="font-bold text-lg mb-2 text-white"
                >
                  Subsidized Premium Eligibility
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="text-sm text-gray-400 leading-relaxed"
                >
                  Maximize affordability as many clients qualify for substantial financial assistance toward their health plans.
                </motion.p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 group"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Settings className="w-8 h-8 text-secondary flex-shrink-0 group-hover:text-primary transition-colors" />
              </motion.div>
              <div>
                <motion.h4
                  initial={{ x: -15, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="font-bold text-lg mb-2 text-white"
                >
                  Dedicated Operations & Tools
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="text-sm text-gray-400 leading-relaxed"
                >
                  Empower your workforce with on-demand digital resources, ongoing training schedules, and continuous operational support.
                </motion.p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
