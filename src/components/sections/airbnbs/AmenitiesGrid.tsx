'use client';

import { motion } from 'framer-motion';

const amenityGroups = [
  {
    title: 'Comfort',
    items: ['Modern furnishings', 'High-quality linens', 'Climate control', 'Comfortable beds'],
  },
  {
    title: 'Convenience',
    items: ['Fully equipped kitchen', 'Washer & dryer', 'Parking space'],
  },
  {
    title: 'Experience',
    items: ['Hot tub','Creek access', 'Outdoor seating', 'Fire pit', 'Private porch'],
  },
];

export default function AmenitiesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-light text-navy mb-2">
            Included With Every Stay
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Everything you can expect in every stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {amenityGroups.map((group, index) => (
            <motion.div 
              key={group.title}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-navy flex items-center">
                <span className="w-8 h-0.5 bg-gold mr-3"></span>
                {group.title}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {group.items.map((item) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-gold mr-3 font-semibold">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 