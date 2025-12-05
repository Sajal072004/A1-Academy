import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Video, 
  MonitorPlay, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageCircle,
  Share2,
  Award,
  Star,
  Users
} from 'lucide-react';
import admissionImage from './assets/admission.png';
import directorImage from './assets/director.png';

// --- Image Assets Configuration ---
// These are configured to look for files in your 'public' folder or 'src/assets'
// depending on your build setup. For standard Create-React-App/Vite, 
// place images in the 'public' folder.

const IMAGES = {
  logo: "image_f6a565.png",
  // logo: "https://cdn-icons-png.flaticon.com/512/3665/3665939.png", // Fallback
  
  classroom: "image_f6a585.jpg",
  // classroom: "https://images.unsplash.com/photo-1577896334614-201b31d50dc5?auto=format&fit=crop&q=80&w=1920", // Fallback
  
  director: directorImage,
  // director: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=1000", // Fallback
  
  admission: admissionImage,
  // admission: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000", // Fallback
  
  results: [
    "image_f6a5e5.jpg",
    "image_f6a5c1.jpg",
    "image_f6a5c8.jpg",
    "image_f6a5a2.jpg"
    // "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800",
    // "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    // "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800",
    // "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe4d?auto=format&fit=crop&q=80&w=800"
  ]
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Director', href: '#director' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src={IMAGES.logo} 
              alt="A1 Academy Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.style.display='none';
                console.warn("Logo image failed to load. Ensure 'image_f6a565.png' is in the public folder.");
              }} 
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-blue-900 leading-none">
                A1 Academy
              </span>
              <span className="text-xs font-semibold text-yellow-600 tracking-wider">
                EXPLORE THE BEST IN YOU
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-blue-900 hover:font-bold transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+917224963725" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-blue-900"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.classroom} 
          alt="Classroom Background" 
          className="w-full h-full object-cover"
          onError={(e) => console.warn("Hero image failed to load")}
        />
        <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-yellow-500/20 text-yellow-400 font-bold text-sm tracking-wider uppercase border border-yellow-500/50 backdrop-blur-sm">
          <Star size={16} fill="currentColor" /> Est. Since 2000
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Transforming Potential into <br/>
          <span className="text-yellow-500">Academic Excellence</span>
        </h1>
        
        <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-gray-200 font-light mb-10">
          Premier Coaching for <span className="font-bold text-white">Class 9th & 10th</span> in 
          Maths, Science & Social Science.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#admissions" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 text-lg font-bold rounded-lg transition-all shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1">
            Enroll for 2025
          </a>
          <a href="#results" className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white hover:text-blue-900 transition-all">
            View Toppers
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutDirector = () => {
  return (
    <div id="director" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Director Image */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-yellow-100 rounded-2xl transform rotate-2"></div>
            <div className="absolute -inset-4 bg-blue-50 rounded-2xl transform -rotate-2"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={IMAGES.director} 
                alt="Aviral Namdeo - Director" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wide mb-2">
              <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
              Meet The Mentor
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Aviral Namdeo
              <span className="block text-xl text-gray-500 font-medium mt-1">Founder & Director</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                "Aviral Sir strongly believes that a true educationist is the one who promotes and nurtures open-mindedness, curiosity, values, and the love of learning... To create the best students, and ultimately, the best citizens."
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 flex gap-4">
              <Award className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-blue-900 text-lg">22+ Years of Experience</h4>
                <p className="text-sm text-blue-700">One of the most eminent educationists of our times, guiding students towards success since 2000.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const features = [
    {
      icon: MonitorPlay,
      title: "High-Tech Digital Boards",
      description: "Experience learning like never before with our 4K digital classrooms and visual aids."
    },
    {
      icon: Video,
      title: "Recorded Backups",
      description: "Missed a class? No problem. Access high-quality recordings of every lecture on our app."
    },
    {
      icon: CheckCircle,
      title: "Biweekly Testing",
      description: "Regular assessment system designed to eliminate exam fear and track progress precisely."
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "One-on-one doubt clearing sessions and small batch sizes for focused learning."
    }
  ];

  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-wide">Why A1 Academy?</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Modern Education Meets <span className="text-blue-600">Traditional Values</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ResultsGallery = () => {
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

        {/* Masonry-style Grid for Result Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IMAGES.results.map((imgSrc, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-2xl bg-white transform transition duration-500 hover:scale-[1.02]">
              <img 
                src={imgSrc} 
                alt={`Student Results ${index + 1}`} 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold bg-blue-600 px-3 py-1 rounded-lg text-sm">Outstanding Performance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AdmissionSection = () => {
  return (
    <div id="admissions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-sm border border-blue-100">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 w-full">
               <img 
                 src={IMAGES.admission} 
                 alt="Admission Open 2025" 
                 className="w-full h-auto rounded-xl shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-300"
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

const ContactInfo = () => {
  return (
    <div id="contact" className="bg-white pb-24 pt-24 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="text-gray-500 mt-2">Visit our campus or give us a call</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-blue-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="text-red-500" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">
              105, Nav Adarsh Colony, MR-4 Rd,<br/>
              Behind Ambition Dadarya Classes,<br/>
              Jabalpur, MP 482002
            </p>
            <a href="https://goo.gl/maps/aEswBtgCmGzCeZbG9" target="_blank" rel="noreferrer" className="mt-4 text-blue-600 font-semibold hover:underline text-sm">
              Get Directions &rarr;
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-blue-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
              <Phone className="text-green-500" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-1">Mobile: +91 7224963725</p>
            <p className="text-gray-600 text-sm">Office: 0761-4084225</p>
            <a href="tel:7224963725" className="mt-4 text-blue-600 font-semibold hover:underline text-sm">
              Call Now &rarr;
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-blue-50 transition-colors group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-yellow-500" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">
              cometoa1academy@gmail.com
            </p>
            <p className="text-gray-400 text-xs mt-2">We reply within 24 hours</p>
            <a href="mailto:cometoa1academy@gmail.com" className="mt-4 text-blue-600 font-semibold hover:underline text-sm">
              Send Email &rarr;
            </a>
          </div>
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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 text-white">
              <img src={IMAGES.logo} alt="A1 Academy" className="h-12 w-auto" />
              <span className="font-bold text-3xl tracking-tight">A1 Academy</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Empowering students of class 9th and 10th with superior quality education in Maths, Science, and Social Science since 2000.
            </p>
            <div className="flex space-x-4">
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
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Home</a></li>
              <li><a href="#director" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Director</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Facilities</a></li>
              <li><a href="#results" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="text-gray-600">&rsaquo;</span> Toppers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Subjects</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Mathematics</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Science</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span> Social Science</li>
            </ul>
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
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} A1 Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with ❤️ for Education</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white selection:bg-yellow-200 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <Hero />
      <AboutDirector />
      <Services />
      <AdmissionSection />
      <ResultsGallery />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;