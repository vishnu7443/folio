import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
];

export default function FloatingLogo() {
  const { scrollYProgress } = useScroll();
  const [index, setIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let newIndex = Math.floor(latest * logos.length);
    if (newIndex >= logos.length) newIndex = logos.length - 1;
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  });

  // Zig Zag movement across the screen using Viewport Width percentages (10% to 90%)
  const rawX = useTransform(scrollYProgress, 
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], 
    [10, 90, 10, 90, 10, 90, 10, 50]
  );
  
  // Vertical movement within the viewport (Viewport Height percentages)
  const rawY = useTransform(scrollYProgress, 
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 
    [20, 70, 30, 80, 40, 60, 20, 80, 30, 70, 50]
  );

  const rawRotate = useTransform(scrollYProgress, [0, 1], [-45, 1080]);

  // Smooth out the movement using spring physics for a more natural feel
  const springX = useSpring(rawX, { stiffness: 40, damping: 15, mass: 0.8 });
  const springY = useSpring(rawY, { stiffness: 40, damping: 15, mass: 0.8 });
  const rotate = useSpring(rawRotate, { stiffness: 30, damping: 20 });

  // Convert numbers to vw/vh strings
  const x = useTransform(springX, (val) => `calc(${val}vw - 50%)`);
  const y = useTransform(springY, (val) => `calc(${val}vh - 50%)`);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center"
        style={{ x, y, rotate }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-accent/30 blur-[30px] rounded-full scale-150" />
        
        {/* Logo Container with floating animation */}
        <motion.div 
          className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-surface/80 backdrop-blur-2xl border border-black/20 rounded-3xl shadow-[0_0_50px_rgba(100,100,100,0.15),inset_0_1px_0_rgba(100,100,100,0.2)]"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={logos[index]}
              alt="Tech Logo"
              className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-[0_0_20px_rgba(100,100,100,0.2)]"
              initial={{ opacity: 0, scale: 0.2, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.2, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
