import { useState, type FormEvent } from 'react';
import { EnvelopeSimple, LinkedinLogo, GithubLogo, Check } from '@phosphor-icons/react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-background pt-12 pb-4 sm:pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Floating Card Container with seamless bottom blend */}
        <div className="relative rounded-t-[2.5rem] md:rounded-t-[3.5rem] rounded-b-[2rem] sm:rounded-b-[2.5rem] overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_25px_60px_rgba(100,100,100,0.9)]">
          
          {/* Border that smoothly dissolves toward the bottom so that small bottom portion blends with the bg */}
          <div className="absolute inset-0 rounded-t-[2.5rem] md:rounded-t-[3.5rem] rounded-b-[2rem] sm:rounded-b-[2.5rem] border border-black/10 pointer-events-none z-20 [mask-image:linear-gradient(to_bottom,black_60%,transparent_96%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_96%)]" />

          {/* Atmospheric Fluid Aura Background matching Syncly Reference */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Base dark canvas */}
            <div className="absolute inset-0 bg-[#fafafa]" />

            {/* Monochrome glows */}
            <div className="absolute -top-[25%] -left-[10%] w-[70%] h-[95%] rounded-full bg-black/10 blur-[95px]" />
            <div className="absolute top-[5%] left-[20%] w-[55%] h-[85%] rounded-full bg-black/5 blur-[110px]" />
            <div className="absolute -top-[15%] -right-[5%] w-[50%] h-[75%] rounded-full bg-black/5 blur-[85px]" />

            {/* Deep velvet shadow in the center-left to preserve crisp typography contrast */}
            <div className="absolute top-[35%] left-[22%] w-[45%] h-[60%] rounded-full bg-[#f0f0f0]/75 blur-[90px]" />

            {/* Top glass sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/[0.04] via-transparent to-transparent" />

            {/* Seamless Bottom Blend Layer: dissolves the bottom of the card directly into the pure black page background */}
            <div className="absolute inset-x-0 bottom-0 h-52 sm:h-64 bg-gradient-to-b from-transparent via-background/70 to-background pointer-events-none z-10" />
          </div>

          {/* Card Content */}
          <div className="relative z-10">
            
            {/* Top Section: Heading + Contact Button */}
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-black leading-[1.12] mb-8 sm:mb-10">
                Ready to build intelligent systems?
              </h2>

              <a
                href="mailto:contact@vishnuvardhan.dev"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-sm md:text-base hover:bg-black/95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_25px_rgba(100,100,100,0.2)]"
              >
                Contact us
              </a>
            </div>

            {/* Bottom Section: Newsletter + Multi-Column Links */}
            <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              
              {/* Left Column: Newsletter */}
              <div className="lg:col-span-5 max-w-md">
                <h3 className="text-sm font-semibold tracking-wide text-black mb-2">
                  Newsletter
                </h3>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-6">
                  We'd love to share our thoughts on intelligent systems, agentic architectures, and engineering breakthroughs with you in our monthly newsletter.
                </p>

                {subscribed ? (
                  <div className="flex items-center gap-3 bg-black/10 backdrop-blur-md border border-black/20 text-black px-5 py-3 rounded-xl text-xs sm:text-sm">
                    <Check size={18} className="text-emerald-400 shrink-0" />
                    <span>Thank you for subscribing! We'll be in touch.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 bg-black/10 backdrop-blur-md border border-black/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-black placeholder:text-black/45 focus:outline-none focus:border-black/40 focus:ring-1 focus:ring-black/20 transition-all shadow-[inset_0_1px_0_rgba(100,100,100,0.05)]"
                    />
                    <button
                      type="submit"
                      className="bg-black/20 hover:bg-black/30 active:scale-[0.98] text-black px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all backdrop-blur-md border border-black/15 shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              {/* Right Columns: Links */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:justify-end">
                
                {/* Column 1: Home */}
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-semibold tracking-wide text-black mb-1">
                    Home
                  </span>
                  <a href="#about" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Overview
                  </a>
                  <a href="#work" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Architecture
                  </a>
                  <a href="#philosophy" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Philosophy
                  </a>
                </div>

                {/* Column 2: Platform */}
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-semibold tracking-wide text-black mb-1">
                    Platform
                  </span>
                  <a href="#work" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Vector AI
                  </a>
                  <a href="#projects" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Agentic AI
                  </a>
                  <a href="#projects" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Portfolio
                  </a>
                </div>

                {/* Column 3: About us */}
                <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
                  <span className="text-sm font-semibold tracking-wide text-black mb-1">
                    About us
                  </span>
                  <a href="#skills" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Tech Stack
                  </a>
                  <a href="#learning" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Research
                  </a>
                  <a href="mailto:contact@vishnuvardhan.dev" className="text-xs sm:text-sm text-black/70 hover:text-black transition-colors">
                    Contact Us
                  </a>

                  {/* Circular Social Icons */}
                  <div className="flex items-center gap-2.5 mt-2">
                    <a
                      href="mailto:contact@vishnuvardhan.dev"
                      aria-label="Email"
                      className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 border border-black/15 flex items-center justify-center text-black/80 hover:text-black transition-all hover:scale-105"
                    >
                      <EnvelopeSimple size={15} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 border border-black/15 flex items-center justify-center text-black/80 hover:text-black transition-all hover:scale-105"
                    >
                      <LinkedinLogo size={15} />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 border border-black/15 flex items-center justify-center text-black/80 hover:text-black transition-all hover:scale-105"
                    >
                      <GithubLogo size={15} />
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Centered Copyright seamlessly resting on the blended background */}
            <div className="mt-16 sm:mt-24 pt-6 text-center text-xs text-black/50 tracking-wide font-sans">
              &copy; {new Date().getFullYear()} Vishnu Vardhan.
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}
