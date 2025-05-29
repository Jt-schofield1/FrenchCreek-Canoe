'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  content: string | React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  backgroundColor?: 'white' | 'cream' | 'navy' | 'none';
  ctaLink?: string;
  ctaText?: string;
  align?: 'left' | 'center' | 'right';
}

export default function ContentSection({
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt = 'Section image',
  reverse = false,
  backgroundColor = 'white',
  ctaLink,
  ctaText,
  align = 'center'
}: ContentSectionProps) {
  
  const getBgColorClass = () => {
    switch(backgroundColor) {
      case 'cream':
        return 'bg-gradient-to-b from-cream-50 to-white';
      case 'navy':
        return 'bg-navy';
      case 'white':
        return 'bg-white';
      default:
        return '';
    }
  };
      
  const alignClass = align === 'center' 
    ? 'text-center' 
    : align === 'right'
      ? 'text-right'
      : 'text-left';
      
  const textColorClass = backgroundColor === 'navy' ? 'text-gold' : 'text-navy';
  const mutedTextColorClass = backgroundColor === 'navy' ? 'text-gold' : 'text-navy';
  
  return (
    <>
      {/* Custom style for this specific section to fix text selection */}
      {backgroundColor === 'navy' && (
        <style jsx global>{`
          .bg-navy ::selection {
            background-color: #F1A417 !important;
            color: #062949 !important;
          }
        `}</style>
      )}
      
      <section className={`py-16 px-4 md:px-8 ${getBgColorClass()} relative overflow-hidden`}>
        {/* Decorative elements */}
        {backgroundColor === 'cream' && (
          <>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/30 via-orange/30 to-green/30"></div>
            <div className="absolute bottom-12 right-8 w-32 h-32 rounded-full bg-creek opacity-5 hidden md:block"></div>
          </>
        )}
        
        {backgroundColor === 'navy' && (
          <>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-orange to-green opacity-30"></div>
            <div className="absolute top-24 right-12 w-64 h-64 rounded-full bg-creek opacity-10 hidden md:block"></div>
            <div className="absolute bottom-12 left-12 w-40 h-40 rounded-full bg-gold opacity-10 hidden md:block"></div>
          </>
        )}
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className={`grid grid-cols-1 ${imageSrc ? 'md:grid-cols-2' : ''} gap-16 items-center ${reverse ? 'md:flex md:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <motion.div
              className={`${alignClass} ${!imageSrc ? 'mx-auto max-w-2xl' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {subtitle && (
                <span className={`text-sm tracking-widest ${backgroundColor === 'navy' ? 'text-gold' : 'text-creek'} uppercase block mb-4`}>
                  {subtitle}
                </span>
              )}
              
              {title && (
                <h2 className={`text-3xl md:text-4xl font-medium mb-6 ${textColorClass}`}>
                  {title}
                </h2>
              )}
              
              {typeof content === 'string' ? (
                <p className={`text-lg !${backgroundColor === 'navy' ? 'text-gold' : 'text-navy'} font-medium mb-8 ${!imageSrc ? 'max-w-xl mx-auto' : ''}`}>
                  {content}
                </p>
              ) : (
                <div className={`mb-8 !${backgroundColor === 'navy' ? 'text-gold' : 'text-navy'} font-medium ${!imageSrc ? 'max-w-xl mx-auto' : ''}`}>{content}</div>
              )}
              
              {ctaLink && ctaText && (
                <Link 
                  href={ctaLink}
                  className="btn transform hover:scale-105 transition-all inline-block mx-auto w-auto px-8"
                  style={{ maxWidth: "200px" }}
                >
                  <span className="btn-text">{ctaText}</span>
                </Link>
              )}
            </motion.div>
            
            {/* Image */}
            {imageSrc && (
              <motion.div 
                className="aspect-[4/3] relative overflow-hidden img-frame"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
} 