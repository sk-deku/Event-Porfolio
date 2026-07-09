"use client";

import Link from 'next/link';
import { CalendarDays } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Smart Navbar Logic: Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // Scrolling down
    } else {
      setHidden(false); // Scrolling up
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      // Changed to solid white bg to sit cleanly above the hero
      className="w-full bg-white fixed top-0 z-50 border-b border-gray-200 shadow-md h-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          <Link href="/" className="flex items-center gap-2">
            <CalendarDays className="h-8 w-8 text-rose-600" />
            <span className="font-extrabold text-2xl tracking-tight text-gray-900">
              LuxeEvents
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#about" className="font-semibold text-gray-800 hover:text-rose-600 transition-colors">About</Link>
            <Link href="#gallery" className="font-semibold text-gray-800 hover:text-rose-600 transition-colors">Gallery</Link>
            <Link href="#quote" className="font-semibold text-gray-800 hover:text-rose-600 transition-colors">Vendors</Link>
            <Link href="#quote" className="bg-rose-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-rose-700 transition shadow-lg hover:shadow-rose-500/30">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}