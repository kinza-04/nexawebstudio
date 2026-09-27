import { motion } from 'framer-motion';

const projects = [
  { title: 'Albrecht Law Firm', category: 'Legal', link: 'https://albrechtlawfirm.com' },
  { title: 'Hedayat Law', category: 'Legal', link: 'https://hedayatilaw.com' },
  { title: 'Sellings Hub', category: 'E-Commerce', link: 'https://sellingshub.com' },
  { title: 'AM365', category: 'Business', link: 'https://am365.se' },
  { title: 'Edspire Consultants', category: 'Consulting', link: 'https://edspireconsultants.com' },
  { title: 'Analytrix', category: 'Analytics', link: 'https://analytrix.co' },
  { title: 'DF Digital', category: 'Digital', link: 'https://dfdigital.dinkumflippers.com' },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">Selected Work</h2>
        <p className="text-neutral-400 mb-16">Digital experiences built with purpose, precision and personality.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.a 
              key={i} 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-8 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-600 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{p.title}</h3>
              <p className="text-neutral-500 text-sm uppercase tracking-wider">{p.category}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
