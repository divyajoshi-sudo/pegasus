export default function CondioContactFooter() {
  return (
    <>
      <section id="contact" className="py-24 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          <div className="text-center mb-12">
            <header className="mb-4">
              <h3 className="text-3xl md:text-4xl font-light text-white leading-tight">Ready to Elevate Your Health Coverage?</h3>
            </header>
            <p className="text-lg text-slate-400">Discover how Pegasus Health Group can become your most valuable strategic asset.</p>
          </div>
            
          <div className="bg-slate-800 p-8 shadow-2xl relative border-t-4 border-blue-600">
            <header className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-white">Request Partner Access & Plan Overview</h1>
            </header>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Work Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Organization / Association / Employer Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Partner Type <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none" required>
                  <option value="">Select a type...</option>
                  <option value="Organization">Organization</option>
                  <option value="Association">Association</option>
                  <option value="Employer">Employer</option>
                </select>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 hover:bg-blue-500 transition-colors shadow-lg">
                  Become a Pegasus Partner
                </button>
              </div>
            </form>
          </div>
            
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-slate-950 py-8 border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <figure className="text-slate-500 text-sm">© {new Date().getFullYear()} Pegasus Health Group. All rights reserved.</figure>
        </div>
      </footer>
    </>
  );
}
