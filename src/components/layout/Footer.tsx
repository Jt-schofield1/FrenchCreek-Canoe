'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title?: string;
  links: FooterLink[];
}

interface FooterProps {
  logoSrc: string;
  columns: FooterColumn[];
  copyright: string;
  credit: {
    text: string;
    href: string;
  }
}

export default function Footer({ logoSrc, columns, copyright, credit }: FooterProps) {
  return (
    <footer className="w-full py-24 px-4 md:px-8 mt-24 border-t border-navy/10 bg-gradient-to-b from-cream-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-creek to-green"></div>
      <div className="absolute top-16 right-8 w-32 h-32 rounded-full bg-creek opacity-5 md:block hidden"></div>
      <div className="absolute bottom-16 left-8 w-48 h-48 rounded-full bg-gold opacity-5 md:block hidden"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-2">
            <Link href="/site" className="inline-block mb-8">
              <Image src={logoSrc} alt="French Creek Trading Post" width={150} height={80} className="h-auto" />
            </Link>
            <p className="text-navy-muted max-w-sm leading-relaxed">
              Experience the beauty of French Creek while exploring our unique trading post and local vendors.
            </p>
            <div className="mt-8">
              <Link 
                href="/site/contact" 
                className="btn btn-cream text-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          {columns.map((column, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="md:col-span-1"
            >
              {column.title && (
                <h3 className="font-medium mb-6 tracking-wide text-sm text-navy">{column.title}</h3>
              )}
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-navy-muted hover:text-creek transition-colors duration-200 text-sm hover-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h3 className="font-medium mb-6 tracking-wide text-sm text-navy">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-navy-muted hover:text-creek transition-colors duration-200 text-sm flex items-center group">
                  <span className="hover-underline">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-muted hover:text-creek transition-colors duration-200 text-sm flex items-center group">
                  <span className="hover-underline">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:info@frenchcreekcanoe.com" className="text-navy-muted hover:text-creek transition-colors duration-200 text-sm flex items-center group">
                  <span className="hover-underline">info@frenchcreekcanoe.com</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="pt-8 border-t border-navy/10 flex flex-col md:flex-row justify-between items-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-navy-muted mb-4 md:mb-0 text-xs">
            {copyright}
          </p>
          <Link 
            href={credit.href}
            className="text-navy-muted hover:text-creek transition-colors duration-200 text-xs hover-underline"
          >
            {credit.text}
          </Link>
        </motion.div>
      </div>
    </footer>
  );
} 