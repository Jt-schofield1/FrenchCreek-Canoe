'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  href?: string;
}

interface ImageGridProps {
  images: ImageItem[];
  columns?: 1 | 2 | 3 | 4;
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'auto';
  priority?: boolean;
}

export default function ImageGrid({ 
  images, 
  columns = 2, 
  aspectRatio = 'square',
  priority = false
}: ImageGridProps) {
  
  const getAspectRatio = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case 'landscape': return 'aspect-[4/3]';
      case 'portrait': return 'aspect-[3/4]';
      case 'auto': return '';
      default: return 'aspect-square';
    }
  };
  
  const getGridCols = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2';
    }
  };

  return (
    <div className={`grid ${getGridCols()} gap-8 md:gap-12`}>
      {images.map((image, index) => {
        if (image.href) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={image.href} className="group block">
                <div className={`${getAspectRatio()} relative overflow-hidden img-frame mb-4`}>
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      priority={index < 2 && priority}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-cream-50 flex items-center justify-center">
                      <p className="text-gray-400">{image.alt}</p>
                    </div>
                  )}
                </div>
                
                {(image.title || image.subtitle) && (
                  <div className="flex justify-between items-start">
                    <div>
                      {image.title && (
                        <h3 className="text-lg font-medium mb-1 group-hover:text-gray-700 transition-colors">
                          {image.title}
                        </h3>
                      )}
                      {image.subtitle && (
                        <p className="text-gray-600 text-sm">
                          {image.subtitle}
                        </p>
                      )}
                    </div>
                    
                    <span className="text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                )}
              </Link>
            </motion.div>
          );
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="block">
              <div className={`${getAspectRatio()} relative overflow-hidden img-frame mb-4`}>
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-in-out"
                    priority={index < 2 && priority}
                  />
                ) : (
                  <div className="absolute inset-0 bg-cream-50 flex items-center justify-center">
                    <p className="text-gray-400">{image.alt}</p>
                  </div>
                )}
              </div>
              
              {(image.title || image.subtitle) && (
                <div className="flex justify-between items-start">
                  <div>
                    {image.title && (
                      <h3 className="text-lg font-medium mb-1">
                        {image.title}
                      </h3>
                    )}
                    {image.subtitle && (
                      <p className="text-gray-600 text-sm">
                        {image.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
} 