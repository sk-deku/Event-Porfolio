"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    // FIX: Added 'py-20' (vertical padding) so content never touches the absolute top/bottom
    <section id="hero" className="relative min-h-[calc(100vh-80px)] mt-20 flex items-center justify-center bg-gray-900 py-20">
      
      {/* Background Image with Darker Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-black/60"></div> 
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl"
        >
          Your Vision. Our Expertise. <br />
          <span className="text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]">
            Unforgettable Events.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-lg font-medium leading-relaxed"
        >
          We specialize in designing and managing weddings, corporate events, birthdays, exhibitions, and private celebrations with flawless execution, stunning aesthetics, and personalized service from start to finish.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center pb-4"
        >
          <a href="#quote" className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-700 transition shadow-xl hover:scale-105 transform duration-200">
            Get Free Quote
          </a>
          <a href="#gallery" className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition shadow-xl hover:scale-105 transform duration-200">
            View Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}