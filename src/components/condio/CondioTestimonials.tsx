export default function CondioTestimonials() {
  const testimonials = [
    {
      text: "Pegasus Health Group completely transformed how we handle employee benefits. In orci justo, commodo non ante molestie, rhoncus tincidunt neque.",
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing. The best healthcare partner we've ever had.",
      name: "Natalie Jenkins",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-16 text-center">
          <h3 className="text-3xl font-light text-slate-800">Testimonials</h3>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <blockquote key={idx} className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <figure className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
              </figure>
              <aside>
                <p className="text-slate-600 italic mb-4">"{testimonial.text}"</p>
                <footer className="font-bold text-slate-800">{testimonial.name}</footer>
              </aside>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
