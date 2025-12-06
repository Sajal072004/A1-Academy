import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactInfo = () => {
  return (
    <div id="contact" className="bg-linear-to-b from-white via-blue-50/30 to-white pb-24 pt-24 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about admissions or our programs? We're here to help you every step of the way.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Visit Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-red-400 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full min-h-[280px]">
              <div className="w-16 h-16 bg-linear-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Visit Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                105, Nav Adarsh Colony, MR-4 Rd,<br/>
                Behind Ambition Dadarya Classes,<br/>
                Jabalpur, MP 482002
              </p>
              <a 
                href="https://goo.gl/maps/aEswBtgCmGzCeZbG9" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 hover:gap-3 transition-all text-sm mt-auto"
              >
                Get Directions <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Call Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full min-h-[280px]">
              <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Call Us</h3>
              <div className="flex-grow">
                <p className="text-gray-600 text-sm mb-1 font-semibold">Mobile: +91 7224963725</p>
                <p className="text-gray-600 text-sm mb-4">Office: 0761-4084225</p>
              </div>
              <a 
                href="tel:7224963725" 
                className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 hover:gap-3 transition-all text-sm mt-auto"
              >
                Call Now <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full min-h-[280px]">
              <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">Email Us</h3>
              <div className="flex-grow">
                <p className="text-gray-600 text-sm mb-2 break-all">
                  cometoa1academy@gmail.com
                </p>
                <p className="text-gray-400 text-xs mb-4">We reply within 24 hours</p>
              </div>
              <a 
                href="mailto:cometoa1academy@gmail.com" 
                className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 hover:gap-3 transition-all text-sm mt-auto"
              >
                Send Email <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Component */}
        <div className="mb-20">
          <ContactForm />
        </div>

        {/* Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg h-96 w-full relative">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.627702677937!2d79.9333!3d23.1467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA4JzQ4LjEiTiA3OcKwNTYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy"
              title="A1 Academy Location"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
