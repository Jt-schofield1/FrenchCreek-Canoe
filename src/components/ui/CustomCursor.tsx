'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type CursorVariant = 'default' | 'link' | 'text';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Handle cursor changes based on element types
    const handleCursorChange = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button') ||
          target.dataset.cursor === 'link') {
        setCursorVariant('link');
      } else if (
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'P' || 
        target.tagName === 'H1' || 
        target.tagName === 'H2' || 
        target.tagName === 'H3' || 
        target.tagName === 'H4' || 
        target.tagName === 'SPAN' ||
        target.dataset.cursor === 'text'
      ) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleCursorChange);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleCursorChange);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      mixBlendMode: 'difference' as const,
      borderRadius: '50%',
      border: '1px solid rgba(0, 0, 0, 0.2)',
    },
    link: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '50%',
      border: '1px solid rgba(0, 0, 0, 0.3)',
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      borderRadius: '50%',
      border: '1px solid rgba(0, 0, 0, 0.1)',
    }
  };

  // Only show the custom cursor on devices that support hover
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    // Simple check for desktop - not perfect but good enough for this purpose
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsDesktop(mediaQuery.matches);
    
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
} 