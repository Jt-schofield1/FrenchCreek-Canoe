'use client';

import { motion } from 'framer-motion';
import SecureMap from '@/components/ui/SecureMap';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/trading-post/trading-post1.jpeg")',
          }}
        />
        
        {/* Stronger Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        {/* Content - positioned lower */}
        <motion.div 
          className="relative z-10 text-center text-white px-6 pb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p 
            className="tracking-[.3em] uppercase text-sm mb-3 text-gold font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get In Touch
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-6xl font-extrabold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)'
            }}
          >
            Contact&nbsp;Us
          </motion.h1>
          
          <motion.p 
            className="mt-4 max-w-lg mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.9)'
            }}
          >
            We'd love to hear from you. Reach out with any questions about our trading post, vendors, or&nbsp;rentals.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              Visit Our Trading Post
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Come explore our unique collection of local crafts, rent equipment for your creek adventure, or discover your perfect getaway rental.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-navy mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Address</p>
                    <address className="not-italic text-gray-600 leading-relaxed">
                      14015 US-19<br />
                      Waterford, PA 16441
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy mb-2">Hours</p>
                    <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                        <span>June - August</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monday - Sunday</span>
                      </div>
                      <div className="flex justify-between">
                        <span>9am - 8pm</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Phone</p>
                    <a href="tel:+18144493349" className="text-gray-600 hover:text-gold transition-colors text-lg">
                      (814) 449-3349
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Email</p>
                    <a href="mailto:frenchcreekcanoe@gmail.com" className="text-gray-600 hover:text-gold transition-colors break-all">
                    frenchcreekcanoe@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+18144493349"
                    className="flex-1 px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 text-center"
                  >
                    Call Now
                  </a>
                  <a 
                    href="mailto:frenchcreekcanoe@gmail.com"
                    className="flex-1 px-6 py-3 bg-white text-navy font-semibold rounded-lg border-2 border-navy hover:bg-navy hover:!text-white transition-all duration-300 text-center"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-navy mb-6">Find Us</h3>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 mb-6">
                <SecureMap 
                  address="14015 US-19, Waterford, PA 16441"
                  height="350px"
                  zoom={14}
                  title="French Creek Trading Post Location"
                />
              </div>
              <div className="text-center">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=14015+US-19+Waterford+PA+16441" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about our trading post, vendors, and services.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-navy mb-4">What are your hours?</h3>
              <p className="text-gray-700 leading-relaxed">We're open Monday through Sunday from 8am to 9pm, June-August. Please note that our hours may vary during holidays and special events.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Do you offer canoe rentals?</h3>
              <p className="text-gray-700 leading-relaxed">Canoe/Kayak Rentals are coming very soon!</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-navy mb-4">How can I become a vendor?</h3>
              <p className="text-gray-700 leading-relaxed">We're always looking for local artisans and vendors who create unique, high-quality products. Please fill out our contact form with details about your products, including photos if possible, and we'll get back to you to discuss opportunities.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Do you have parking available?</h3>
              <p className="text-gray-700 leading-relaxed">Yes we do have parking available! It is 5$ for the parking ticket, which you can redeem with any of our vendors. To get your parking ticket, please go to the winery!</p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16 pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-navy mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Don't hesitate to reach out! We're here to help with any questions about our trading post, vendors, or rental properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+18145551234"
                className="px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
              >
                Call Us Now
              </a>
              <a 
                href="/site/vendors"
                className="px-8 py-4 bg-white text-navy font-semibold rounded-lg border-2 border-navy hover:bg-navy hover:!text-white transition-all duration-300"
              >
                Visit Our Vendors
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 