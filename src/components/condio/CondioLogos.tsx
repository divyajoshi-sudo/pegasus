export default function CondioLogos() {
  return (
    <section id="logos" className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-12 text-center">
          <h3 className="text-3xl font-light text-slate-800">Our Strategic Partners</h3>
        </header>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos */}
          <div className="text-2xl font-black font-mono tracking-tighter">PARTNER ONE</div>
          <div className="text-2xl font-black font-mono tracking-tighter">PARTNER TWO</div>
          <div className="text-2xl font-black font-mono tracking-tighter">PARTNER THREE</div>
          <div className="text-2xl font-black font-mono tracking-tighter">PARTNER FOUR</div>
          <div className="text-2xl font-black font-mono tracking-tighter">PARTNER FIVE</div>
        </div>
      </div>
    </section>
  );
}
