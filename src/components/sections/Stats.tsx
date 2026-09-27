import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Digital Support', value: '24/7' },
];

export function Stats() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-sm text-neutral-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
