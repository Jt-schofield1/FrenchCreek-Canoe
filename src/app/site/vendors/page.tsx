'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroMakers from '@/components/sections/vendors/HeroMakers';
import VendorCard from '@/components/sections/vendors/VendorCard';
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

const VENDORS: Vendor[] = [
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
    name: "French Creek Candles",
    img: "/images/vendors/candles.png",
    tagline: "Handmade candles & cozy home essentials",
    description: "French Creek Candles and More\n\nFind us on Facebook!\n\nJoan Dimon\n814-572-2877",
  },
  {
    name: "Waldron's Cauldrons",
    img: "/images/vendors/waldrons.png",
    tagline: "Natural simmer pot blends with botanical magic",
    description: "At Waldron's Cauldrons, we handcraft natural simmer pot blends that fill your home with comforting, seasonal aromas—no oils, no synthetics, just pure botanical magic. Each blend is carefully curated with dried fruits, herbs, and spices to create long-lasting scents that warm the senses and the soul. Small-batch made in Mill Village Pennsylvania and always crafted with intention 🌿💚",
  },
  {
    name: "N-SpireDesign",
    img: "/images/vendors/nspire.png",
    tagline: "Art instruction & creative experiences that inspire",
    description: "N-SpireDesign Art / Phyllis Lord Art is a creative hub offering a vibrant blend of painting, photography, fiber, and multimedia art, alongside hands-on instruction designed to inspire and uplift. Founded by artist and instructor Phyllis Lord. Mission: to encourage creativity, connection, and personal growth through art.\n\nHailing from the N-SpireDesign Studio inside the French Creek Canoe Trading Post (14015 Route 19, Waterford, PA 16441), we offer a wide range of experiences for individuals, families, and groups:\n\n🎨 Paint & Sip Classes – A fun, relaxed way to explore your artistic side, perfect for a night out or special occasion.\n🤝 Team-Building Workshops – Engage your team with collaborative art and craft activities that spark creativity and connection.\n🙏 Faith-Building Art Workshops – Reflect and grow spiritually through meaningful, art-infused experiences.\n🎁 Make-and-Take Projects – Drop in and leave with a unique handmade piece—no experience necessary!\n\nWhether you're looking for a private class, a mobile workshop (available at nearly any location), or a creative event for up to 25 participants, N-SpireDesign Art delivers unforgettable experiences that inspire joy, confidence, and community.\n\nLet's create something beautiful together!\n\nA-Spire to N-Spire before you X-Spire!",
  },
  {
    name: "Cellar 54",
    img: "/images/vendors/cellar54.png",
    tagline: "Family-owned Lake Erie winery since 1954",
    description: "Cellar '54\n9368 W Law Road\nNorth East, PA 16428\n(814) 572-9280\n\nHours:\nMonday-Thursday: 12-5pm\nFriday: 12-6pm\nSaturday: 12pm-6pm\nSunday: 12pm-4pm\n\nCellar '54 is a family-owned winery nestled along the shores of Lake Erie in North East, Pennsylvania. Rooted in a rich heritage dating back to 1954, when Daniel and Alta Coletta established Coletta Vineyards, the winery continues to thrive under the stewardship of their descendants, including head winemaker Beau Coletta.\n\nSpecializing in wines crafted from grapes grown on their own vineyards, Cellar '54 offers a diverse selection ranging from sweet to semi-dry table wines, as well as premium varietals. Each wine is thoughtfully named to reflect its unique character, inviting both casual sippers and connoisseurs to explore their offerings.\n\nBeyond winemaking, Cellar '54 fosters a vibrant community atmosphere by hosting events like \"Cellar Jams\" and offering a Wine Club membership that includes exclusive tastings and discounts. With options for online ordering and local delivery within a 30-mile radius, they make enjoying their wines convenient for enthusiasts near and far.\n\nFor more information or to explore their wine selection, visit their official website: https://cellar54wines.com/",
  },
  {
    name: "Luminary Distilling",
    img: "/images/vendors/luminary.png",
    tagline: "Craft spirits with locally sourced ingredients",
    description: "Luminary Distilling is a family-owned craft distillery in Erie, Pennsylvania, dedicated to producing small-batch spirits with locally sourced ingredients. Founded by a former math teacher, Luminary emphasizes quality and community, offering a range of spirits including vodka, whiskey, gin, rum, and liqueurs. Their commitment to artisanal methods is evident in their 53-gallon finishing still, ensuring each batch receives meticulous attention.\n\nLocations:\n\n1. Distillery & Eatery – Upper Peach\nAddress: 8270 Peach Street, Erie, PA 16509\nPhone: (814) 790-4044\nHours:\n• Tuesday–Thursday: 10:00 AM – 9:00 PM\n• Friday–Saturday: 9:00 AM – 10:00 PM\n• Sunday: 9:00 AM – 3:00 PM\n\nThis flagship location features a full-service gastropub with a rotating menu, Sunday brunch, and a bakery offering scratch-made goods. Guests can enjoy handcrafted cocktails, spirit flights, and local craft beers in a welcoming atmosphere.\n\n2. Cocktails & Bottle Shop – Lower Peach\nAddress: 36 North Park Row, Erie, PA 16501\nPhone: (814) 873-3392\nHours:\n• Tuesday–Thursday: 12:00 PM – 7:00 PM\n• Friday–Saturday: 12:00 PM – 8:00 PM\n\nSituated in downtown Erie, this location offers a curated selection of Luminary's spirits, available for sampling, flights, and bottle purchases. The shop also serves specialty cocktails and features select Pennsylvania craft beers and wines for on-site enjoyment.\n\nFor more information or to explore their offerings, visit luminarydistilling.com.",
  },
];

export default function VendorsPage() {
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVendor(null), 300);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroMakers />

      {/* Featured Vendors Grid */}
      <section id="vendors" className="py-24 container max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            Featured Vendors
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Talented local artisans offering unique handcrafted products that celebrate 
            the spirit and craftsmanship of the French Creek community.
          </p>
        </motion.div>

        {/* Vendor Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {VENDORS.map((vendor, index) => (
            <VendorCard
              key={vendor.name}
              vendor={vendor}
              onOpen={() => openModal(vendor)}
              index={index}
            />
          ))}
        </div>
      </section>

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
    </main>
  );
} 