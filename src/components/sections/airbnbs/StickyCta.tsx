'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
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
            className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-full shadow-lg px-4 py-2 flex gap-3 sm:gap-4 max-w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="https://www.airbnb.com/rooms/1006394972568557545?search_mode=regular_search&adults=1&check_in=2025-06-01&check_out=2025-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1747876300_P3ArBMsuE5Qr6Abd&previous_page_section_name=1000&federated_search_id=29bd7ada-85b3-4938-8c21-b85fbdff5077"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium bg-gold text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Book French Creek Retreat
            </a>
            <a 
              href="https://www.airbnb.com/rooms/1010362884074576037?source_impression_id=p3_1747877672_P36ExRQGOBrv9y3H"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium bg-gold text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Book Retreat II
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 