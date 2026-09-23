"use client";

import { motion } from "framer-motion";

export default function CondioHeroSlider() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Text */}
          <div className="flex-1 text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-light mb-6 leading-tight"
            >
              Elevate Your Health Coverage with the <br />
              <span className="font-bold">Ultimate IMO Strategic Partner</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
            >
              Move beyond standard General Agencies and FMOs. Pegasus Health Group is your Independent Marketing Organization (IMO), delivering premier ACA-compliant PPO health solutions, broad provider networks, and dedicated support engineered specifically to amplify success for organizations, associations, and employers.
            </motion.p>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
            >
               <a href="#contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 hover:bg-blue-500 transition-colors shadow-lg">
                 Partner With Pegasus Today
               </a>
               <p className="mt-4 text-sm text-white/70 italic">Streamlining operations and maximizing earning potential across every tier of your organization.</p>
            </motion.div>
          </div>

          {/* Right Form - Lead Capture */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[450px]"
          >
            <div className="bg-white p-8 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <header className="mb-6">
                <h3 className="text-slate-500 font-light text-sm uppercase tracking-widest mb-1">Ready to Elevate Your Health Coverage?</h3>
                <h1 className="text-2xl font-bold text-slate-800">Request Partner Access</h1>
              </header>
              <hr className="mb-6 border-slate-200" />
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Organization / Association / Employer Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Partner Type <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors" required>
                    <option value="">Select a type...</option>
                    <option value="Organization">Organization</option>
                    <option value="Association">Association</option>
                    <option value="Employer">Employer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Work Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="pt-2">
                  <button type="submit" className="w-full bg-slate-800 text-white font-semibold py-4 hover:bg-slate-700 transition-colors shadow-md">
                    Become a Pegasus Partner
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
