import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-black/5 py-4 shadow-[0_10px_30px_rgba(100,100,100,0.5)]' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* The Premium 'V' Logo with Liquid Glass / Magnetic Effects */}
        <a href="#" className="relative group flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
          {/* Outer glow pulse */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-md group-hover:bg-accent/40 group-hover:blur-xl transition-all duration-500" />
          {/* Spinning glass diamond */}
          <div className="absolute inset-0 bg-black/5 backdrop-blur-md border border-black/20 rounded-sm rotate-45 group-hover:rotate-90 group-hover:border-accent group-hover:bg-black/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[inset_0_1px_0_rgba(100,100,100,0.1)]" />
          {/* Inner Text */}
          <span className="relative z-10 font-sans font-bold text-xl md:text-2xl tracking-tighter text-primary group-hover:text-black group-hover:scale-110 transition-transform duration-300">
            V
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-secondary">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        </div>

        <a href="#contact" className="text-xs font-mono tracking-widest uppercase border border-black/10 px-5 py-2.5 rounded-sm bg-black/5 backdrop-blur-sm hover:bg-black hover:text-background hover:scale-105 hover:shadow-[0_0_20px_rgba(100,100,100,0.2)] transition-all duration-300">
          Let's Talk &rarr;
        </a>
      </div>
    </motion.nav>
  );
}
