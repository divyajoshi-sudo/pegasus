export default function CondioProperties() {
  const plans = [
    {
      id: "A3",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
      tier: "Silver",
      deductible: "$3,000",
      coPay: "$40",
      price: "$299/mo"
    },
    {
      id: "A4",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400",
      tier: "Gold",
      deductible: "$1,500",
      coPay: "$25",
      price: "$450/mo"
    },
    {
      id: "B2",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400",
      tier: "Platinum",
      deductible: "$500",
      coPay: "$15",
      price: "$650/mo"
    },
    {
      id: "B5",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400",
      tier: "Bronze",
      deductible: "$6,000",
      coPay: "$60",
      price: "$199/mo"
    }
  ];

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-12 border-b border-slate-200 pb-4">
          <h3 className="text-3xl font-light text-slate-800">Available Plans</h3>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="group border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={plan.image} 
                  alt={plan.id} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <header className="mb-4">
                  <h4 className="text-xl font-bold text-slate-800">{plan.id}</h4>
                </header>
                <div className="text-sm text-slate-600">
                  <dl className="grid grid-cols-2 gap-y-2 border-t border-slate-100 pt-4">
                    <dt className="font-semibold">Tier:</dt>
                    <dd className="text-right">{plan.tier}</dd>
                    
                    <dt className="font-semibold">Deductible:</dt>
                    <dd className="text-right">{plan.deductible}</dd>
                    
                    <dt className="font-semibold">Co-Pay:</dt>
                    <dd className="text-right">{plan.coPay}</dd>
                    
                    <dt className="font-semibold pt-2 border-t border-slate-100">Price:</dt>
                    <dd className="text-right pt-2 border-t border-slate-100 font-bold text-slate-800">{plan.price}</dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
