'use client';

import { ReactNode, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/ui/SmoothScroll';

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SmoothScroll offset={80}>
      <div className="flex flex-col min-h-screen">
        <CustomCursor />
        <Header 
          logoSrc="/Logo/main-logo.jpeg"
          links={[
            { label: 'Home', href: '/site' },
            { label: 'Trading Post', href: '/site/trading-post' },
            { label: 'Vendors', href: '/site/vendors' },
            { label: 'AirBnbs', href: '/site/airbnbs' },
            { label: 'Contact', href: '/site/contact' },
          ]}
        />
        <AnimatePresence mode="wait">
          <motion.main 
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer 
          logoSrc="/Logo/main-logo.jpeg"
          columns={[
            {
              title: 'Explore',
              links: [
                { label: 'Home', href: '/site' },
                { label: 'Trading Post', href: '/site/trading-post' },
                { label: 'Vendors', href: '/site/vendors' },
                { label: 'AirBnbs', href: '/site/airbnbs' },
                { label: 'Contact', href: '/site/contact' },
              ]
            }
          ]}
          copyright="© 2025 French Creek Trading Post. All rights reserved."
          credit={{
            text: "Built by James Schofield",
            href: "#"
          }}
        />
      </div>
    </SmoothScroll>
  );
} 