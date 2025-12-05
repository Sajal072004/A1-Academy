import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import { IMAGES } from '../config/images';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ResultsGallery = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Filter out null refs
    const validCards = cardsRef.current.filter(card => card !== null);
    
    if (validCards.length === 0) return;

    // Animate cards from bottom with stagger effect
    gsap.fromTo(
      validCards,
      {
        y: 150,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#results',
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [IMAGES.results.length]);

  return (
    <div id="results" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Award size={48} className="mx-auto text-yellow-500 mb-4" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Hall of Fame</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Our results speak for themselves. Celebrating the hard work and dedication of our toppers.
          </p>
        </div>

        {/* Grid for Result Images - 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IMAGES.results.map((imgSrc, index) => (
            <div 
              key={index} 
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative rounded-xl overflow-hidden shadow-2xl bg-white transform transition duration-500 hover:scale-[1.02]"
            >
              <img 
                src={imgSrc} 
                alt={`Student Results ${index + 1}`} 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold bg-blue-600 px-3 py-1 rounded-lg text-sm">Outstanding Performance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsGallery;
