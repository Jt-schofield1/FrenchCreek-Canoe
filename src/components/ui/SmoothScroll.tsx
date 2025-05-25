'use client';

import { ReactNode, useEffect } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
  offset?: number;
}

export default function SmoothScroll({ children, offset = 100 }: SmoothScrollProps) {
  useEffect(() => {
    // Function to handle smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Check if this is an anchor link
      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
          });
          
          // Update URL after scrolling
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    // Add event listener to body to handle all anchor clicks
    document.body.addEventListener('click', handleAnchorClick);
    
    // Check if URL has hash on load and scroll to it
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      
      if (targetElement) {
        setTimeout(() => {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          
          window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
    
    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, [offset]);
  
  return <>{children}</>;
} 