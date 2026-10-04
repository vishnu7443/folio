import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const learningNodes = [
  'Advanced Machine Learning',
  'Agentic AI',
  'Cloud Engineering',
  'Kubernetes',
  'System Design',
  'DSA',
  'AI Infrastructure'
];

function TimelineNode({ node, index }: { node: string, index: number }) {
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      {/* 
        The group class handles the hover state for the line, dot, and card together.
        Using w-1/2 perfectly aligns the inner edge to the absolute center of the screen.
      */}
      <div className={`group w-1/2 relative flex ${isLeft ? 'justify-end pr-8 sm:pr-16 md:pr-24' : 'justify-start pl-8 sm:pl-16 md:pl-24'} py-2 md:py-4`}>
        
        {/* Horizontal Branch Line connecting the center to the card */}
        <div className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-black/10 group-hover:bg-accent transition-colors duration-500 ${isLeft ? 'right-0 w-8 sm:w-16 md:w-24 origin-right group-hover:scale-x-110' : 'left-0 w-8 sm:w-16 md:w-24 origin-left group-hover:scale-x-110'}`} />
        
        {/* The Node Dot on the center timeline */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-background border-2 border-black/20 z-20 group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(100,100,100,0.6)] group-hover:scale-150 transition-all duration-500 ${isLeft ? '-right-[6px]' : '-left-[6px]'}`} />

        {/* The Premium Glass Card */}
        <div className="relative bg-surface/40 backdrop-blur-xl px-6 py-4 md:px-10 md:py-6 border border-black/5 rounded-sm shadow-[0_10px_30px_rgba(100,100,100,0.5)] group-hover:border-black/20 group-hover:bg-black/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(100,100,100,0.15)] cursor-default">
          <span className="text-base md:text-xl font-medium tracking-tight text-secondary group-hover:text-primary transition-colors duration-300">
            {node}
          </span>
          {/* Subtle inner top highlight */}
          <div className="absolute inset-0 rounded-sm pointer-events-none shadow-[inset_0_1px_0_rgba(100,100,100,0.05)] group-hover:shadow-[inset_0_1px_0_rgba(100,100,100,0.2)] transition-shadow duration-500" />
        </div>

      </div>
    </motion.div>
  );
}

export default function Learning() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tie the central glowing line to the user's scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
      <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-secondary mb-24 text-center">CURRENTLY LEARNING</h2>
      
      <div className="relative py-10">
        {/* Faint Background Center Line */}
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-black/5 -translate-x-1/2" />
        
        {/* Animated Glowing Progress Line */}
        <motion.div 
          className="absolute left-[50%] top-0 w-[2px] bg-accent -translate-x-1/2 shadow-[0_0_20px_rgba(100,100,100,0.4)] z-10 origin-top"
          style={{ height: lineHeight }}
        />
        
        <div className="flex flex-col gap-12 md:gap-20 relative z-20">
          {learningNodes.map((node, i) => (
            <TimelineNode key={i} node={node} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
