'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function StickyVendorCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className="fixed bottom-4 inset-x-0 flex justify-center z-40 px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="rounded-full shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/site/contact"
              className="inline-block px-8 py-3 bg-gold text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 border-0 no-underline hover:no-underline"
              style={{ textDecoration: 'none' }}
            >
              Become a Vendor
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 