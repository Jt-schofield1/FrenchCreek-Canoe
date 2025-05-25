'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tagline?: string;
}

export default function PageHeader({ title, subtitle, tagline }: PageHeaderProps) {
  return (
    <section className="min-h-[40vh] flex flex-col justify-center px-4 md:px-8 pt-28 md:pt-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[5%] w-32 h-32 rounded-full bg-gold opacity-10 hidden md:block"></div>
      <div className="absolute bottom-1/4 left-[5%] w-40 h-40 rounded-full bg-creek opacity-10 hidden md:block"></div>
      <div className="absolute top-[40%] left-[30%] w-16 h-16 rounded-full bg-green opacity-5 hidden md:block"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          {tagline && (
            <motion.span 
              className="inline-block text-sm tracking-widest text-creek uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {tagline}
            </motion.span>
          )}
          
          <TextReveal 
            className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 text-navy"
            duration={0.8}
            staggerChildren={0.03}
          >
            {title}
          </TextReveal>
          
          {subtitle && (
            <TextReveal 
              className="text-xl md:text-2xl max-w-3xl font-normal text-navy-muted"
              duration={0.6}
              delay={0.4}
              staggerChildren={0.02}
            >
              {subtitle}
            </TextReveal>
          )}
        </div>
        
        <motion.div
          className="w-full h-[1px] bg-gradient-to-r from-creek via-navy to-gold"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
} 