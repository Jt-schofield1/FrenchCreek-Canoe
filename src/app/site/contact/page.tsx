'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/sections/common/PageHeader';

// export const metadata: Metadata = {
//   title: 'Contact Us',
//   description: 'Get in touch with French Creek Trading Post. Visit us or send a message.',
// };

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions about our trading post, vendors, or rentals."
        tagline="Get In Touch"
      />

      {/* Contact Form & Info */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm tracking-widest text-gray-500 uppercase block mb-4">Send a message</span>
            <h2 className="text-3xl md:text-4xl font-light mb-8">Get in Touch</h2>
            
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border-b border-gray-300 focus:border-black outline-none transition-colors bg-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border-b border-gray-300 focus:border-black outline-none transition-colors bg-transparent"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm text-gray-600">Subject</label>
                <select 
                  id="subject" 
                  className="w-full p-3 border-b border-gray-300 focus:border-black outline-none transition-colors bg-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="trading-post">Trading Post Inquiry</option>
                  <option value="vendor">Vendor Information</option>
                  <option value="rental">Rental Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full p-3 border-b border-gray-300 focus:border-black outline-none transition-colors bg-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm tracking-widest text-gray-500 uppercase block mb-4">Our location</span>
            <h2 className="text-3xl md:text-4xl font-light mb-8">Visit Us</h2>
            
            <div className="mb-10 space-y-6">
              <div>
                <p className="font-medium mb-2">Address</p>
                <address className="not-italic text-gray-600">
                  123 French Creek Road<br />
                  Phoenixville, PA 12345
                </address>
              </div>
              
              <div>
                <p className="font-medium mb-2">Hours</p>
                <dl className="grid grid-cols-2 gap-2 text-gray-600">
                  <dt>Monday - Friday</dt>
                  <dd>10am - 6pm</dd>
                  <dt>Saturday - Sunday</dt>
                  <dd>9am - 7pm</dd>
                </dl>
              </div>
              
              <div>
                <p className="font-medium mb-2">Contact</p>
                <p className="text-gray-600">Phone: (123) 456-7890</p>
                <p className="text-gray-600">Email: <a href="mailto:info@frenchcreekcanoe.com" className="hover-underline">info@frenchcreekcanoe.com</a></p>
              </div>
            </div>
            
            <div className="aspect-video relative overflow-hidden img-frame">
              {/* Map component will go here */}
              <div className="absolute inset-0 bg-cream-50 flex items-center justify-center">
                <p className="text-gray-400">Google Map</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-8 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-light">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-4 md:mt-0 max-w-md">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-b border-cream-200 pb-8"
            >
              <h3 className="text-xl font-medium mb-4">What are your hours?</h3>
              <p className="text-gray-700">We're open Monday through Friday from 10am to 6pm, and weekends from 9am to 7pm. Please note that our hours may vary during holidays and special events.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-b border-cream-200 pb-8"
            >
              <h3 className="text-xl font-medium mb-4">Do you offer tours of the creek?</h3>
              <p className="text-gray-700">Yes, we offer guided tours of French Creek. These tours provide insights into the local ecosystem, history, and cultural significance of the area. Please contact us for more information and to book a tour.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-b border-cream-200 pb-8"
            >
              <h3 className="text-xl font-medium mb-4">How can I become a vendor?</h3>
              <p className="text-gray-700">We're always looking for local artisans and vendors who create unique, high-quality products. Please fill out our contact form with details about your products, including photos if possible, and we'll get back to you to discuss opportunities.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 