import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { id: '01', title: 'Telemetry', desc: 'Ingesting Kubernetes metrics and cloud state data.' },
  { id: '02', title: 'Prediction', desc: 'Predicting resource exhaustion using Scikit-learn models.' },
  { id: '03', title: 'Candidate Decisions', desc: 'Generating multiple remediation paths via OR-Tools.' },
  { id: '04', title: 'Simulation', desc: 'Running digital twin validation against current cluster state.' },
  { id: '05', title: 'Policy Check', desc: 'Evaluating compliance constraints and business rules.' },
  { id: '06', title: 'Confidence', desc: 'Scoring the decision safety index.' },
  { id: '07', title: 'Recommended Action', desc: 'Exposing the highest-confidence remediation to operators.' },
];

export default function FeaturedProject() {
  const wrap = useRef<HTMLDivElement>(null);
  const trackContainer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current || !trackContainer.current) return;
    
    const ctx = gsap.context(() => {
      const trackEl = track.current!;
      const containerEl = trackContainer.current!;
      
      const getDistance = () => trackEl.scrollWidth - containerEl.clientWidth;
      
      const scrollTween = gsap.to(trackEl, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${getDistance()}`, 
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>('.vector-card');
      cards.forEach((card) => {
        gsap.set(card, { scale: 0.85, opacity: 0.2, rotateY: 20 });
        
        gsap.to(card, {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left 75%", 
            end: "center center", 
            scrub: true,
          }
        });

        gsap.to(card, {
          scale: 0.85,
          opacity: 0.2,
          rotateY: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "center center",
            end: "right 25%",
            scrub: true,
          }
        });
      });

      const lines = gsap.utils.toArray<HTMLElement>('.vector-line');
      lines.forEach((line) => {
        gsap.set(line, { scaleX: 0 }); 
        
        gsap.to(line, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            containerAnimation: scrollTween,
            start: "left center", 
            end: "right center", 
            scrub: true,
          }
        });
      });

    }, wrap);
    
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="work" ref={wrap} className="relative overflow-hidden bg-background border-y border-black/5">
      {/* Epic AI Generated Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradients to blend the image into the dark UI perfectly */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
        <img 
          src="/assets/vector-hero.jpg" 
          alt="Vector AI Decision Intelligence Kubernetes" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full h-[100dvh]">
        
        {/* Left Column: The Narrative (Sticky) */}
        <div className="w-full lg:w-[45%] h-full flex flex-col justify-center px-6 md:px-12 relative z-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-primary">
            VECTOR
          </h2>
          <p className="text-accent-light font-mono text-xs md:text-sm tracking-widest uppercase mb-10 border border-accent/20 bg-accent/5 px-4 py-2 rounded-sm self-start backdrop-blur-sm">
            Determinism & Assurance Layer
          </p>
          
          <div className="space-y-6 text-[13px] md:text-[15px] text-secondary/90 leading-relaxed max-w-xl">
            <p>
              As modern microservices migrate toward distributed Kubernetes fabrics, operational complexity outpaces human cognitive bandwidth. While conventional AIOps and observability suites excel at post-facto anomaly detection and unconstrained LLM heuristic recommendations, they exhibit a fundamental systems flaw: open-loop actuation without deterministic assurance.
            </p>
            <p>
              Executing automated remediation actions (such as pod restarts, replica autoscaling, or resource eviction) in production without pre-flight risk bounds frequently induces cascading thundering-herd failures, split-brain states, and fatal data degradation.
            </p>
            <p className="text-primary/90 font-medium border-l-2 border-accent pl-4 italic bg-black/[0.02] py-2 rounded-r-sm">
              "Under what formal safety, policy, and counterfactual constraints is this action provably safe to execute?"
            </p>
            <p>
              Vector resolves this paradigm failure by introducing an intermediary Deterministic Decision Intelligence & Assurance Layer. It integrates Ordinary Least Squares (OLS) forecasting, 5-Dimensional MCDA, Proportional State-Space Digital Twin Simulation, and Telegram Approval Loops to guarantee Zero Data Loss and fail-safe autonomy.
            </p>
          </div>
        </div>

        {/* Right Column: The Tech Pipeline (Horizontal Scroll) */}
        <div ref={trackContainer} style={{ perspective: '1200px' }} className="w-full lg:w-[55%] h-full relative z-20 overflow-hidden hidden lg:block">
          
          {/* calc(27.5vw - 160px) strictly centers a 320px card in a 55vw container */}
          <div ref={track} className="flex h-full items-center px-[calc(27.5vw-160px)] w-max">
            {stages.map((stage, i) => (
              <div key={stage.id} className="flex items-center">
                
                <div className="vector-card w-[320px] h-[380px] bg-brand-blue/5 backdrop-blur-2xl border border-brand-blue/20 rounded-sm p-8 flex flex-col justify-between shrink-0 hover:border-brand-blue/40 transition-colors shadow-[0_20px_50px_rgba(78,156,232,0.15)]">
                  <div className="flex justify-between items-start">
                    <div className="font-mono text-brand-blue text-sm tracking-widest">{stage.id}</div>
                    <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse shadow-[0_0_10px_rgba(78,156,232,0.4)]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium mb-3 text-primary">{stage.title}</h4>
                    <p className="text-secondary text-sm leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="w-full h-1 bg-brand-blue/10 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-blue/60 w-1/3 rounded-full" />
                  </div>
                </div>
                
                {i !== stages.length - 1 && (
                  <div className="w-[60px] lg:w-[100px] h-[2px] bg-brand-blue/10 shrink-0 relative overflow-hidden mx-4">
                    <div className="vector-line absolute top-0 left-0 h-full w-full bg-brand-blue origin-left shadow-[0_0_15px_rgba(78,156,232,0.4)]" />
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
