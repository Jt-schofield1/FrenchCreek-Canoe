'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CalloutJoin() {
  return (
    <section className="py-24 bg-gray-50 text-navy text-center px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.p 
          className="tracking-[.3em] uppercase text-sm mb-3 text-gold font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join our community
        </motion.p>
        
        <motion.h2 
          className="text-3xl sm:text-4xl font-extrabold mb-6 text-navy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Become a Vendor
        </motion.h2>
        
        <motion.p 
          className="max-w-xl mx-auto mb-8 text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We're always looking for makers who share our passion for quality & community. 
          If your handcrafted goods belong at French Creek, we'd love to talk.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            href="/site/contact"
            className="inline-block px-8 py-3 bg-gold text-black font-semibold rounded-lg shadow-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 border-0 no-underline hover:no-underline"
            style={{ textDecoration: 'none' }}
          >
            Contact Us
          </Link>
        </motion.div>
        
        {/* Additional info */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            We offer flexible partnership options including consignment, wholesale, and seasonal arrangements. 
            Our goal is to create mutually beneficial relationships that help local artisans thrive.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 