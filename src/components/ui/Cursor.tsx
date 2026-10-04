import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      const isInteractive = computedStyle.cursor === 'pointer' || 
                            target.tagName.toLowerCase() === 'a' || 
                            target.tagName.toLowerCase() === 'button' ||
                            target.closest('a') !== null ||
                            target.closest('button') !== null;
      setIsPointer(isInteractive);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isPointer ? 3 : 1,
      }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
    />
  );
}
