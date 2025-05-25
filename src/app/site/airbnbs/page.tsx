'use client';

import PageHeader from '@/components/sections/common/PageHeader';
import ContentSection from '@/components/sections/common/ContentSection';
import ImageGrid from '@/components/sections/common/ImageGrid';
import { motion } from 'framer-motion';
import SimpleMap from '@/components/ui/SimpleMap';

export default function AirBnBsPage() {
  // Sample rental properties
  const rentals = [
    {
      src: '/images/airbnbs/cottage1.png',
      alt: 'Luxurious Retreat on French Creek',
      title: 'Luxurious Retreat on French Creek',
      subtitle: 'From $195 per night',
      href: 'https://www.airbnb.com/rooms/1006394972568557545?search_mode=regular_search&adults=1&check_in=2025-06-01&check_out=2025-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1747876300_P3ArBMsuE5Qr6Abd&previous_page_section_name=1000&federated_search_id=29bd7ada-85b3-4938-8c21-b85fbdff5077'
    },
    {
      src: '/images/airbnbs/cottage2.png',
      alt: 'French Creek Retreat II',
      title: 'French Creek Retreat II',
      subtitle: 'From $230 per night',
      href: 'https://www.airbnb.com/rooms/1010362884074576037?source_impression_id=p3_1747877672_P36ExRQGOBrv9y3H'
    },
    {
      src: '/images/airbnbs/mill-house.jpg',
      alt: 'Historic Mill House',
      title: 'Historic Mill House',
      subtitle: 'From $275 per night',
      href: 'https://airbnb.com'
    },
    {
      src: '/images/airbnbs/woodland-cabin.jpg',
      alt: 'Woodland Cabin',
      title: 'Woodland Cabin',
      subtitle: 'From $185 per night',
      href: 'https://airbnb.com'
    }
  ];

  return (
    <>
      <PageHeader 
        title="French Creek Retreat"
        subtitle="Experience the beauty of French Creek with our two luxurious retreats located directly on historic French Creek."
        tagline="Stay With Us"
      />

      <ContentSection
        title="Experience French Creek"
        subtitle="Natural beauty"
        content="Our selection of creek-side accommodations offers the perfect blend of comfort and nature. Wake up to the peaceful sounds of the creek, enjoy morning coffee on your private porch, and spend your days exploring the natural beauty surrounding you."
        backgroundColor="cream"
      />

      {/* Airbnb Description */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <span className="text-sm tracking-widest text-gray-500 uppercase block mb-4">From Our Airbnb Listing</span>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Luxurious retreat on French Creek</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">The space</h3>
                  <p className="text-gray-700">
                    Couples Retreat with hot tub and large shower. This property is directly on historic French Creek in Waterford, PA. Short drive to Erie, Edinboro University, Cambridge Springs, and Union City. RELAX❤️ Creek access for kayaking, canoeing, tubing and fishing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Guest access</h3>
                  <p className="text-gray-700">
                    Entire home and creek.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Other things to note</h3>
                  <p className="text-gray-700">
                    Patio with hot tub overlooks beautiful French Creek.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">Nearby attractions</h3>
                  <p className="text-gray-700">
                    Located directly on French Creek. Nearby attractions include Creekside Restaurant and Bar, Riverside Brewing, Mount Pleasant Skiing and Tubing, and Edinboro University.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="aspect-square relative overflow-hidden img-frame order-1 md:order-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-cream-50 flex items-center justify-center">
                <img src="/images/airbnbs/cottage1.png" alt="Luxurious Retreat on French Creek" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rentals */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-light">Featured Rentals</h2>
            <p className="text-gray-500 mt-4 md:mt-0 max-w-md">
              Each property offers a unique creek-side experience
            </p>
          </div>
          
          <ImageGrid 
            images={rentals} 
            columns={2}
            aspectRatio="landscape"
          />
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 px-4 md:px-8 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-light">Common Amenities</h2>
            <p className="text-gray-500 mt-4 md:mt-0 max-w-md">
              Features you can expect in our rentals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white"
            >
              <h3 className="text-xl font-medium mb-6 flex items-center">
                <span className="text-cream-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </span>
                Comfort
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Modern furnishings</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>High-quality linens</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Climate control</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Comfortable beds</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-white"
            >
              <h3 className="text-xl font-medium mb-6 flex items-center">
                <span className="text-cream-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </span>
                Convenience
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Fully equipped kitchen</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Washer and dryer</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Free Wi-Fi</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Parking space</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 bg-white"
            >
              <h3 className="text-xl font-medium mb-6 flex items-center">
                <span className="text-cream-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </span>
                Experience
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Creek access</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Outdoor seating</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Fire pit</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-cream-800">✓</span>
                  <span>Private porch</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm tracking-widest text-gray-500 uppercase block mb-4">Explore the area</span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Local Attractions</h2>
            <p className="text-lg text-gray-700 mb-8">
              During your stay, explore the many local attractions and activities. Enjoy hiking trails along the creek, visit nearby historical sites, or spend a day at the local wineries. Our rentals are ideally situated for both relaxation and adventure.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-3 text-cream-800">•</span>
                <span>Creekside Restaurant and Bar</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-cream-800">•</span>
                <span>Riverside Brewing</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-cream-800">•</span>
                <span>Mount Pleasant Skiing and Tubing</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-cream-800">•</span>
                <span>Edinboro University</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-cream-800">•</span>
                <span>Creek access for kayaking and fishing</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="aspect-square relative overflow-hidden img-frame"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-cream-50 flex items-center justify-center">
              <img src="/images/trading-post/local-attractions.jpeg" alt="Local Attractions" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-24 px-4 md:px-8 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-4">Our Location</h2>
              <p className="text-gray-700 max-w-2xl">
                Our French Creek Retreat properties are ideally located at 14015 US-19, Waterford, PA 16441. Easily accessible yet secluded enough to provide a peaceful getaway experience. The perfect base for exploring all that the region has to offer.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=14015+US-19+Waterford+PA+16441" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Get Directions
              </a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <SimpleMap 
              address="14015 US-19, Waterford, PA 16441"
              height="500px"
              zoom={14}
              title="French Creek Retreat Location"
            />
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-4 md:px-8 bg-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm tracking-widest text-gray-500 uppercase block mb-4">Book your getaway</span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Book Your Stay?</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              Choose between our two beautiful properties - French Creek Retreat and French Creek Retreat II. Both offer the same luxurious experience directly on historic French Creek. Our properties book quickly, especially during peak seasons, so we recommend reserving early.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://www.airbnb.com/rooms/1006394972568557545?search_mode=regular_search&adults=1&check_in=2025-06-01&check_out=2025-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1747876300_P3ArBMsuE5Qr6Abd&previous_page_section_name=1000&federated_search_id=29bd7ada-85b3-4938-8c21-b85fbdff5077" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View French Creek Retreat
              </a>
              <a 
                href="https://www.airbnb.com/rooms/1010362884074576037?source_impression_id=p3_1747877672_P36ExRQGOBrv9y3H" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View French Creek Retreat II
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 