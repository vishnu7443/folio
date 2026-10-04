import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden px-6 md:px-12 bg-background">
      {/* Interactive Visual System (Nodes) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto opacity-40">
           
           <motion.div 
             className="absolute top-[20%] right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full border border-black/10 flex items-center justify-center backdrop-blur-xl bg-black/5 shadow-[inset_0_1px_0_rgba(100,100,100,0.1),0_20px_40px_rgba(100,100,100,0.5)]"
             style={{ x: useTransform(springX, [-1, 1], [-60, 60]), y: useTransform(springY, [-1, 1], [-60, 60]) }}
           >
             <div className="text-center">
               <span className="block text-xs font-mono text-secondary mb-1">NODE 01</span>
               <span className="block text-sm font-medium text-primary">AI LAYER</span>
             </div>
           </motion.div>
           
           <motion.div 
             className="absolute bottom-[25%] left-[10%] w-40 h-40 md:w-56 md:h-56 rounded-full border border-black/10 flex items-center justify-center backdrop-blur-xl bg-black/5 shadow-[inset_0_1px_0_rgba(100,100,100,0.1),0_20px_40px_rgba(100,100,100,0.5)]"
             style={{ x: useTransform(springX, [-1, 1], [40, -40]), y: useTransform(springY, [-1, 1], [40, -40]) }}
           >
             <div className="text-center">
               <span className="block text-xs font-mono text-secondary mb-1">NODE 02</span>
               <span className="block text-sm font-medium text-primary">INFRA</span>
             </div>
           </motion.div>

           <motion.div 
             className="absolute top-[60%] right-[30%] w-20 h-20 rounded-full border border-accent/20 flex items-center justify-center backdrop-blur-xl bg-accent/5 shadow-[inset_0_1px_0_rgba(100,100,100,0.2)]"
             style={{ x: useTransform(springX, [-1, 1], [-20, 20]), y: useTransform(springY, [-1, 1], [30, -30]) }}
           >
             <span className="text-[10px] font-mono text-accent-light">DATA</span>
           </motion.div>
        </div>
        
        {/* Glows */}
        <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-black/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-black/5 blur-[150px]" />
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-light border border-black/10 px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(100,100,100,0.1)]"
        >
          AI Engineer / Product Builder
        </motion.div>
        
        <div className="overflow-hidden mb-8">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9]"
          >
            BUILDING<br/>
            <span className="text-secondary">INTELLIGENT</span><br/>
            SYSTEMS.
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-[50ch] text-base md:text-lg text-secondary leading-relaxed mb-10"
        >
          AI Engineer and full-stack product builder focused on intelligent systems, agentic workflows, cloud infrastructure, and meaningful digital products.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center gap-8"
        >
          <a href="#projects" className="relative overflow-hidden group bg-primary text-background px-8 py-4 text-sm font-medium transition-transform hover:scale-[0.98] rounded-sm">
            <span className="relative z-10">Explore My Work &rarr;</span>
            <div className="absolute inset-0 bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          <a href="#contact" className="text-sm font-medium text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">
            Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
