'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EventsHero from '@/components/sections/events/EventsHero';
import EventCard from '@/components/sections/events/EventCard';
import EventModal from '@/components/sections/events/EventModal';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  price?: string;
  category: 'workshop' | 'social' | 'seasonal' | 'special';
  featured?: boolean;
}

// Easy to update events array - owner can modify this section
const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Grand Opening Celebration',
    date: '2025-06-07',
    time: '9 AM - 8 PM',
    location: 'French Creek Trading Post',
    description: 'Join us for the official grand opening of French Creek Trading Post! Celebrate with special vendor demonstrations, live music, food, and exclusive opening day deals. Meet our local artisans and vendors while exploring everything our trading post has to offer.',
    image: '/images/events/opening.jpg',
    price: 'Free',
    category: 'special',
  },
  {
    id: '2',
    title: 'Art Workshop with N-SpireDesign',
    date: 'Thursdays and Fridays',
    time: 'Afternoons and Evenings',
    location: 'N-SpireDesign Studio',
    description: 'Classes will be either ticketed classes (limited availability) and open house style for make and takes.',
    image: '/images/events/nspire.png',
    price: '$10-40',
    category: 'workshop',
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | Event['category']>('all');

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const filteredEvents = filter === 'all' 
    ? UPCOMING_EVENTS 
    : UPCOMING_EVENTS.filter(event => event.category === filter);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <EventsHero />

      {/* Upcoming Events */}
      <section id="events" className="py-24 container max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mark your calendar for these exciting upcoming experiences!
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { key: 'all', label: 'All Events', emoji: '🎉' },
            { key: 'workshop', label: 'Workshops', emoji: '🎨' },
            { key: 'social', label: 'Social', emoji: '🤝' },
            { key: 'seasonal', label: 'Seasonal', emoji: '🍂' },
            { key: 'special', label: 'Special', emoji: '✨' },
          ].map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === filterOption.key
                  ? 'bg-gold text-navy shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gold/10 border border-gray-200'
              }`}
            >
              {filterOption.emoji} {filterOption.label}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              onOpen={() => openModal(event)}
              index={index}
            />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-lg">No events found for this category.</p>
            <button 
              onClick={() => setFilter('all')}
              className="mt-4 text-gold hover:text-creek transition-colors font-medium"
            >
              View all events →
            </button>
          </motion.div>
        )}
      </section>

      {/* What to Look Out For Section */}
      <section className="py-20 bg-gradient-to-br from-creek/5 to-gold/10">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              What to Look Out For
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Keep an eye out for these exciting experiences throughout the year!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-navy mb-3">Live Music</h3>
              <p className="text-gray-600">
                Enjoy acoustic performances and local musicians creating the perfect atmosphere for your visit to the trading post.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🍂</div>
              <h3 className="text-xl font-bold text-navy mb-3">Seasonal Events</h3>
              <p className="text-gray-600">
                Celebrate the changing seasons with special themed events, holiday celebrations, and seasonal vendor showcases.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-navy mb-3">Parties</h3>
              <p className="text-gray-600">
                Join us for special celebrations, community gatherings, and milestone events that bring everyone together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
} 