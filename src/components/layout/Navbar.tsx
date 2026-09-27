import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import logo from '../../assets/logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-neutral-800' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Zone 1: Brand */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Nexa WebStudio Logo" className="w-8 h-8 object-contain" />
          <span className="text-white font-bold text-xl tracking-tighter">NEXA</span>
        </a>

        {/* Zone 2: Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Work', 'About', 'Process', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Zone 3: CTA */}
        <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Start a Project</Button>
      </div>
    </motion.header>
  );
}
