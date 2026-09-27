import { motion } from 'framer-motion';
import { Zap, Layout, ShieldCheck, BarChart3 } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance to ensure your users never wait.' },
  { icon: Layout, title: 'Modern UI/UX', desc: 'Custom, sleek, and intuitive designs that elevate your brand identity.' },
  { icon: ShieldCheck, title: 'Secure & Reliable', desc: 'Built with industry-best practices for maximum security and uptime.' },
  { icon: BarChart3, title: 'Scalable Growth', desc: 'Architected to grow with your business and handle increasing traffic.' },
];

export function Features() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Nexa?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
            >
              <feature.icon className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
