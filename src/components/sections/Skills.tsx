import { useRef, useEffect, useState, type MouseEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Cloud, Terminal, Browsers, Sparkle } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  name: string;
  sub: string;
  tag: string;
  status: string;
  statusColor: string;
  icon: string;
}

interface EcosystemCategory {
  id: string;
  category: string;
  icon: typeof Cpu;
  accent: string;
  items: SkillItem[];
}

const ecosystemData: EcosystemCategory[] = [
  {
    id: 'AI',
    category: 'AI & INTELLIGENCE',
    icon: Cpu,
    accent: '#4e9ce8',
    items: [
      {
        name: 'Machine Learning',
        sub: 'Regression, Clustering, OLS',
        tag: 'Scikit-learn',
        status: 'Model Ops',
        statusColor: 'bg-brand-blue',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg'
      },
      {
        name: 'RAG Architecture',
        sub: 'Hybrid Retrieval, Chunks & HyDE',
        tag: 'OpenAI',
        status: 'Active',
        statusColor: 'bg-brand-blue',
        icon: 'https://cdn.simpleicons.org/openai/000000'
      },
      {
        name: 'LLM Systems',
        sub: 'Fine-tuning, Quantization, Prompt Eng',
        tag: 'Hugging Face',
        status: 'Production',
        statusColor: 'bg-brand-blue',
        icon: 'https://cdn.simpleicons.org/huggingface/000000'
      },
      {
        name: 'Agentic Workflows',
        sub: 'Multi-Agent Loops & Tool Actuation',
        tag: 'LangChain',
        status: 'Core Focus',
        statusColor: 'bg-brand-blue animate-pulse',
        icon: 'https://cdn.simpleicons.org/langchain/000000'
      },
      {
        name: 'Vector Databases',
        sub: 'HNSW Indexing, Semantic Similarity',
        tag: 'Weaviate',
        status: 'Infra',
        statusColor: 'bg-brand-blue',
        icon: 'https://cdn.simpleicons.org/weaviate/000000'
      }
    ]
  },
  {
    id: 'CLOUD',
    category: 'CLOUD & INFRASTRUCTURE',
    icon: Cloud,
    accent: '#70d6c5',
    items: [
      {
        name: 'AWS Ecosystem',
        sub: 'EC2, S3, IAM, VPC, Lambda',
        tag: 'Amazon AWS',
        status: 'Cloud Arch',
        statusColor: 'bg-brand-teal',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
      },
      {
        name: 'Docker',
        sub: 'Multi-stage Builds, Container Specs',
        tag: 'Containers',
        status: 'Standard',
        statusColor: 'bg-brand-teal',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
      },
      {
        name: 'Kubernetes',
        sub: 'Cluster State, Pod Scaling, Ingress',
        tag: 'Orchestration',
        status: 'Production',
        statusColor: 'bg-brand-teal',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg'
      },
      {
        name: 'Prometheus',
        sub: 'Time-series Metrics, Alertmanager',
        tag: 'Observability',
        status: 'Telemetry',
        statusColor: 'bg-brand-teal',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg'
      }
    ]
  },
  {
    id: 'BACKEND',
    category: 'BACKEND & DATA PLATFORMS',
    icon: Terminal,
    accent: '#e1edd4',
    items: [
      {
        name: 'Python',
        sub: 'AsyncIO, NumPy, Mathematical Modeling',
        tag: 'Core Lang',
        status: 'Native',
        statusColor: 'bg-brand-mint',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
      },
      {
        name: 'FastAPI',
        sub: 'Pydantic V2, ASGI, High Throughput',
        tag: 'REST / Microservices',
        status: 'Services',
        statusColor: 'bg-brand-mint',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg'
      },
      {
        name: 'Node.js',
        sub: 'Event Loop, Worker Threads, APIs',
        tag: 'Runtime',
        status: 'Services',
        statusColor: 'bg-brand-mint',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
      },
      {
        name: 'PostgreSQL',
        sub: 'pgvector, ACID Compliance, Complex Queries',
        tag: 'Relational DB',
        status: 'Persistence',
        statusColor: 'bg-brand-mint',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
      }
    ]
  },
  {
    id: 'FRONTEND',
    category: 'FRONTEND & KINETIC INTERFACES',
    icon: Browsers,
    accent: '#f5d6a2',
    items: [
      {
        name: 'React 19',
        sub: 'Server Components, Concurrent UI, Hooks',
        tag: 'UI Library',
        status: 'Primary',
        statusColor: 'bg-brand-peach',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
      },
      {
        name: 'TypeScript',
        sub: 'Strict Typing, Generics, AST Manipulation',
        tag: 'Typing System',
        status: 'Standard',
        statusColor: 'bg-brand-peach',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
      },
      {
        name: 'Vite',
        sub: 'Instant HMR, Rolldown Optimization',
        tag: 'Build Tooling',
        status: 'Tooling',
        statusColor: 'bg-brand-peach',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
      },
      {
        name: 'Tailwind CSS',
        sub: 'Design Token Engine, Fluid Typography',
        tag: 'Design System',
        status: 'Styling',
        statusColor: 'bg-brand-peach',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
      },
      {
        name: 'Motion & GSAP',
        sub: 'ScrollTrigger, Spring Physics, Timelines',
        tag: 'Animation',
        status: 'Kinetic UX',
        statusColor: 'bg-brand-peach',
        icon: 'https://cdn.simpleicons.org/framer/000000'
      }
    ]
  }
];

