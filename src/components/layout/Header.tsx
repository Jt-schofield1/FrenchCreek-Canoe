'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logoSrc: string;
  links: NavLink[];
}

export default function Header({ logoSrc, links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  // Function to get nav link styles
  const getLinkStyles = (isActive: boolean) => {
    let baseStyles = "text-sm tracking-wider transition-all duration-300 font-medium";
    
    // Keep colors consistent regardless of scrolling
    if (isActive) {
      return `${baseStyles} text-gold`;
    } else {
      return `${baseStyles} text-navy hover:text-gold hover-underline-gold`;
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-navy shadow-md backdrop-blur-sm bg-opacity-95' 
          : 'py-6 bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo - Visible on all devices */}
          <Link href="/site" className="relative z-[100]">
            <Image 
              src={logoSrc} 
              alt="French Creek Trading Post" 
              width={180} 
              height={90} 
              priority
              className={`h-auto w-[120px] sm:w-[150px] md:w-[180px] transition-all duration-300 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            />
          </Link>
          
          {/* ONLY Desktop Navigation (md and up) */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-12">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className={getLinkStyles(isActive)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* ONLY Mobile Menu Button - Explicitly sized and positioned */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden z-[100] p-2 rounded-lg bg-gold text-navy w-12 h-12 flex items-center justify-center"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Fullscreen overlay when open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white pt-24 z-[90] md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4">
              <ul className="flex flex-col space-y-4">
                {links.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <Link 
                        href={link.href}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg ${
                          isActive 
                            ? 'bg-gold text-navy' 
                            : 'text-navy hover:bg-cream-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            
            {/* Bottom gradient accent */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-orange to-creek"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 