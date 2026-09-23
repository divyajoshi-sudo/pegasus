"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from "lucide-react";
import SectionHeading from './SectionHeading';
import PremiumImageReveal from './PremiumImageReveal';

export default function ResourceHub() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="resources">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading delay={0}>
              Empowering Your Growth at Every Stage
            </SectionHeading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-600 mb-12 text-lg leading-relaxed"
            >
              Succeeding in today's health plan market requires more than just standalone coverage—it requires an active partner. Pegasus Health Group equips employers, associations, and organizations with dedicated support, training, and digital assets to ensure seamless adoption and ongoing growth.
            </motion.p>

            <ul className="space-y-8 relative z-10">
              {/* Item 1 */}
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start gap-5"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <motion.h4
                    initial={{ x: -15 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="font-bold text-dark text-lg"
                  >
                    Digital Resources
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-gray-500 text-sm mt-1"
                  >
                    Instant access to digital assets and partner marketing materials.
                  </motion.p>
                </div>
              </motion.li>

              {/* Item 2 */}
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-5"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <motion.h4
                    initial={{ x: -15 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="font-bold text-dark text-lg"
                  >
                    Training Schedules
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-gray-500 text-sm mt-1"
                  >
                    Scheduled sessions to keep your operations and leadership fully informed.
                  </motion.p>
                </div>
              </motion.li>

              {/* Item 3 */}
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-5"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                </motion.div>
                <div>
                  <motion.h4
                    initial={{ x: -15 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="font-bold text-dark text-lg"
                  >
                    FAQ & Blog Repositories
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="text-gray-500 text-sm mt-1"
                  >
                    Up-to-date information hubs addressing client and member inquiries.
                  </motion.p>
                </div>
              </motion.li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-light p-12 border border-gray-100 rounded-sm shadow-xl relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-tr-full"></div>

            <div className="w-full h-40 mb-8 rounded-sm overflow-hidden relative z-10 border border-gray-200">
              <PremiumImageReveal delay={0.6}>
                <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                  <span className="text-gray-500 font-semibold uppercase tracking-wider text-sm">Dashboard Preview</span>
                </div>
              </PremiumImageReveal>
            </div>

            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
              className="text-2xl font-bold text-dark mb-4 text-center relative z-10"
            >
              Resource Hub Access
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.7 }}
              className="text-gray-500 text-center mb-8 relative z-10"
            >
              Existing partners can login to access the full suite of operational tools and assets.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8 }}
              className="w-full bg-dark hover:bg-primary hover:-translate-y-0.5 shadow-lg hover:shadow-primary/30 text-white font-bold py-4 rounded-sm transition-all duration-300 uppercase text-sm tracking-wider relative z-10"
            >
              Partner Login
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
