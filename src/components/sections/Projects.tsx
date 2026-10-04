import { motion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';

const projects = [
  {
    title: 'AXEN AI',
    category: 'Agentic Automation',
    desc: 'Intelligent research and automation platform powered by multi-agent architectures.',
    tech: 'React, FastAPI, LLMs',
    interaction: 'scale'
  },
  {
    title: 'AI PUBLIC HEALTH',
    category: 'Conversational AI',
    desc: 'Multilingual AI-powered public health information system.',
    tech: 'Python, RAG, React',
    interaction: 'horizontal'
  },
  {
    title: 'ADAPTIVE LEARNING',
    category: 'EdTech AI',
    desc: 'Personalized learning platform modifying content based on user performance.',
    tech: 'Node.js, React, ML',
    interaction: 'rotate'
  },
  {
    title: 'DATA VISUALIZATION',
    category: 'Analytics',
    desc: 'AI-assisted data analysis and visualization dashboard.',
    tech: 'TypeScript, Python',
    interaction: 'typography'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">SELECTED WORK</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-x-12">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;
          const colSpan = isEven ? 'md:col-span-7' : 'md:col-span-8 md:col-start-5';
          
          return (
            <motion.div 
              key={i} 
              className={`group cursor-pointer ${colSpan} flex flex-col`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-[4/3] bg-surface mb-8 overflow-hidden rounded-sm border border-black/5 group-hover:border-brand-peach/30 transition-colors shadow-lg group-hover:shadow-[0_20px_50px_rgba(245,214,162,0.2)]">
                <motion.img 
                  src={`https://picsum.photos/seed/${project.title.replace(/\s+/g, '-').toLowerCase()}/800/600`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                  whileHover={
                    project.interaction === 'scale' ? { scale: 1.05 } :
                    project.interaction === 'horizontal' ? { x: 20 } :
                    project.interaction === 'rotate' ? { rotate: 2, scale: 1.05 } :
                    { scale: 1.02 }
                  }
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight mb-2 group-hover:text-brand-peach transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary max-w-md leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <p className="font-mono text-xs text-secondary uppercase tracking-widest">
                    {project.tech}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-300 transform group-hover:scale-110">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
