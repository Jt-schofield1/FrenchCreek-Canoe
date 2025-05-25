'use client';

import PageHeader from '@/components/sections/common/PageHeader';
import ContentSection from '@/components/sections/common/ContentSection';
import ImageGrid from '@/components/sections/common/ImageGrid';

export default function VendorsPage() {
  // Sample vendor data
  const vendors = [
    {
      src: '/images/vendors/rons-honey.jpg',
      alt: 'Ron\'s Honey',
      title: 'Ron\'s Honey',
      subtitle: 'Local artisanal honey products',
      href: '#'
    },
    {
      src: '/images/vendors/finnegan-friends.jpg',
      alt: 'Finnegan & Friends',
      title: 'Finnegan & Friends',
      subtitle: 'Handcrafted wooden toys',
      href: '#'
    },
    {
      src: '/images/vendors/french-creek-candles.jpg',
      alt: 'French Creek Candles',
      title: 'French Creek Candles',
      subtitle: 'Locally sourced soy candles',
      href: '#'
    },
    {
      src: '/images/vendors/willow-baskets.jpg',
      alt: 'Willow Baskets',
      title: 'Willow Baskets',
      subtitle: 'Traditional handwoven baskets',
      href: '#'
    },
    {
      src: '/images/vendors/creek-textiles.jpg',
      alt: 'Creek Textiles',
      title: 'Creek Textiles',
      subtitle: 'Sustainable fabrics and linens',
      href: '#'
    },
    {
      src: '/images/vendors/heritage-preserves.jpg',
      alt: 'Heritage Preserves',
      title: 'Heritage Preserves',
      subtitle: 'Seasonal jams and preserves',
      href: '#'
    }
  ];

  return (
    <>
      <PageHeader 
        title="Local Vendors"
        subtitle="Discover unique products from our carefully selected local artisans and vendors."
        tagline="Meet Our Artisans"
      />

      <ContentSection
        title="Supporting Local Craftspeople"
        subtitle="Community first"
        content="At French Creek Trading Post, we're proud to showcase the work of talented local artisans. Each vendor brings their unique skills and passion to create products that reflect the spirit of our region."
        backgroundColor="cream"
      />

      {/* Featured Vendors */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-light">Featured Vendors</h2>
            <p className="text-gray-500 mt-4 md:mt-0 max-w-md">
              Talented local artisans offering unique handcrafted products
            </p>
          </div>
          
          <ImageGrid 
            images={vendors} 
            columns={3}
            aspectRatio="square"
          />
        </div>
      </section>

      {/* Become a Vendor */}
      <ContentSection
        title="Become a Vendor"
        subtitle="Join our community"
        content={
          <>
            <p className="text-lg text-gray-700 mb-4">
              Interested in showcasing your products at French Creek Trading Post? 
              We're always looking for talented local artisans and vendors who share our values of quality, authenticity, and community.
            </p>
            <p className="text-lg text-gray-700">
              If you create handcrafted items that would complement our existing selection, we'd love to hear from you.
            </p>
          </>
        }
        backgroundColor="cream"
        ctaLink="/site/contact"
        ctaText="Contact Us"
      />

      {/* Vendor Testimonial */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light italic mb-8">
            "Being a vendor at French Creek Trading Post has connected me with so many wonderful customers who appreciate handcrafted quality. It's more than a place to sell—it's a community."
          </p>
          <p className="text-lg">— Sarah Johnson, French Creek Candles</p>
        </div>
      </section>
    </>
  );
} 