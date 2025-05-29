'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBagIcon, GiftIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function TradingPostPage() {
  // Sample placeholder images for the trading post
  const tradingPostImages = [
    {
      src: '/images/trading-post/local-handcrafts.jpeg',
      alt: 'Trading Post Products',
      title: 'Local Handcrafts',
      subtitle: 'Artisan creations from the region'
    },
    {
      src: '/images/trading-post/creek-merchandise.jpeg',
      alt: 'French Creek Merchandise',
      title: 'Creek Merchandise',
      subtitle: 'Clothing and accessories'
    },
    {
      src: '/images/trading-post/creekpic.png',
      alt: 'Historical Items',
      title: 'Historical French Creek',
      subtitle: 'French Creek in Waterford, PA'
    },
    {
      src: '/images/trading-post/seasonal-offerings.jpeg',
      alt: 'Seasonal Products',
      title: 'Seasonal Offerings',
      subtitle: 'Changes throughout the year'
    }
  ];

    const fadeInUp = {    initial: { opacity: 0, y: 20 },    animate: { opacity: 1, y: 0 },    transition: { duration: 0.6, delay: 0.3 }  };

  return (
    <main className="space-y-24">
      {/* A — Banner Section */}
      <div className="relative">
        <div className="bg-gradient-to-r from-navy via-navy-muted to-navy py-2">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-white/70">
            Shop Local
          </p>
        </div>
        
        <div className="container mx-auto px-6 pt-26 pb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2
            }}
            className="mt-8 font-display font-extrabold text-navy"
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
          >
            Trading Post
          </motion.h1>
        </div>
      </div>

      {/* B — USP Icon Tiles */}
      <section className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-medium text-center mb-12 text-navy"
          {...fadeInUp}
        >
          What makes our <span className="text-gold">Trading Post</span> special?
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <motion.div            className="h-full"            initial={{ opacity: 0, y: 20 }}            animate={{ opacity: 1, y: 0 }}            transition={{ duration: 0.5, delay: 0.5 }}          >
            <div 
              className="h-full flex flex-col items-center text-center p-6 bg-cream-50 rounded-xl shadow-sm border border-cream-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              onMouseEnter={(e) => {
                // Set background color
                e.currentTarget.style.backgroundColor = '#E08000'; // orange
                e.currentTarget.style.borderColor = '#E08000';
                
                // Find all text and icon elements
                const allTextElements = e.currentTarget.querySelectorAll('h3, p');
                allTextElements.forEach(el => {
                  if (el instanceof HTMLElement) {
                    el.style.setProperty('color', '#FFFFFF', 'important');
                  }
                });
                
                // Target the icon specifically
                const iconSvg = e.currentTarget.querySelector('svg');
                if (iconSvg instanceof SVGElement) {
                  iconSvg.style.setProperty('color', '#FFFFFF', 'important');
                }
                
                // Also target the icon container
                const iconContainer = e.currentTarget.querySelector('.w-12');
                if (iconContainer instanceof HTMLElement) {
                  iconContainer.style.setProperty('color', '#FFFFFF', 'important');
                }
              }}
              onMouseLeave={(e) => {
                // Reset background
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.borderColor = '';
                
                // Reset all text elements
                const allTextElements = e.currentTarget.querySelectorAll('h3, p');
                allTextElements.forEach(el => {
                  if (el instanceof HTMLElement) {
                    el.style.removeProperty('color');
                  }
                });
                
                // Reset the icon
                const iconSvg = e.currentTarget.querySelector('svg');
                if (iconSvg instanceof SVGElement) {
                  iconSvg.style.removeProperty('color');
                }
                
                // Reset icon container
                const iconContainer = e.currentTarget.querySelector('.w-12');
                if (iconContainer instanceof HTMLElement) {
                  iconContainer.style.removeProperty('color');
                }
              }}
            >
              <motion.div
                className="w-12 h-12 text-gold mb-4 transition-colors duration-300"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <ShoppingBagIcon className="w-full h-full" />
              </motion.div>
              <h3 className="text-xl font-medium mb-3 text-navy transition-colors duration-300">Local Crafts</h3>
              <p className="text-navy-muted transition-colors duration-300">Hand-crafted items that celebrate the rich history and culture of French Creek.</p>
            </div>
          </motion.div>
          
                    <motion.div            className="h-full"            initial={{ opacity: 0, y: 20 }}            animate={{ opacity: 1, y: 0 }}            transition={{ duration: 0.5, delay: 0.6 }}          >
            <div 
              className="h-full flex flex-col items-center text-center p-6 bg-cream-50 rounded-xl shadow-sm border border-cream-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              onMouseEnter={(e) => {
                // Set background color
                e.currentTarget.style.backgroundColor = '#0E7118'; // green
                e.currentTarget.style.borderColor = '#0E7118';
                
                // Find all text and icon elements
                const allTextElements = e.currentTarget.querySelectorAll('h3, p');
                allTextElements.forEach(el => {
                  if (el instanceof HTMLElement) {
                    el.style.setProperty('color', '#FFFFFF', 'important');
                  }
                });
                
                // Target the icon specifically
                const iconSvg = e.currentTarget.querySelector('svg');
                if (iconSvg instanceof SVGElement) {
                  iconSvg.style.setProperty('color', '#FFFFFF', 'important');
                }
                
                // Also target the icon container
                const iconContainer = e.currentTarget.querySelector('.w-12');
                if (iconContainer instanceof HTMLElement) {
                  iconContainer.style.setProperty('color', '#FFFFFF', 'important');
                }
              }}
              onMouseLeave={(e) => {
                // Reset background
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.borderColor = '';
                
                // Reset all text elements
                const allTextElements = e.currentTarget.querySelectorAll('h3, p');
                allTextElements.forEach(el => {
                  if (el instanceof HTMLElement) {
                    el.style.removeProperty('color');
                  }
                });
                
                // Reset the icon
                const iconSvg = e.currentTarget.querySelector('svg');
                if (iconSvg instanceof SVGElement) {
                  iconSvg.style.removeProperty('color');
                }
                
                // Reset icon container
                const iconContainer = e.currentTarget.querySelector('.w-12');
                if (iconContainer instanceof HTMLElement) {
                  iconContainer.style.removeProperty('color');
                }
              }}
            >
              <motion.div
                className="w-12 h-12 text-creek mb-4 transition-colors duration-300"
                whileHover={{ 
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.5 }
                }}
              >
                <HeartIcon className="w-full h-full" />
              </motion.div>
              <h3 className="text-xl font-medium mb-3 text-navy transition-colors duration-300">Creek Access</h3>
              <p className="text-navy-muted transition-colors duration-300">Enjoy the natural beauty of French Creek with easy access from our location.</p>
            </div>
          </motion.div>
          
                    <motion.div            className="h-full"            initial={{ opacity: 0, y: 20 }}            animate={{ opacity: 1, y: 0 }}            transition={{ duration: 0.5, delay: 0.7 }}          >
            <div 
              className="h-full flex flex-col items-center text-center p-6 bg-cream-50 rounded-xl shadow-sm border border-cream-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              onMouseEnter={(e) => {
                // Set background color
                e.currentTarget.style.backgroundColor = '#0F65C8'; // creek blue
                e.currentTarget.style.borderColor = '#0F65C8';
                
                // Find all text and icon elements
                const allTextElements = e.currentTarget.querySelectorAll('h3, p');
                allTextElements.forEach(el => {
                  if (el instanceof HTMLElement) {
                    el.style.setProperty('color', '#FFFFFF', 'important');
                  }
                });
                
                // Target the icon specifically
                const iconSvg = e.currentTarget.querySelector('svg');
                if (iconSvg instanceof SVGElement) {
                  iconSvg.style.setProperty('color', '#FFFFFF', 'important');
                }
                
                // Also target the icon container
                const iconContainer = e.currentTarget.querySelector('.w-12');
                if (iconContainer instanceof HTMLElement) {
                  iconContainer.style.setProperty('color', '#FFFFFF', 'important');
                }
              }}
              onMouseLeave={(e) => {
                // Reset background
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.borderColor = '';
                
                // Reset all text elements
                const allTextElements = e.currentTarget.querySelectorAll('h3, p');
                allTextElements.forEach(el => {
                  if (el instanceof HTMLElement) {
                    el.style.removeProperty('color');
                  }
                });
                
                // Reset the icon
                const iconSvg = e.currentTarget.querySelector('svg');
                if (iconSvg instanceof SVGElement) {
                  iconSvg.style.removeProperty('color');
                }
                
                // Reset icon container
                const iconContainer = e.currentTarget.querySelector('.w-12');
                if (iconContainer instanceof HTMLElement) {
                  iconContainer.style.removeProperty('color');
                }
              }}
            >
              <motion.div
                className="w-12 h-12 text-green mb-4 transition-colors duration-300"
                whileHover={{ 
                  y: [0, -5, 0],
                  transition: { duration: 0.5, repeat: 0 }
                }}
              >
                <GiftIcon className="w-full h-full" />
              </motion.div>
              <h3 className="text-xl font-medium mb-3 text-navy transition-colors duration-300">Unique Experience</h3>
              <p className="text-navy-muted transition-colors duration-300">Two beautiful AirBnB rentals perfect for your next adventure!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* C — Story Split Section */}
      <section className="container mx-auto px-6 py-12 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
            {...fadeInUp}
          >
            <Image
              src="/images/trading-post/trading-post1.jpeg"
              alt="French Creek Trading Post"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-navy">
              A Trading Post with <span className="text-gold">History</span>
            </h2>
            
            <ul className="space-y-4 list-disc list-inside text-navy-muted">
              <li>Variety of local and handcrafted items</li>
              <li>Celebration of French Creek's rich history and culture</li>
              <li>Charming Airbnb rentals ideal for the perfect escape</li>
            </ul>
            
            <Link 
              href="/site/airbnbs"
              className="btn inline-block mt-8 hover:scale-105 transition-all"
            >
              <span className="btn-text">View Rentals</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* D — Product Carousel/Grid */}
      <section className="container mx-auto px-6 pb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-medium text-center mb-12 text-navy"
          {...fadeInUp}
        >
          <span className="text-gold">Featured</span> Items
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tradingPostImages.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/site/contact"
            className="btn transform hover:scale-105 transition-all inline-block mx-auto w-auto px-8"
            style={{ maxWidth: "200px" }}
          >
            <span className="btn-text">Contact Us</span>
          </Link>
        </div>
      </section>
    </main>
  );
} 