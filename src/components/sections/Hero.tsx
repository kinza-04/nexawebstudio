import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import heroImage from '../../assets/images/hero_geometric_glass_1790504075670.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Hero visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-neutral-400 uppercase border border-neutral-700 rounded-full"
        >
          NEXT-GENERATION DIGITAL STUDIO
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter"
        >
          WE BUILD DIGITAL<br />
          EXPERIENCES THAT<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-blue-400">
            MOVE BRANDS FORWARD.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10"
        >
          Nexa WebStudio creates high-performance websites and digital experiences designed to make ambitious brands impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Start a Project</Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>Explore Our Work</Button>
        </motion.div>
      </div>
    </section>
  );
}
