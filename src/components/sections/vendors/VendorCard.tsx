'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Vendor {
  name: string;
  img: string;
  tagline: string;
  description: string;
}

interface VendorCardProps {
  vendor: Vendor;
  onOpen: () => void;
  index: number;
}

export default function VendorCard({ vendor, onOpen, index }: VendorCardProps) {
  return (
    <motion.button
      onClick={onOpen}
      className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 text-left bg-white hover:-translate-y-1 hover:rotate-[0.35deg]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, rotate: 0.35 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-80">
        <motion.img 
          src={vendor.img} 
          alt={vendor.name} 
          className={`w-full object-cover ${
            vendor.name === 'N-SpireDesign' 
              ? 'h-[150%] object-center' 
              : 'h-full object-[center_85%]'
          }`}
          style={vendor.name === 'N-SpireDesign' ? { 
            objectPosition: 'center -100px',
            marginTop: '-50px'
          } : {}}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Content */}
      <div 
        className="p-5 space-y-2 relative z-20 bg-white"
        style={{ backgroundColor: 'white', position: 'relative', zIndex: 30 }}
      >
        <h3 
          className="text-xl font-semibold text-navy flex justify-between items-center"
          style={{ color: '#062949', opacity: 1 }}
        >
          {vendor.name}
          <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform duration-300" />
        </h3>
        <p 
          className="text-sm text-gray-600 leading-relaxed"
          style={{ color: '#6B7280', opacity: 1 }}
        >
          {vendor.tagline}
        </p>
        
        {/* Hover indicator */}
        <div className="pt-1">
          <span className="text-xs text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to learn more →
          </span>
        </div>
      </div>
    </motion.button>
  );
} 