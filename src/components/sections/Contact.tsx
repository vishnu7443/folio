import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function Contact() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background min-h-[70vh] flex flex-col items-center justify-center border-t border-black/5">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8"
        >
          LET'S BUILD<br />
          SOMETHING<br />
          <span className="text-secondary">USEFUL.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary"
        >
          Have an idea, problem, collaboration, or opportunity worth exploring?
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.a
          ref={buttonRef}
          href="mailto:contact@placeholder.com"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          className="inline-flex items-center text-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-primary text-background font-medium text-sm md:text-lg tracking-tight hover:bg-black hover:scale-105 transition-colors"
        >
          START A<br />CONVERSATION &rarr;
        </motion.a>
      </motion.div>
    </section>
  );
}
