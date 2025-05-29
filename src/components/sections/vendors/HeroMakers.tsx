'use client';

import { motion } from 'framer-motion';

export default function HeroMakers() {
  return (
    <section className="relative h-[70vh] flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/vendors/image5.jpeg")',
        }}
      />
      
      {/* Stronger Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      
      {/* Content - positioned lower */}
      <motion.div 
        className="relative z-10 text-center text-white px-6 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p 
          className="tracking-[.3em] uppercase text-sm mb-3 text-gold font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Meet Our Artisans
        </motion.p>
        
        <motion.h1 
          className="text-4xl sm:text-6xl font-extrabold mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)'
          }}
        >
          Local&nbsp;Vendors
        </motion.h1>
        
        <motion.p 
          className="mt-4 max-w-lg mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.9)'
          }}
        >
          Hand-picked makers crafting goods that reflect the spirit&nbsp;of&nbsp;French&nbsp;Creek.
        </motion.p>
        
        <motion.a 
          href="#vendors"
          className="inline-block mt-10 px-8 py-3 bg-gold text-black font-semibold rounded-lg shadow-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Browse Makers
        </motion.a>
      </motion.div>
    </section>
  );
} 