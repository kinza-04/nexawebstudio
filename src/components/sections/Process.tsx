import { motion } from 'framer-motion';

const steps = [
  { title: 'Discover', desc: 'Understand the brand, audience and goals.' },
  { title: 'Strategy', desc: 'Create the roadmap and digital direction.' },
  { title: 'Design', desc: 'Transform ideas into a premium visual experience.' },
  { title: 'Build', desc: 'Develop the product using modern technologies.' },
  { title: 'Launch', desc: 'Test, optimize and launch the final experience.' },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">From Idea To Impact.</h2>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-8 border-b border-neutral-800 pb-8">
              <span className="text-4xl font-bold text-neutral-800">0{i + 1}</span>
              <div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-neutral-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
