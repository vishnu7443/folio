import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 12, label: 'PROJECTS', suffix: '+' },
  { value: 4, label: 'HACKATHONS', suffix: '' },
  { value: 15, label: 'TECHNOLOGIES', suffix: '+' },
];

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Achievements() {
  return (
    <section className="relative py-32 px-6 md:px-12 border-y border-black/5 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 relative z-10">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center group cursor-default">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 text-primary group-hover:text-black transition-colors duration-500 drop-shadow-[0_0_15px_rgba(100,100,100,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(100,100,100,0.4)]"
            >
              <Counter from={0} to={stat.value} />{stat.suffix}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.4 }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-secondary group-hover:text-accent-light transition-colors duration-500"
            >
              {stat.label}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
