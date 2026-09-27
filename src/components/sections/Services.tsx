import { motion } from 'framer-motion';
import { ArrowRight, Globe, Layout, Smartphone, ShoppingCart, Target, Zap } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', desc: 'High-performance websites engineered for speed, usability and conversion.' },
  { icon: Layout, title: 'UI/UX Design', desc: 'Elegant interfaces designed around real users and meaningful experiences.' },
  { icon: Smartphone, title: 'Web Applications', desc: 'Scalable modern web applications built for ambitious products.' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Conversion-focused online stores with seamless shopping experiences.' },
  { icon: Target, title: 'Branding', desc: 'Distinctive visual identities that make brands memorable.' },
  { icon: Zap, title: 'SEO & Performance', desc: 'Technical optimization designed to improve visibility, speed and discoverability.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl">
          Everything You Need To Build A Remarkable Digital Presence.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-600 transition-all group"
            >
              <s.icon className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">0{i + 1} — {s.title}</h3>
              <p className="text-neutral-400 mb-6">{s.desc}</p>
              <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
