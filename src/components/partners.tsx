"use client";

import { motion } from "framer-motion";
import { Crown, Gem, Wine, Music, Camera, UtensilsCrossed } from "lucide-react";

const partners = [
  { icon: Crown, name: "The Grand Plaza", offset: "mt-0" },
  { icon: Camera, name: "Vogue Photography", offset: "mt-12" },
  { icon: Wine, name: "Elite Catering Co.", offset: "mt-4" },
  { icon: Gem, name: "Luxe Decorators", offset: "mt-16" },
  { icon: Music, name: "Sonic Sounds", offset: "mt-2" },
  { icon: UtensilsCrossed, name: "Gourmet Bites", offset: "mt-10" },
];

export default function Partners() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-rose-600 font-bold tracking-widest uppercase text-sm mb-2">Trusted By</h4>
          <h2 className="text-3xl font-extrabold text-gray-900">Our Premium Partners</h2>
        </div>

        {/* Scattered/Random looking grid layout */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 sm:gap-x-20 sm:gap-y-12">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                // The offset class (e.g., mt-12) creates the "random" scattered look
                className={`flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer ${partner.offset}`}
              >
                <Icon size={32} className="text-gray-900" />
                <span className="text-xl font-black text-gray-900 tracking-tighter">
                  {partner.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}