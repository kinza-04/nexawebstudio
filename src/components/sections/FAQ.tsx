import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'How do you determine project pricing?', a: 'Pricing is based on project complexity, features, and timeline. We provide custom proposals after understanding your specific goals.' },
  { q: 'What is your typical project timeline?', a: 'Timelines vary, but we prioritize efficient delivery without compromising quality. We provide a detailed schedule during the strategy phase.' },
  { q: 'Do you provide ongoing support?', a: 'Yes, we offer flexible maintenance and support plans to keep your digital products performing at their best.' },
  { q: 'Can you work with existing branding?', a: 'Absolutely. We can integrate your existing visual identity or evolve it into a modern digital experience.' },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black text-white border-t border-neutral-800">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/50">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIndex === i ? <Minus className="text-blue-500" /> : <Plus className="text-neutral-500" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-neutral-400">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
