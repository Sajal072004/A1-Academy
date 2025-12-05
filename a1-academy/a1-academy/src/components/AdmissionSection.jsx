import React, { useEffect, useRef } from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { IMAGES } from '../config/images';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdmissionSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        x: -200,
        opacity: 0,
        rotation: -5,
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#admissions',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="admissions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-sm border border-blue-100">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 w-full">
               <img 
                ref={imageRef}
                 src={IMAGES.admission} 
                 alt="Admission Open 2025" 
                className="w-full h-auto rounded-xl shadow-lg transform hover:rotate-2 hover:scale-105 transition-all duration-300"
               />
            </div>
            <div className="lg:w-1/2 w-full space-y-6">
              <span className="bg-red-500 text-white font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider animate-pulse">
                Admissions Open
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Join the 2025 Batch Today!
              </h2>
              <p className="text-lg text-gray-600">
                Don't settle for less. Give your child the advantage of expert guidance, fear-free learning, and future-ready skills.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Afraid to ask doubts? We welcome every question.",
                  "Struggling with numericals? Learn smart tricks.",
                  "Missing classes? Catch up on our Android App.",
                  "Parking hassle? Ample space available."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=917224963725&text=Hi,%20I%20want%20to%20inquire%20about%20admissions" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSection;
