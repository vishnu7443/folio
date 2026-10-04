import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="philosophy" ref={ref} className="h-screen flex items-center justify-center overflow-hidden bg-background px-6">
      <motion.div 
        style={{ scale, opacity }} 
        className="text-center max-w-4xl"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-8 text-primary">
          BUILD.<br />
          BREAK.<br />
          LEARN.<br />
          <span className="text-accent-light">REBUILD.</span>
        </h2>
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto leading-relaxed">
          I believe the fastest way to understand technology is to build systems that force you to think beyond the tutorial.
        </p>
      </motion.div>
    </section>
  );
}
