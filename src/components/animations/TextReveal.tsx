'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  staggerChildren?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function TextReveal({
  children,
  as: Component = 'div',
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
  staggerChildren = 0.05,
  direction = 'up'
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  // Set initial and animate states based on direction
  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'down':
        return {
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return {
          hidden: { x: 20, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'right':
        return {
          hidden: { x: -20, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      default:
        return {
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  // Create variants for parent and child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      }
    }
  };

  const childVariants = getDirectionVariants();

  // Function to split text into words and create motion elements
  const renderWords = (text: string) => {
    return text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        className="inline-block mx-[0.15em] my-[0.025em] first:ml-0 last:mr-0"
        style={{ letterSpacing: '0.015em', display: 'inline-block' }}
        variants={childVariants}
        transition={{ duration }}
      >
        {word}
      </motion.span>
    ));
  };

  // Function to process children and apply animation
  const processChildren = (child: ReactNode): ReactNode => {
    if (typeof child === 'string') {
      return renderWords(child);
    }
    
    if (typeof child === 'object' && child !== null && 'props' in child) {
      return {
        ...child,
        props: {
          ...child.props,
          children: Array.isArray(child.props.children)
            ? child.props.children.map(processChildren)
            : processChildren(child.props.children)
        }
      };
    }
    
    return child;
  };

  return (
    <motion.div
      ref={ref}
      className={`${className} leading-relaxed`}
      style={{ wordSpacing: '0.05em' }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {processChildren(children)}
    </motion.div>
  );
} 