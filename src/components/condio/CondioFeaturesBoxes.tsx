import { Globe, ShieldCheck, DollarSign, Settings } from "lucide-react";

export default function CondioFeaturesBoxes() {
  const features = [
    {
      icon: <Globe size={40} className="text-blue-600" />,
      title: "Broad Provider Networks",
      desc: "Provide expansive nationwide coverage options giving clients and members complete flexibility and quality care."
    },
    {
      icon: <ShieldCheck size={40} className="text-blue-600" />,
      title: "Transparent Cost Structures",
      desc: "Eliminate financial surprises with clear deductibles, set copayments, and protected annual out-of-pocket maximums."
    },
    {
      icon: <DollarSign size={40} className="text-blue-600" />,
      title: "Subsidized Premium Eligibility",
      desc: "Maximize affordability as many clients qualify for substantial financial assistance toward their health plans."
    },
    {
      icon: <Settings size={40} className="text-blue-600" />,
      title: "Dedicated Operations & Digital Tools",
      desc: "Empower your workforce with on-demand digital resources, ongoing training schedules, and continuous operational support."
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-16 text-center">
          <h3 className="text-3xl font-light text-slate-800">Why Partner with Pegasus Health Group?</h3>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 bg-slate-50 p-4 shadow-sm inline-block rounded-lg border border-slate-100">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
