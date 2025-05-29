'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, DollarSign, ArrowRight } from 'lucide-react';

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

interface EventCardProps {
  event: Event;
  onOpen: () => void;
  index: number;
  featured?: boolean;
}

const categoryColors = {
  workshop: 'bg-blue-100 text-blue-800',
  social: 'bg-green-100 text-green-800',
  seasonal: 'bg-orange-100 text-orange-800',
  special: 'bg-purple-100 text-purple-800',
};

const categoryEmojis = {
  workshop: '🎨',
  social: '🤝',
  seasonal: '🍂',
  special: '✨',
};

export default function EventCard({ event, onOpen, index, featured = false }: EventCardProps) {
  const formatDate = (dateString: string) => {
    // If it's not a valid date format, return the string as-is
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const capitalizeCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <motion.button
      onClick={onOpen}
      className={`group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 text-left bg-white hover:-translate-y-1 hover:rotate-[0.35deg] ${
        featured ? 'ring-2 ring-gold/20' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category and Date Header */}
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
            {categoryEmojis[event.category]} {capitalizeCategory(event.category)}
          </span>
          {featured && (
            <span className="bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold">
              ⭐ Featured
            </span>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg px-3 py-2 inline-block">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-navy" />
            <span className="text-sm font-semibold text-navy">
              {formatDate(event.date)}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-navy">
          {event.title}
        </h3>
        
        {/* Event Details */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span>{event.location}</span>
          </div>
          {event.price && (
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gold" />
              <span className="font-medium text-navy">{event.price}</span>
            </div>
          )}
        </div>
        
        {/* Description Preview */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {event.description}
        </p>
        
        {/* Call to Action */}
        <div className="pt-2 flex justify-between items-center">
          <span className="text-xs text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click for details →
          </span>
          <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.button>
  );
} 