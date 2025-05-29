'use client';

import { motion } from 'framer-motion';

export default function HeroStay() {
  return (
    <section className="relative h-[70vh] flex items-end justify-center overflow-hidden">
      {/* Background Image (since we don't have video) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/airbnbs/cottage1.png")',
        }}
      />
      
      {/* Stronger Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      
      {/* Content - positioned lower */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p 
          className="mb-4 tracking-[.3em] uppercase text-sm font-semibold text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Stay with us
        </motion.p>
        
        <motion.h1 
          className="text-4xl sm:text-6xl font-extrabold drop-shadow-2xl text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)'
          }}
        >
          French Creek Retreats
        </motion.h1>
        
        <motion.p 
          className="mt-4 max-w-xl mx-auto text-lg sm:text-xl font-medium text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
          }}
        >
          Two cozy creek-side getaways &nbsp;•&nbsp; Waterford, PA
        </motion.p>
        
        <motion.a 
          href="#featured" 
          className="mt-8 inline-block px-10 py-4 bg-gold text-black font-bold rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 text-lg border-none hover:bg-black hover:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore rentals
        </motion.a>
      </motion.div>
    </section>
  );
} 