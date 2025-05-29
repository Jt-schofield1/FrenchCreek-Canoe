'use client';

import { motion } from 'framer-motion';
import SimpleMap from '@/components/ui/SimpleMap';
import HeroStay from '@/components/sections/airbnbs/HeroStay';
import PropertyCard from '@/components/sections/airbnbs/PropertyCard';
import AmenitiesGrid from '@/components/sections/airbnbs/AmenitiesGrid';
import LocalAttractions from '@/components/sections/airbnbs/LocalAttractions';
import StickyCta from '@/components/sections/airbnbs/StickyCta';

export default function AirBnBsPage() {
  // Create gallery images array in order
  const galleryImages = [
    '/images/gallery/Screenshot 2025-05-19 211428.png',
    '/images/gallery/Screenshot 2025-05-19 211449.png',
    '/images/gallery/Screenshot 2025-05-19 211457.png',
    '/images/gallery/Screenshot 2025-05-19 211504.png',
    '/images/gallery/Screenshot 2025-05-19 211513.png',
    '/images/gallery/Screenshot 2025-05-19 211521.png',
    '/images/gallery/Screenshot 2025-05-19 211530.png',
    '/images/gallery/Screenshot 2025-05-19 211539.png',
    '/images/gallery/Screenshot 2025-05-19 211547.png',
    '/images/gallery/Screenshot 2025-05-19 211601.png',
    '/images/gallery/Screenshot 2025-05-19 211617.png',
    '/images/gallery/Screenshot 2025-05-19 211627.png',
    '/images/gallery/Screenshot 2025-05-19 211637.png'
  ];

  const properties = [
    {
      slug: 'french-creek-retreat',
      title: 'French Creek Retreat',
      price: 149,
      images: ['/images/gallery/woodland-cabin.jpg', ...galleryImages],
      airbnbUrl: 'https://www.airbnb.com/rooms/1006394972568557545?search_mode=regular_search&adults=1&check_in=2025-06-01&check_out=2025-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1747876300_P3ArBMsuE5Qr6Abd&previous_page_section_name=1000&federated_search_id=29bd7ada-85b3-4938-8c21-b85fbdff5077'
    },
    {
      slug: 'french-creek-retreat-ii',
      title: 'French Creek Retreat II',
      price: 149,
      images: ['/images/gallery/mill-house.jpg', ...galleryImages],
      airbnbUrl: 'https://www.airbnb.com/rooms/1010362884074576037?source_impression_id=p3_1747877672_P36ExRQGOBrv9y3H'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroStay />

      {/* Featured Rentals */}
      <section id="featured" className="scroll-mt-20 py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-light text-navy mb-2">
              Featured Rentals
            </h2>
            <p className="text-gray-500 max-w-prose mx-auto">
              Each property offers a unique creek-side experience
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {properties.map((property, index) => (
              <motion.div
                key={property.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <PropertyCard {...property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Amenities */}
      <AmenitiesGrid />

      {/* Local Attractions */}
      <LocalAttractions />
        
      {/* Location Map */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-light text-navy mb-4">
                Our Location
              </h2>
              <p className="text-gray-700 mb-6 max-w-prose">
                Perfectly situated on historic French Creek in Waterford, PA. 
                Easy access to Erie, Edinboro University, and Cambridge Springs, 
                yet secluded enough for a peaceful getaway.
              </p>
              <div className="space-y-4 text-sm text-gray-600 mb-8">
                <p><strong>Address:</strong> 14015 US-19, Waterford, PA 16441</p>
                <p><strong>Nearby:</strong> Erie (20 min) • Edinboro University (8 min)</p>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=14015+US-19+Waterford+PA+16441" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gold text-black font-medium rounded-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                Get Directions
              </a>
            </motion.div>

            <motion.div 
              className="order-first md:order-last"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="overflow-hidden rounded-xl shadow-lg">
                <SimpleMap 
                  address="14015 US-19, Waterford, PA 16441"
                  height="400px"
                  zoom={14}
                  title="French Creek Retreat Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/airbnbs/creekpic.jpg" 
            alt="French Creek" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Stronger overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/80"></div>
        
        <div className="relative z-10 container max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/30 shadow-2xl"
          >
            <span 
              className="text-sm tracking-[.3em] text-gold uppercase block mb-4 font-bold"
              style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
            >
              Ready to book?
            </span>
            <h2 
              className="text-3xl md:text-4xl font-medium mb-6 text-white"
              style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}
            >
              Your Creek-side Getaway Awaits
            </h2>
            <p 
              className="text-lg text-white mb-10 max-w-prose mx-auto font-medium"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}
            >
              Both properties book quickly, especially during peak seasons. 
              Reserve your perfect French Creek retreat today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a 
                href={properties[0].airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 md:px-8 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <span className="sm:hidden">Book Retreat I</span>
                <span className="hidden sm:inline">Book French Creek Retreat</span>
              </a>
              <a 
                href={properties[1].airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 md:px-8 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <span className="sm:hidden">Book Retreat II</span>
                <span className="hidden sm:inline">Book French Creek Retreat II</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA */}
      <StickyCta />
    </>
  );
} 