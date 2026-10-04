import { motion } from 'motion/react';

const focusItems = [
  { label: 'AI Systems', status: 'Building' },
  { label: 'Agentic AI', status: 'Experimenting' },
  { label: 'Cloud Optimization', status: 'Learning' },
  { label: 'Kubernetes', status: 'Building' },
  { label: 'RAG', status: 'Experimenting' },
  { label: 'Product Engineering', status: 'Building' },
];

export default function CurrentFocus() {
  return (
    <section className="py-16 md:py-24 border-b border-black/5 overflow-hidden bg-background relative">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(9,9,11,1)_0%,rgba(9,9,11,0)_15%,rgba(9,9,11,0)_85%,rgba(9,9,11,1)_100%)] z-10" />
      
      <div className="px-6 md:px-12 mb-12 max-w-7xl mx-auto relative z-20">
        <h3 className="text-xs font-mono uppercase tracking-widest text-secondary mb-4">Currently Building</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap items-center gap-6 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[...focusItems, ...focusItems, ...focusItems, ...focusItems].map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 bg-black/5 backdrop-blur-xl px-6 py-4 rounded-full border border-black/10 shadow-[inset_0_1px_0_rgba(100,100,100,0.1)] hover:bg-black/10 transition-colors cursor-default"
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${
                  item.status === 'Building' ? 'bg-accent shadow-[0_0_8px_rgba(100,100,100,0.4)] animate-pulse' :
                  item.status === 'Learning' ? 'bg-amber-400' : 'bg-emerald-400'
                }`} />
                <span className="text-[10px] uppercase font-mono tracking-widest text-secondary">{item.status}</span>
              </div>
              <span className="text-lg font-medium tracking-tight ml-2">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
