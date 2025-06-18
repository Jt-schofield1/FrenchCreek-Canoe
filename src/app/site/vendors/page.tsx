'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroMakers from '@/components/sections/vendors/HeroMakers';
import VendorModal from '@/components/sections/vendors/VendorModal';
import CalloutJoin from '@/components/sections/vendors/CalloutJoin';
import QuoteBlock from '@/components/sections/vendors/QuoteBlock';
import StickyVendorCta from '@/components/sections/vendors/StickyVendorCta';

interface Vendor {
  name: string;
  img: string;
  tagline: string;
  description: string;
}

interface CabinArea {
  id: string;
  name: string;
  description: string;
  vendors: Vendor[];
  color: string;
  bgGradient: string;
  modelPath: string;
}

const CABIN_AREAS: CabinArea[] = [
  {
    id: 'trading-post',
    name: 'The Trading Post',
    description: 'Traditional crafts and artisanal goods from local makers',
    color: '#8B4513',
    bgGradient: 'from-amber-50 to-orange-100',
    modelPath: '/images/3-d/TradingPost.png',
    vendors: [
      {
        name: "French Creek Candles",
        img: "/images/vendors/candles.png",
        tagline: "Handmade candles & cozy home essentials",
        description: "French Creek Candles and More\n\nFind us on Facebook!\n\nJoan Dimon\n814-572-2877",
      },
      {
        name: "Custom Crafts by Kerstetter",
        img: "/images/vendors/kerstetter.png",
        tagline: "Beautiful, unique custom gifts for everyone",
        description: "We are a small family owned business who works with all mediums of art. We strive to make beautiful, unique custom gifts at a reasonable price because we all deserve nice things at a nice price!\n\nThough we do make some traditional items most have a unique twist and are not things you will find around, but if you can't find what you want let us know, we LOVE a challenge and can not wait to turn your vision into your masterpiece!\n\nA little about me. I am a self-taught artist. I enjoy all types of arts and crafts from painting to creating my own light-weight one of a kind earrings and everything in-between!\n\nI'm a wife of many, many years to my best friend, I'm a birth mom to three amazing kids, an adopted mom to a very special kiddo 'Ohmar' to a couple precious grandbabies and blessed by so many amazing people in my life. I am so thankful to be able to do what I love and share my passion with you all!\n\nYou can find Custom Crafts By Kerstetter on Facebook and Tik Tok but we are usually too busy working and creating so our social and web pages tend to get neglected and are usually a work in progress but we are good at responding!\n\nFor questions concerns or orders:\nText or call (814)529-2469\nEmail customcraftsbykerstetter6@gmail.com",
      },
      {
        name: "Ron's Honey",
        img: "/images/vendors/honey.png",
        tagline: "Pure local honey since 1975",
        description: "Started with bees in 1975. 35 hives with 30,000 bees per hive, selling local honey including summer clover honey and fall golden rod. We also purchase raw US honey and make buckwheat and blueberry varieties.\n\nWe sell about 3,700 pounds per year.\n\nBorn and raised in Waterford, graduated from Leboeuf in 1970.\n\nProud Veteran.",
      },
      {
        name: "Finnegan 'n Friends",
        img: "/images/vendors/finnegan.png",
        tagline: "Gourmet Jams and Jellies",
        description: "Gourmet Jams and Jellies!\n\nP.O. Box 234 Springboro, PA 16345\nFinnegansKitchen@gmail.com",
      },
      {
        name: "Waldron's Cauldrons",
        img: "/images/vendors/waldrons.png",
        tagline: "Natural simmer pot blends with botanical magic",
        description: "At Waldron's Cauldrons, we handcraft natural simmer pot blends that fill your home with comforting, seasonal aromas—no oils, no synthetics, just pure botanical magic. Each blend is carefully curated with dried fruits, herbs, and spices to create long-lasting scents that warm the senses and the soul. Small-batch made in Mill Village Pennsylvania and always crafted with intention 🌿💚",
      },
    ]
  },
  {
    id: 'spirit-cabin',
    name: 'The Spirit Cabin',
    description: 'Premium wines and craft spirits for refined tastes',
    color: '#722F37',
    bgGradient: 'from-purple-50 to-red-100',
    modelPath: '/images/3-d/Spirit Cabin.png',
    vendors: [
      {
        name: "Cellar 54",
        img: "/images/vendors/cellar54.png",
        tagline: "Family-owned Lake Erie winery since 1954",
        description: "Cellar '54\n14015 US-19\nWaterford, PA 16441\n(814) 572-9280\n\nHours:\nJune, July, August\nOpen 7 days a week\n9am to 8pm\n\nCellar '54 is a family-owned winery nestled along the shores of Lake Erie in North East, Pennsylvania. Rooted in a rich heritage dating back to 1954, when Daniel and Alta Coletta established Coletta Vineyards, the winery continues to thrive under the stewardship of their descendants, including head winemaker Beau Coletta.\n\nSpecializing in wines crafted from grapes grown on their own vineyards, Cellar '54 offers a diverse selection ranging from sweet to semi-dry table wines, as well as premium varietals. Each wine is thoughtfully named to reflect its unique character, inviting both casual sippers and connoisseurs to explore their offerings.\n\nVisit us at the French Creek Canoe Trading Post for free wine tasting! Purchase wine by the glass or bottle and enjoy in our outdoor pavilion along French Creek. Experience the perfect blend of family tradition and scenic creek-side relaxation.\n\nFor more information or to explore their wine selection, visit their official website: https://cellar54wines.com/",
      },
      {
        name: "Luminary Distilling",
        img: "/images/vendors/luminary.png",
        tagline: "Craft spirits with locally sourced ingredients",
        description: "Luminary Distilling is a family-owned craft distillery in Erie, Pennsylvania, dedicated to producing small-batch spirits with locally sourced ingredients. Founded by a former math teacher, Luminary emphasizes quality and community, offering a range of spirits including vodka, whiskey, gin, rum, and liqueurs. Their commitment to artisanal methods is evident in their 53-gallon finishing still, ensuring each batch receives meticulous attention.\n\nFrench Creek Trading Post Location:\n14015 US-19\nWaterford, PA 16441\n\nHours:\nSame hours as winery\nJune, July, August\nOpen 7 days a week\n9am to 8pm\n\nSpecialty Offerings:\nMoscow Mule\nSpecialty cocktails using Luminary spirits\n\nExperience handcrafted cocktails made with premium Luminary spirits in the beautiful setting of French Creek. Our expertly crafted drinks showcase the quality and artisanal nature of Luminary's distilled spirits.\n\nFor more information about Luminary Distilling, visit luminarydistilling.com.",
      },
    ]
  },
  {
    id: 'studio-cabin',
    name: 'The Studio Cabin',
    description: 'Creative arts and educational experiences',
    color: '#2E4A62',
    bgGradient: 'from-blue-50 to-indigo-100',
    modelPath: '/images/3-d/Studio Cabin.png',
    vendors: [
      {
        name: "N-SpireDesign",
        img: "/images/vendors/nspire.png",
        tagline: "Art instruction & creative experiences that inspire",
        description: "N-SpireDesign Art / Phyllis Lord Art is a creative hub offering a vibrant blend of painting, photography, fiber, and multimedia art, alongside hands-on instruction designed to inspire and uplift. Founded by artist and instructor Phyllis Lord. Mission: to encourage creativity, connection, and personal growth through art.\n\nHailing from the N-SpireDesign Studio inside the French Creek Canoe Trading Post (14015 Route 19, Waterford, PA 16441), we offer a wide range of experiences for individuals, families, and groups:\n\n🎨 Paint & Sip Classes – A fun, relaxed way to explore your artistic side, perfect for a night out or special occasion.\n🤝 Team-Building Workshops – Engage your team with collaborative art and craft activities that spark creativity and connection.\n🙏 Faith-Building Art Workshops – Reflect and grow spiritually through meaningful, art-infused experiences.\n🎁 Make-and-Take Projects – Drop in and leave with a unique handmade piece—no experience necessary!\n\nWhether you're looking for a private class, a mobile workshop (available at nearly any location), or a creative event for up to 25 participants, N-SpireDesign Art delivers unforgettable experiences that inspire joy, confidence, and community.\n\nLet's create something beautiful together!\n\nA-Spire to N-Spire before you X-Spire!",
      },
    ]
  },
];

