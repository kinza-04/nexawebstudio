import { motion } from 'framer-motion';

const features = [
  { title: 'Strategy First', desc: 'We understand the goal before designing the solution.' },
  { title: 'Pixel Precision', desc: 'Every interaction and visual detail is carefully considered.' },
  { title: 'Performance Obsessed', desc: 'Fast, responsive and technically optimized experiences.' },
  { title: 'Built To Grow', desc: 'Digital products designed to evolve with your business.' },
];

export function WhyNexa() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <h2 className="text-4xl md:text-5xl font-bold">WHY NEXA</h2>
        <div className="grid grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i}>
              <h3 className="font-bold text-lg mb-2">0{i + 1} — {f.title}</h3>
              <p className="text-neutral-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
