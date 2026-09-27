export function Testimonials() {
  const testimonials = [
    { text: "Working with Nexa WebStudio completely transformed our online presence. The final experience feels premium, fast and incredibly polished.", author: "Sample Client", role: "Founder, Digital Brand" },
    { text: "They truly understand the balance between design and performance. Highly recommended.", author: "Another Client", role: "CEO, Tech Startup" },
    { text: "A top-tier team that delivers on their promises. Our new site is a major asset.", author: "Third Client", role: "Director, Creative Agency" },
  ];

  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800">
              <p className="text-neutral-300 mb-6 italic">"{t.text}"</p>
              <div className="font-bold">{t.author}</div>
              <div className="text-neutral-500 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