// 3D Cabin Image Component
function CabinImage({ modelPath, isActive, cabin }: { modelPath: string; isActive: boolean; cabin: CabinArea }) {
  return (
    <motion.img
      src={modelPath}
      alt={cabin.name}
      className="w-full h-full object-contain"
      animate={{
        scale: isActive ? 1.1 : 1,
        y: isActive ? -5 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}

// 3D Cabin Component
const CabinModel = ({ cabin, isActive, onClick }: { cabin: CabinArea; isActive: boolean; onClick: () => void }) => {
  return (
    <motion.div
      className={`cabin-model cursor-pointer relative ${isActive ? 'active' : ''}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        rotateY: 10,
      }}
      animate={{
        scale: isActive ? 1.15 : 1,
        y: isActive ? -8 : 0,
        rotateX: isActive ? -2 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* 3D Image Container */}
      <div className="w-48 h-36 md:w-60 md:h-44 relative">
        <CabinImage 
          modelPath={cabin.modelPath} 
          isActive={isActive}
          cabin={cabin}
        />
      </div>
      

    </motion.div>
  );
};

// Vendor Card for Individual Vendors
const VendorDisplayCard = ({ vendor, onOpen }: { vendor: Vendor; onOpen: () => void }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      onClick={onOpen}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={vendor.img} 
          alt={vendor.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-navy mb-2">{vendor.name}</h3>
        <p className="text-gray-600 text-xs md:text-sm mb-3">{vendor.tagline}</p>
        <div className="text-xs text-gray-500 line-clamp-2 md:line-clamp-3">
          {vendor.description.split('\n')[0]}
        </div>
        <button className="mt-3 text-sage font-semibold hover:text-sage-dark transition-colors text-sm">
          Learn More →
        </button>
      </div>
    </motion.div>
  );
};

export default function VendorsPage() {
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCabin, setActiveCabin] = useState<string>('trading-post');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const openModal = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVendor(null), 300);
  };

  const activeCabinData = CABIN_AREAS.find(cabin => cabin.id === activeCabin) || CABIN_AREAS[0];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroMakers />

      {/* Interactive Cabins Section */}
      <section className="py-8 md:py-12 overflow-hidden" ref={containerRef}>
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-6 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy mb-4">
              Explore Our Local Vendors
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto px-4">
              Discover unique artisans and craftspeople organized into three distinct areas, 
              each offering their own special atmosphere and curated collection of local makers.
            </p>
          </motion.div>

          {/* 3D Cabins Display */}
          <div className="flex flex-row justify-center items-center mb-12 gap-4 md:gap-12 lg:gap-16 min-h-[280px] py-4 max-[480px]:flex-col max-[480px]:gap-8">
            {CABIN_AREAS.map((cabin) => (
              <CabinModel
                key={cabin.id}
                cabin={cabin}
                isActive={activeCabin === cabin.id}
                onClick={() => setActiveCabin(cabin.id)}
              />
            ))}
          </div>

          {/* Active Cabin Content */}
          <motion.div
            key={activeCabin}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`bg-gradient-to-br ${activeCabinData.bgGradient} rounded-2xl p-4 md:p-8 shadow-xl`}
          >
            {/* Cabin Info Header */}
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">{activeCabinData.name}</h3>
              <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto">
                {activeCabinData.description}
              </p>
            </div>

            {/* Vendors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {activeCabinData.vendors.map((vendor, index) => (
                <motion.div
                  key={vendor.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <VendorDisplayCard
                    vendor={vendor}
                    onOpen={() => openModal(vendor)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 md:gap-4 py-6 md:py-8">
        {CABIN_AREAS.map((cabin) => (
          <button
            key={cabin.id}
            onClick={() => setActiveCabin(cabin.id)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              activeCabin === cabin.id 
                ? 'bg-sage scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`View ${cabin.name}`}
          />
        ))}
      </div>

      {/* Testimonial Quote */}
      <QuoteBlock />

      {/* Become a Vendor CTA */}
      <CalloutJoin />

      {/* Vendor Modal */}
      <VendorModal
        vendor={selectedVendor}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Sticky CTA */}
      <StickyVendorCta />

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .cabin-model {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          .cabin-model {
            flex: 1;
            min-width: 140px;
            max-width: 180px;
          }
        }
        
        @media (max-width: 480px) {
          .cabin-model {
            min-width: 120px;
            max-width: 150px;
          }
        }
      `}</style>
    </main>
  );
} 