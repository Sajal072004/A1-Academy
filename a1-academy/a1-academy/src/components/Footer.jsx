import React from 'react';
import { Facebook, Twitter, Instagram, Share2 } from 'lucide-react';
import { IMAGES } from '../config/images';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description - Center on mobile */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 text-white justify-center md:justify-start">
              <img src={IMAGES.logo} alt="A1 Academy" className="h-12 w-auto" />
              <span className="font-bold text-3xl tracking-tight">A1 Academy</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6 mx-auto md:mx-0">
              Empowering students of class 9th and 10th with superior quality education in Maths, Science, and Social Science since 2000.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links and Subjects - Side by side on mobile */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div>

                <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#home" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Home</a></li>
                  <li><a href="#director" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Director</a></li>
                  <li><a href="#services" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Facilities</a></li>
                  <li><a href="#results" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Toppers</a></li>
                </ul>
              </div>

            </div>

            <div className="flex flex-col items-center md:items-start">
              <div>

                <h4 className="text-white font-bold text-lg mb-6">Subjects</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Mathematics</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Science</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Social Science</li>
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'A1 Academy',
                        text: 'Check out A1 Academy for 9th & 10th Coaching!',
                        url: window.location.href,
                      })
                    }
                  }}
                  className="flex items-center gap-2 text-sm text-yellow-500 hover:text-yellow-400 cursor-pointer font-medium"
                >
                  <Share2 size={16} /> Share this website
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} A1 Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed by Sahil Mandre with ❤️ for A1 Academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
