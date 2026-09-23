import { Download, Calendar, HelpCircle } from "lucide-react";

export default function CondioWhySection() {
  return (
    <section id="support" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-12">
          <h3 className="text-3xl font-light text-slate-800">Empowering Your Growth at Every Stage</h3>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Right Content Block (Text) */}
          <div className="lg:w-2/3">
            <div className="bg-white border border-slate-100 p-8 flex flex-col md:flex-row gap-8 shadow-sm h-full">
              <div className="md:w-5/12 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" 
                  alt="Dedicated Support" 
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="md:w-7/12 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Dedicated Support & Resource Hub
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Succeeding in today's health plan market requires more than just standalone coverage—it requires an active partner. Pegasus Health Group equips employers, associations, and organizations with dedicated support, training, and digital assets to ensure seamless adoption and ongoing growth.
                </p>
                <div>
                  <a href="#contact" className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-500 transition-colors inline-block shadow-md">
                    Access Resources
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Left List (Resources) */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <ul className="space-y-6 text-slate-700">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white p-2 shadow-sm rounded-md"><Download size={24} className="text-blue-600" /></div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-1">Digital Resources</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">Instant access to digital assets and partner marketing materials.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white p-2 shadow-sm rounded-md"><Calendar size={24} className="text-blue-600" /></div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-1">Training Schedules</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">Scheduled sessions to keep your operations and leadership fully informed.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white p-2 shadow-sm rounded-md"><HelpCircle size={24} className="text-blue-600" /></div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-1">FAQ & Blog Repositories</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">Up-to-date information hubs addressing client and member inquiries.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
