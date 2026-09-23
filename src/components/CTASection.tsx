"use client";

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden" id="contact">
      {/* Background appears first naturally */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-sm shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row relative">
          
          {/* Left Side text */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:w-5/12 p-8 md:p-12 flex flex-col justify-center bg-dark text-white rounded-l-sm"
          >
            <h2 className="text-[clamp(2rem,3vw,3rem)] font-bold mb-6 leading-tight">Ready to Elevate Your Health Coverage?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Discover how Pegasus Health Group can become your most valuable strategic asset.
            </p>
          </motion.div>

          {/* Right Side Form (Form Assembly Sequence) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-7/12 p-8 md:p-12 bg-white rounded-r-sm"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl font-bold text-dark mb-8"
            >
              Request Partner Access & Plan Overview
            </motion.h3>
            
            <form className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.48 }}
              >
                <input type="text" placeholder="Full Name*" required className="w-full border-b border-gray-300 px-2 py-3 focus:outline-none focus:border-primary transition-colors text-dark bg-transparent" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.54 }}
              >
                <input type="text" placeholder="Organization / Association / Employer Name*" required className="w-full border-b border-gray-300 px-2 py-3 focus:outline-none focus:border-primary transition-colors text-dark bg-transparent" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.60 }}
              >
                <select required className="w-full border-b border-gray-300 px-2 py-3 focus:outline-none focus:border-primary transition-colors text-gray-500 bg-transparent">
                  <option value="" disabled selected>Partner Type*</option>
                  <option value="Organization">Organization</option>
                  <option value="Association">Association</option>
                  <option value="Employer">Employer</option>
                </select>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.66 }}
                >
                  <input type="email" placeholder="Work Email Address*" required className="w-full border-b border-gray-300 px-2 py-3 focus:outline-none focus:border-primary transition-colors text-dark bg-transparent" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.72 }}
                >
                  <input type="tel" placeholder="Phone Number*" required className="w-full border-b border-gray-300 px-2 py-3 focus:outline-none focus:border-primary transition-colors text-dark bg-transparent" />
                </motion.div>
              </div>
              
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                type="submit" 
                className="w-full group bg-primary hover:bg-secondary text-white font-bold py-5 mt-4 rounded-sm transition-all duration-300 uppercase text-sm tracking-widest shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 flex justify-center items-center gap-2"
              >
                Become a Pegasus Partner
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
