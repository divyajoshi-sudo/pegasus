export default function CondioImageTextBlocks() {
  return (
    <section id="solutions" className="bg-slate-100 py-24">
      <div className="container mx-auto px-0 md:px-8">
        <header className="mb-16 text-center">
          <h3 className="text-3xl font-light text-slate-800">Engineered to Meet the Distinct Needs of Organizations, Associations, and Employers</h3>
        </header>
        
        {/* Box 1: Employers */}
        <div className="flex flex-col md:flex-row bg-white mb-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Protect Your Workforce" 
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <header className="mb-6">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2 text-sm">For Employers</h4>
              <h3 className="text-3xl font-light text-slate-800 leading-tight">
                Protect Your Workforce with Transparent, High-Value PPO Coverage
              </h3>
            </header>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Safeguard employee and client finances with ACA-compliant PPO health plans featuring transparent cost structures, clear deductibles, predictable copayments, and annual out-of-pocket maximums. Give your team access to broad provider networks while optimizing overall benefit administration.
            </p>
          </div>
        </div>

        {/* Box 2: Associations */}
        <div className="flex flex-col md:flex-row bg-white mb-8">
          <div className="md:w-1/2 p-12 flex flex-col justify-center order-2 md:order-1">
            <header className="mb-6">
               <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2 text-sm">For Professional Associations</h4>
              <h3 className="text-3xl font-light text-slate-800 leading-tight">
                Deliver Superior Member Benefits & Subsidized Coverage Options
              </h3>
            </header>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Enhance member retention and value by providing access to top-tier health coverage. Help members qualify for subsidized premium eligibility and significant financial assistance, making quality healthcare affordable and accessible across your association.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=1000" 
              alt="Superior Member Benefits" 
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>

        {/* Box 3: Organizations */}
        <div className="flex flex-col md:flex-row bg-white">
          <div className="md:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=1000" 
              alt="Amplify Success" 
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          <div className="md:w-1/2 p-12 flex flex-col justify-center border-l border-slate-100">
            <header className="mb-6">
              <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2 text-sm">For Organizations</h4>
              <h3 className="text-3xl font-light text-slate-800 leading-tight">
                Amplify Success with Full-Scale IMO Operational Backing
              </h3>
            </header>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Elevate your group's growth strategy with a strategic partner built to streamline your daily operations and maximize earning potential. Gain immediate access to specialized digital resources, structured training schedules, and comprehensive FAQ hubs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
