"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          
          {/* Left: Images Collage */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" 
              alt="Event Setup" 
              className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-3xl shadow-2xl z-10"
            />
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" 
              alt="Event Details" 
              className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-3xl shadow-2xl z-20 border-8 border-white"
            />
            {/* Floating Badge */}
            <div className="absolute top-10 right-10 z-30 bg-rose-600 text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl animate-bounce-slow">
              <span className="text-3xl font-black">#1</span>
              <span className="text-xs font-bold text-center uppercase tracking-widest mt-1">Choice</span>
            </div>
          </motion.div>

          {/* Right: Text and Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-rose-600 font-bold tracking-widest uppercase text-sm mb-2">Our Story</h4>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Crafting Experiences, <br /> Not Just Events.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For nearly a decade, LuxeEvents has been the premier choice for luxury event planning. We believe that every celebration should tell a unique story. From intimate gatherings to grand galas, our dedicated team handles every intricate detail, so you can simply live in the moment.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              <div>
                <h3 className="text-5xl font-black text-gray-900 mb-2">9<span className="text-rose-600">+</span></h3>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-5xl font-black text-gray-900 mb-2">70<span className="text-rose-600">+</span></h3>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Events Orchestrated</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}