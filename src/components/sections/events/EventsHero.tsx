'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventsHero() {
  return (
    <section 
      className="relative min-h-[25vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/events/image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-gold animate-pulse"></div>
        <div className="absolute top-40 right-32 w-16 h-16 rounded-full bg-white animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 rounded-full bg-gold animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white pt-32 md:pt-40"
        >
          {/* Fun Icons */}
          <motion.div 
            className="flex justify-center gap-6 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Calendar className="w-6 h-6 text-gold" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
              <Clock className="w-6 h-6 text-gold" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
          >
            Upcoming{' '}
            <span className="text-gold">Events</span>
            <br />
            <span 
              className="text-xl sm:text-2xl lg:text-3xl font-light opacity-90 text-white"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
            >
              🎉 Join the Fun! 🎨
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto font-light opacity-90 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
          >
            From hands-on workshops to community gatherings, there's always something 
            exciting happening at French Creek Trading Post. Come create, connect, and celebrate with us!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a 
              href="#events"
              className="inline-block px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#D4AF37', color: '#000000', border: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4AF37';
                e.currentTarget.style.color = '#000000';
              }}
            >
              View All Events 🎯
            </a>
            <a 
              href="/site/contact"
              className="inline-block px-6 py-3 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#D4AF37', color: '#000000', border: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D4AF37';
                e.currentTarget.style.color = '#000000';
              }}
            >
              Host an Event
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm opacity-70 mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-8 bg-white/30 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 