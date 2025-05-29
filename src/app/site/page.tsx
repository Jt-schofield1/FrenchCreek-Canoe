'use client';

import PageHeader from '@/components/sections/common/PageHeader';
import ContentSection from '@/components/sections/common/ContentSection';
import ImageGrid from '@/components/sections/common/ImageGrid';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'French Creek Canoe offers a unique trading post experience with local vendors, creek history, and AirBnB options.',
// };

export default function HomePage() {
  // Add scroll state
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative">
        {/* Background image with parallax effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: 1.05 }}
          animate={{ scale: scrolled ? 1 : 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image 
            src="/images/trading-post/trading-post1.jpeg" 
            alt="French Creek" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/50 to-navy/30"></div>
        </motion.div>
        
        {/* Animated floating elements */}
        <motion.div 
          animate={floatingAnimation} 
          className="absolute top-1/4 right-[5%] w-32 h-32 rounded-full bg-gold opacity-10 blur-lg hidden md:block z-10"
        ></motion.div>
        <motion.div 
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }} 
          className="absolute bottom-[20%] left-[5%] w-40 h-40 rounded-full bg-creek opacity-10 blur-lg hidden md:block z-10"
        ></motion.div>
        <motion.div 
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 }
          }} 
          className="absolute top-[60%] left-[20%] w-24 h-24 rounded-full bg-green opacity-10 blur-lg hidden md:block z-10"
        ></motion.div>
        
        <div className="max-w-6xl mx-auto relative z-20 px-4 md:px-8 pt-28 md:pt-32">
          <div className="relative flex justify-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="glass-panel p-8 md:p-12 rounded-2xl border border-white/20 overflow-hidden relative mb-16 w-full md:w-[120%]"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-20 z-0 overflow-hidden gradient-border"></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.span 
                  className="inline-block text-sm tracking-widest text-gold uppercase mb-4"
                  variants={fadeIn}
                  transition={{ duration: 0.6 }}
                >
                  Welcome to
                </motion.span>
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 text-white"
                  variants={fadeIn}
                  transition={{ duration: 0.8 }}
                >
                  French Creek Canoe –<br className="hidden md:block" /> <span className="text-gold">A Trading Post</span>
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl max-w-3xl mx-auto text-white"
                  variants={fadeIn}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Experience the beauty and history of French Creek while exploring our unique trading post and local vendors.
                </motion.p>
                <motion.div
                  className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                  variants={fadeIn}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Link 
                    href="/site/contact" 
                    className="btn w-full sm:w-auto hover:scale-105 transition-all group relative px-6 sm:px-8"
                  >
                    <span className="btn-text">
                      Visit Us
                    </span>
                    <motion.span 
                      className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >→</motion.span>
                  </Link>
                  <Link 
                    href="/site/trading-post" 
                    className="btn w-full sm:w-auto hover:scale-105 transition-all group relative px-6 sm:px-8"
                  >
                    <span className="btn-text">
                      Learn More
                    </span>
                    <motion.span 
                      className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >→</motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-12 text-white" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="0" width="4" height="24" rx="2" fill="currentColor" />
            <path d="M12 36L5 29H19L12 36Z" fill="currentColor" />
          </svg>
        </motion.div>
      </section>

      {/* Featured Sections */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-cream-50 opacity-20 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-navy mb-4">Discover</h2>
            <p className="text-navy font-medium max-w-md">
              Explore our offerings from local artisans to unique trading post items
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/site/trading-post" className="group block transform transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden mb-6 img-frame">
                  <img src="/images/creek-history/settlers-bridge.jpg" alt="Historical Artifacts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between items-end group-hover:[&>div>h3]:!text-white group-hover:[&>div>p]:!text-white">
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-navy group-hover:text-white transition-colors duration-300">Trading Post</h3>
                    <p className="text-navy font-medium group-hover:text-white transition-colors duration-300">Explore our trading post with unique items and local products.</p>
                  </div>
                  <span className="text-creek group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/site/vendors" className="group block transform transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden mb-6 img-frame">
                  <img src="/images/vendors/french-creek-candles.jpg" alt="French Creek Candles" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between items-end group-hover:[&>div>h3]:!text-white group-hover:[&>div>p]:!text-white">
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-navy group-hover:text-white transition-colors duration-300">Local Vendors</h3>
                    <p className="text-navy font-medium group-hover:text-white transition-colors duration-300">Meet our local artisans and discover their handcrafted goods.</p>
                  </div>
                  <span className="text-creek group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navy Section - Custom Styled */}
      <section className="py-24 px-4 md:px-8 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-orange to-green opacity-30"></div>
        <div className="absolute top-24 right-12 w-64 h-64 rounded-full bg-creek opacity-10 hidden md:block"></div>
        <div className="absolute bottom-12 left-12 w-40 h-40 rounded-full bg-gold opacity-10 hidden md:block"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm tracking-widest text-gold uppercase block mb-4">
                Outdoor Adventure
              </span>
              
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gold">
                Experience French Creek
              </h2>
              
              <div className="mb-8 space-y-6">
                <p className="text-lg text-gold font-medium">
                  Located on the banks of historic French Creek, our trading post connects you to the natural beauty and rich heritage of the region.
                </p>
                <p className="text-lg text-gold font-medium">
                  From local artisan crafts to outdoor gear, we offer something unique for every visitor.
                </p>
              </div>
              
              <Link 
                href="/site/trading-post"
                className="btn bg-gold text-navy font-medium transform hover:scale-105 transition-all"
              >
                <span className="btn-text">Explore the Post</span>
              </Link>
            </motion.div>
            
            <motion.div 
              className="aspect-[4/3] relative overflow-hidden img-frame group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full h-full">
                <Image
                  src="/images/creek-history/creekpic.png"
                  alt="French Creek Trading Post"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-creek/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AirBnB Rentals */}
      <section className="py-12 pt-8 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-cream-50/30 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-gold via-orange to-green opacity-5"></div>
        
        {/* Parallax elements */}
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-creek opacity-5 blur-xl hidden md:block"
        ></motion.div>
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: [20, 0, 20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 bottom-20 w-80 h-80 rounded-full bg-gold opacity-5 blur-xl hidden md:block"
        ></motion.div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="flex flex-col items-center text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm tracking-widest text-creek uppercase block mb-4">Relaxation</span>
            <h2 className="text-3xl md:text-4xl font-medium text-navy mb-4">Creek Side Stays</h2>
            <p className="text-navy font-medium max-w-md">
              Immerse yourself in the beautiful nature of French Creek with our creek-side rentals
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div 
              className="md:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video relative overflow-hidden mb-6 img-frame group">
                <img src="/images/airbnbs/cottage1.png" alt="Creek Side Cottage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-creek/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
            </motion.div>
            <motion.div 
              className="flex flex-col md:flex-col-reverse md:self-start md:mt-6 md:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-cream-50/50 p-8 rounded-lg shadow-lg border border-cream-200">
                <h4 className="font-medium mb-6 text-navy text-center text-xl">Amenities</h4>
                <ul className="space-y-5 text-navy">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-lg text-green">✓</span>
                    <span className="font-medium">Creek access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-lg text-green">✓</span>
                    <span className="font-medium">Modern amenities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-lg text-green">✓</span>
                    <span className="font-medium">Close to attractions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-lg text-green">✓</span>
                    <span className="font-medium">Perfect for nature lovers</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link 
                    href="/site/airbnbs" 
                    className="btn transform hover:scale-105 transition-all"
                  >
                    <span className="btn-text">View Rentals</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter/Contact CTA */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/95 z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0">
          <Image 
            src="/images/trading-post/creek-merchandise.jpeg" 
            alt="Trading Post" 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Animated elements */}
        <motion.div 
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-gold opacity-5 blur-lg hidden md:block"
        ></motion.div>
        <motion.div 
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-creek opacity-5 blur-lg hidden md:block"
        ></motion.div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-xl bg-navy/60 backdrop-blur-md border border-gold/20 shadow-lg"
          >
            <span className="text-sm tracking-widest text-gold uppercase block mb-4 font-semibold">Visit Us</span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-cream-100">What are you waiting for?</h2>
            <p className="text-lg text-cream-200 font-medium mb-10 max-w-2xl mx-auto">
              Follow our journey and be the first to know about events, new vendors, and special offers at French Creek Trading Post.
            </p>
            <Link 
              href="/site/contact" 
              className="btn transform hover:scale-105 transition-all"
            >
              <span className="btn-text">Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 