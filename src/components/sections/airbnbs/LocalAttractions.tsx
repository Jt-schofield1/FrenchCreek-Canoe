'use client';

import { motion } from 'framer-motion';

const attractions = [
  {
    title: 'Creekside Restaurant and Bar',
    description: 'Local dining with creek views',
    category: 'Dining',
    distance: '2 miles'
  },
  {
    title: 'Riverside Brewing',
    description: 'Craft beer and local flavors',
    category: 'Entertainment',
    distance: '3 miles'
  },
  {
    title: 'Mount Pleasant Skiing and Tubing',
    description: 'Winter sports and recreation',
    category: 'Recreation',
    distance: '15 miles'
  },
  {
    title: 'Edinboro University',
    description: 'Historic university campus',
    category: 'Education',
    distance: '8 miles'
  },
  {
    title: 'French Creek State Park',
    description: 'Hiking trails and nature',
    category: 'Nature',
    distance: '5 miles'
  }
];

export default function LocalAttractions() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-light text-navy mb-2">
            Local Attractions
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Discover what makes this area special
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto pb-4">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 min-w-max md:min-w-0">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                className="flex-shrink-0 w-72 md:w-auto bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">
                    {attraction.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-navy mb-2 leading-tight">
                  {attraction.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">
                  {attraction.description}
                </p>
                
                <p className="text-creek text-sm font-medium">
                  {attraction.distance}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 