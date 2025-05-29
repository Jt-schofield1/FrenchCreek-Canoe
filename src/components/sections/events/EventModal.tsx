'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, DollarSign, Users, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
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

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  const router = useRouter();
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const formatDate = (dateString: string) => {
    // If it's not a valid date format, return the string as-is
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const capitalizeCategory = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const handleRegisterClick = () => {
    // Check if this is the N-SpireDesign event
    if (event?.title.includes('N-SpireDesign') || event?.title.includes('Art Workshop')) {
      setShowPhonePopup(true);
    } else {
      router.push('/site/contact');
    }
  };

  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Event Image */}
            <div className="relative h-80 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className={`w-full h-full object-cover ${
                  event.image.includes('nspire') 
                    ? 'object-center' 
                    : event.image.includes('opening')
                    ? 'object-bottom'
                    : 'object-center'
                }`}
                style={
                  event.image.includes('nspire') 
                    ? { transform: 'translateY(20px) scale(0.8)' }
                    : event.image.includes('opening')
                    ? { transform: 'translateY(-10px) scale(0.85)' }
                    : {}
                }
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors[event.category]}`}>
                  {categoryEmojis[event.category]} {capitalizeCategory(event.category)}
                </span>
              </div>

              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-6 left-6 mt-12">
                  <span className="bg-gold text-navy px-4 py-2 rounded-full text-sm font-bold">
                    ⭐ Featured Event
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <motion.h1 
                className="text-3xl sm:text-4xl font-bold text-navy mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {event.title}
              </motion.h1>

              {/* Event Details Grid */}
              <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold text-navy">{formatDate(event.date)}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-semibold text-navy">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-navy">{event.location}</p>
                  </div>
                </div>
                
                {event.price && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <DollarSign className="w-6 h-6 text-gold" />
                    <div>
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="font-semibold text-navy">{event.price}</p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-xl font-bold text-navy mb-4">About This Event</h2>
                <div className="prose prose-gray max-w-none">
                  {event.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button 
                  onClick={handleRegisterClick}
                  className="px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: '#F1A417', color: '#062949', border: 'none' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F1A417';
                    e.currentTarget.style.color = '#062949';
                  }}
                >
                  <Users className="w-5 h-5" />
                  Register / Get Info
                </button>
                <button 
                  onClick={onClose}
                  className="px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300"
                  style={{ backgroundColor: '#F1A417', color: '#062949', border: 'none' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#000000';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F1A417';
                    e.currentTarget.style.color = '#062949';
                  }}
                >
                  Back to Events
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Phone Number Popup */}
          <AnimatePresence>
            {showPhonePopup && (
              <motion.div
                className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Backdrop */}
                <motion.div
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowPhonePopup(false)}
                />

                {/* Popup Content */}
                <motion.div
                  className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center border-0"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setShowPhonePopup(false)}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Phone Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">Contact for Registration</h3>
                    <p className="text-gray-600">Call us for more information and to register</p>
                  </div>

                  {/* Phone Number */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-navy block">
                      814-332-0392
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <button 
                      onClick={() => setShowPhonePopup(false)}
                      className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 