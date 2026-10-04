import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const rightX = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const stripX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} id="about" className="py-32 relative overflow-hidden bg-surface">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-32">
          <motion.div style={{ y: leftY }} className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-balance">
              ENGINEERING WITH A <span className="text-accent-light">PRODUCT MINDSET.</span>
            </h2>
          </motion.div>

          <motion.div style={{ x: rightX }} className="flex flex-col justify-center text-secondary">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              I’m Vishnu Vardhan, a Computer Science Engineering student focused on building intelligent systems that connect AI, software, and real-world problems.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              I don't just write code—I design architectures that scale, build interfaces that feel natural, and engineer agentic workflows that solve complex operational challenges.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="border-y border-black/5 py-6 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          style={{ x: stripX }}
          className="flex gap-12 text-sm font-mono tracking-widest text-secondary/70 uppercase"
        >
          {['AI', 'Agentic Systems', 'Cloud', 'Kubernetes', 'Full Stack', 'Product Design', 'AI', 'Agentic Systems', 'Cloud', 'Kubernetes'].map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
