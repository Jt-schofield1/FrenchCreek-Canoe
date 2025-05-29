'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, MapPin, Users, Bed, Bath } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface PropertyData {
  slug: string;
  title: string;
  price: number;
  images: string[];
  airbnbUrl: string;
  description: {
    space: string;
    guestAccess: string;
    otherNotes: string;
  };
  specs: {
    guests: number;
    bedrooms: number;
    bathrooms: number;
  };
  amenities: string[];
}

const properties: Record<string, PropertyData> = {
  'french-creek-retreat': {
    slug: 'french-creek-retreat',
    title: 'French Creek Retreat',
    price: 195,
    images: ['/images/airbnbs/cottage1.png'],
    airbnbUrl: 'https://www.airbnb.com/rooms/1006394972568557545?search_mode=regular_search&adults=1&check_in=2025-06-01&check_out=2025-06-06&children=0&infants=0&pets=0&source_impression_id=p3_1747876300_P3ArBMsuE5Qr6Abd&previous_page_section_name=1000&federated_search_id=29bd7ada-85b3-4938-8c21-b85fbdff5077',
    description: {
      space: 'Couples Retreat with hot tub and large shower. This property is directly on historic French Creek in Waterford, PA. Short drive to Erie, Edinboro University, Cambridge Springs, and Union City. RELAX❤️ Creek access for kayaking, canoeing, tubing and fishing.',
      guestAccess: 'Entire home and creek.',
      otherNotes: 'Patio with hot tub overlooks beautiful French Creek.'
    },
    specs: {
      guests: 2,
      bedrooms: 1,
      bathrooms: 1
    },
    amenities: [
      'Hot tub with creek views',
      'Large shower',
      'Creek access',
      'Kayaking & canoeing',
      'Fishing access',
      'Private patio',
      'Full kitchen',
      'Parking'
    ]
  },
  'french-creek-retreat-ii': {
    slug: 'french-creek-retreat-ii',
    title: 'French Creek Retreat II',
    price: 230,
    images: ['/images/airbnbs/cottage2.png'],
    airbnbUrl: 'https://www.airbnb.com/rooms/1010362884074576037?source_impression_id=p3_1747877672_P36ExRQGOBrv9y3H',
    description: {
      space: 'Couples Retreat with hot tub and large shower. This property is directly on historic French Creek in Waterford, PA. Short drive to Erie, Edinboro University, Cambridge Springs, and Union City. RELAX❤️ Creek access for kayaking, canoeing, tubing and fishing.',
      guestAccess: 'Entire home and creek.',
      otherNotes: 'Patio with hot tub overlooks beautiful French Creek.'
    },
    specs: {
      guests: 2,
      bedrooms: 1,
      bathrooms: 1
    },
    amenities: [
      'Hot tub with creek views',
      'Large shower',
      'Creek access',
      'Kayaking & canoeing',
      'Fishing access',
      'Private patio',
      'Full kitchen',
      'Parking'
    ]
  }
};

export default function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const property = properties[slug];

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/site/airbnbs"
              className="inline-flex items-center text-creek hover:text-navy transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to all rentals
            </Link>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-light text-navy mb-4 leading-tight">
                  {property.title}
                </h1>
                <div className="flex items-center justify-center text-gray-600 mb-6">
                  <MapPin className="w-5 h-5 mr-2 text-creek" />
                  <span className="text-base font-medium">14015 US-19, Waterford, PA 16441</span>
                </div>
                
                {/* Property specs in a clean grid */}
                <div className="flex items-center justify-center gap-8 mb-8">
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-2 text-creek" />
                    <span className="font-medium">{property.specs.guests} guests</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center text-gray-700">
                    <Bed className="w-5 h-5 mr-2 text-creek" />
                    <span className="font-medium">{property.specs.bedrooms} bedroom</span>
                  </div>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <div className="flex items-center text-gray-700">
                    <Bath className="w-5 h-5 mr-2 text-creek" />
                    <span className="font-medium">{property.specs.bathrooms} bathroom</span>
                  </div>
                </div>
                
                {/* Price and booking section */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-3xl font-bold text-navy mb-4">
                    From ${property.price} <span className="text-lg font-normal text-gray-600">per night</span>
                  </p>
                  <a
                    href={property.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 text-lg shadow-lg"
                  >
                    Book on Airbnb
                    <ExternalLink className="w-5 h-5 ml-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 px-4 md:px-8">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video relative overflow-hidden rounded-xl shadow-lg"
          >
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 px-4 md:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-navy mb-4">The Space</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {property.description.space}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-navy mb-4">Guest Access</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {property.description.guestAccess}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-navy mb-4">Other Things to Note</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {property.description.otherNotes}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="sticky top-8"
              >
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-navy mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {property.amenities.map((amenity) => (
                      <li key={amenity} className="flex items-center text-gray-700">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-gray-300">
                    <a
                      href={property.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Book Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 