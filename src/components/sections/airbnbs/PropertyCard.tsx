'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyCardProps {
  slug: string;
  title: string;
  price: number;
  images: string[];
  airbnbUrl?: string;
}

export default function PropertyCard({
  slug,
  title,
  price,
  images,
  airbnbUrl
}: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <motion.article 
      className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
        {/* Gallery Image */}
        <img 
          src={images[currentImageIndex]} 
          alt={`${title} - Image ${currentImageIndex + 1}`} 
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Gallery Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                prevImage();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft className="w-4 h-4 text-navy" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                nextImage();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight className="w-4 h-4 text-navy" />
            </button>
          </>
        )}

        {/* Gallery Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  goToImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-3">
        <h2 className="text-xl font-semibold text-navy group-hover:text-creek transition-colors duration-300 flex justify-between items-center">
          {title}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-creek" />
        </h2>
        
        <p className="text-sm text-gray-500 font-medium">From ${price} per night</p>
        
        <div className="flex gap-3 pt-2">
          <Link
            href={`/site/airbnbs/${slug}`}
            className="inline-block text-gold font-medium hover:underline hover:text-creek transition-colors duration-300"
          >
            See details
          </Link>
          
          {airbnbUrl && (
            <a
              href={airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 bg-gold text-black font-medium rounded hover:bg-black hover:text-white transition-all duration-300"
            >
              Book now
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
} 