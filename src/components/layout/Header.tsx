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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-navy shadow-md backdrop-blur-sm bg-opacity-95' 
          : 'py-6 bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Link href="/site" className="z-10 focus:outline-none block border-0" style={{ border: 'none', outline: 'none' }}>
            <div className="relative">
              <Image 
                src={logoSrc} 
                alt="French Creek Trading Post" 
                width={180} 
                height={90} 
                priority
                className={`h-auto min-w-[100px] max-w-[180px] w-[180px] transition-all duration-300 border-0 outline-none ${scrolled ? 'scale-90' : 'scale-100'}`}
                style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              />
            </div>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex nav-container space-x-12 z-50">
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <div
                key={link.href}
                className="relative z-50"
              >
                <Link 
                  href={link.href}
                  className={getLinkStyles(isActive)}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-20 focus:outline-none p-3 bg-gold text-navy rounded-lg shadow-lg border-0"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <XMarkIcon className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Bars3Icon className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        
        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="absolute top-full left-0 right-0 md:hidden bg-white shadow-xl border-t border-gray-100 z-40"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="py-4 px-4">
                <nav className="flex flex-col space-y-1">
                  {links.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Link 
                          href={link.href}
                          className={`block px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-all duration-200 ${
                            isActive
                              ? 'bg-gold text-navy shadow-sm'
                              : 'text-navy hover:bg-cream-50 hover:text-gold'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
              {/* Bottom accent bar */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-gold via-orange to-creek"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 