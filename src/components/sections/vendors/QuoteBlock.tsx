'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function QuoteBlock() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Quote Icon */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-4 bg-gold/10 rounded-full">
              <Quote className="w-8 h-8 text-gold" />
            </div>
          </motion.div>
          
          {/* Quote Text */}
          <motion.blockquote 
            className="text-xl sm:text-2xl italic text-navy leading-relaxed mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            "Being a vendor at French Creek Trading Post has connected me with customers who value handcrafted quality—
            it's more than a place to sell, it's a community where artisans support each other and celebrate creativity."
          </motion.blockquote>
          
          {/* Attribution */}
          <motion.footer 
            className="text-base text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span className="font-semibold text-navy">Phyllis Lord</span>
              <span className="hidden sm:block text-gray-400">•</span>
              <span className="text-gold font-medium">N-SpireDesign</span>
            </div>
          </motion.footer>
          
          {/* Decorative Elements */}
          <motion.div 
            className="mt-12 flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-gold rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <div className="w-2 h-2 bg-gold rounded-full opacity-60"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 