const filterTabs = [
  { id: 'ALL', label: 'All Systems' },
  { id: 'AI', label: 'AI & Inference' },
  { id: 'CLOUD', label: 'Cloud & Infra' },
  { id: 'BACKEND', label: 'Backend' },
  { id: 'FRONTEND', label: 'Frontend' }
];

function SkillCard({ item, accentColor }: { item: SkillItem; accentColor: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Subtle 3D tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power1.out',
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-xl bg-surface/40 backdrop-blur-xl border border-black/5 transition-colors duration-300 hover:border-transparent p-5 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(100,100,100,0.4)] will-change-transform"
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Dynamic Cursor Spotlight Border: Follows the mouse with intense electric beam */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, ${accentColor}cc, transparent 75%)`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />

      {/* Internal Radial Light Flare */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, ${accentColor}, transparent 80%)`
        }}
      />

      {/* Glass Edge Highlights */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-black/15 to-transparent pointer-events-none" />

      {/* Top Row: Icon + Status Pill */}
      <div className="relative z-10 flex items-start justify-between gap-3 mb-4">
        <div className="w-11 h-11 rounded-lg bg-black/[0.04] border border-black/10 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:border-black/20 group-hover:bg-black/[0.08] shadow-[inset_0_1px_0_rgba(100,100,100,0.1)]">
          <img
            src={item.icon}
            alt={item.name}
            className="w-full h-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(100,100,100,0.3)] transition-all duration-300"
          />
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.03] border border-black/10 text-[10px] font-mono tracking-wider text-secondary group-hover:text-primary transition-colors">
          <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor}`} />
          <span>{item.status}</span>
        </div>
      </div>

      {/* Content Row: Title + Subtext */}
      <div className="relative z-10">
        <h4 className="text-base font-semibold tracking-tight text-primary group-hover:text-black transition-colors duration-200 mb-1">
          {item.name}
        </h4>
        <p className="text-xs text-secondary/80 group-hover:text-secondary leading-relaxed transition-colors duration-200">
          {item.sub}
        </p>
      </div>

      {/* Bottom Row: Tech Tag */}
      <div className="relative z-10 mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/60 group-hover:text-accent-light transition-colors">
          {item.tag}
        </span>
        <Sparkle
          size={12}
          className="text-black/20 group-hover:text-accent group-hover:rotate-45 group-hover:scale-125 transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const reduceMotion = useReducedMotion();

  // GSAP ScrollTrigger Entrance Animation
  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // 2. Category Blocks Stagger
      const categorySections = gsap.utils.toArray<HTMLElement>('.ecosystem-block');
      categorySections.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 3. Cybernetic Scanning Grid Light Beams
      gsap.to('.cyber-beam-h', {
        xPercent: 200,
        repeat: -1,
        duration: 8,
        ease: 'linear'
      });

      gsap.to('.cyber-beam-v', {
        yPercent: 200,
        repeat: -1,
        duration: 10,
        ease: 'linear'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  // Filtered categories
  const filteredData =
    activeFilter === 'ALL'
      ? ecosystemData
      : ecosystemData.filter((cat) => cat.id === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 px-6 md:px-12 bg-background overflow-hidden relative border-t border-black/5"
    >
      {/* Cybernetic Ambient Grid & Particle Beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle dot matrix grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-accent-light/10 blur-[150px]" />

        {/* Dynamic Light Beams Traveling Across the Grid */}
        <div className="cyber-beam-h absolute top-[30%] -left-[50%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent blur-[1px] opacity-40 pointer-events-none" />
        <div className="cyber-beam-h absolute top-[70%] -left-[50%] w-[50vw] h-[1px] bg-gradient-to-r from-transparent via-accent-light to-transparent blur-[1px] opacity-30 pointer-events-none" />
        <div className="cyber-beam-v absolute -top-[50%] left-[40%] w-[1px] h-[40vh] bg-gradient-to-b from-transparent via-black to-transparent blur-[1px] opacity-35 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light border border-black/10 px-3.5 py-1.5 rounded-full bg-black/5 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Operational Stack & Telemetry
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-primary">
              THE ECOSYSTEM.
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface/60 backdrop-blur-xl border border-black/10 rounded-full shadow-[inset_0_1px_0_rgba(100,100,100,0.05)]">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-300 z-10 ${
                    isSelected ? 'text-primary font-medium' : 'text-secondary hover:text-primary'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="ecosystemFilterActive"
                      className="absolute inset-0 bg-black/15 border border-black/20 rounded-full shadow-[0_0_15px_rgba(100,100,100,0.1),inset_0_1px_0_rgba(100,100,100,0.2)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid Container */}
        <div ref={gridContainerRef} className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredData.map((categoryGroup, catIndex) => {
              const CategoryIcon = categoryGroup.icon;

              return (
                <motion.div
                  key={categoryGroup.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.05 }}
                  className="ecosystem-block rounded-2xl bg-surface/20 border border-black/5 backdrop-blur-md p-6 sm:p-8 relative overflow-hidden"
                >
                  {/* Subtle Corner Glow Accent */}
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px] pointer-events-none opacity-20"
                    style={{ backgroundColor: categoryGroup.accent }}
                  />

                  {/* Category Header Row */}
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/10 relative z-10">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center border border-black/10"
                        style={{ backgroundColor: `${categoryGroup.accent}15` }}
                      >
                        <CategoryIcon size={18} style={{ color: categoryGroup.accent }} />
                      </div>
                      <h3 className="font-mono text-sm tracking-widest uppercase text-primary font-medium">
                        {categoryGroup.category}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-secondary">
                      <span>{categoryGroup.items.length} Modules</span>
                      <span className="w-1 h-1 rounded-full bg-black/20" />
                      <span className="text-accent-light">0{catIndex + 1}</span>
                    </div>
                  </div>

                  {/* Responsive Grid of Dynamic Spotlight Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10">
                    {categoryGroup.items.map((item, itemIndex) => (
                      <SkillCard
                        key={`${categoryGroup.id}-${item.name}-${itemIndex}`}
                        item={item}
                        accentColor={categoryGroup.accent}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
