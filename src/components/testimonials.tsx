"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, PauseCircle, PlayCircle } from "lucide-react";

const allReviews = [
  { name: "Eleanor & James", event: "Wedding Celebration", text: "LuxeEvents blew us away. They took our scattered ideas and turned them into a breathtaking reality." },
  { name: "TechNova Corp", event: "Corporate Gala", text: "Professional, punctual, and highly creative. Managed our 500-guest event effortlessly." },
  { name: "Sophia Martinez", event: "30th Birthday Bash", text: "I didn't have to lift a finger. The actual event was even better than the mood boards!" },
  { name: "David Kim", event: "Private Exhibition", text: "Their event advisors are top tier. They negotiated venue prices I couldn't even get close to." },
  { name: "The Alis", event: "Anniversary Party", text: "From the photography to the catering, every vendor they recommended was 5-star quality." },
  { name: "Global Med", event: "Annual Conference", text: "Flawless execution. The staging and audiovisual setup was Hollywood quality." },
  { name: "Sarah & John", event: "Destination Wedding", text: "Planning a wedding from 1,000 miles away was scary, but their team made it a total breeze." },
  { name: "Liam O'Connor", event: "Charity Gala", text: "We raised record funds, and the attendees couldn't stop talking about the beautiful decor." },
  { name: "Maya Patel", event: "Engagement Party", text: "Every detail was personalized. It felt like they truly understood our love story." }
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [colIndices, setColIndices] = useState([0, 1, 2]);
  const [activeColumnToAnimate, setActiveColumnToAnimate] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setColIndices((prev) => {
        const newIndices = [...prev];
        newIndices[activeColumnToAnimate] = (newIndices[activeColumnToAnimate] + 3) % allReviews.length;
        return newIndices;
      });
      setActiveColumnToAnimate((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, activeColumnToAnimate]);

  const renderColumn = (colIndex: number) => {
    const currentReview = allReviews[colIndices[colIndex]];

    return (
      <div className="relative h-[320px] overflow-hidden rounded-3xl" key={`col-${colIndex}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={colIndices[colIndex]}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl border border-gray-700 flex flex-col justify-between hover:border-rose-500/50 transition-colors"
          >
            <div>
              <div className="flex gap-1 text-rose-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-200 text-lg italic leading-relaxed line-clamp-4">
                "{currentReview.text}"
              </p>
            </div>
            <div className="mt-4 border-t border-gray-700/50 pt-4">
              <h4 className="font-bold text-white text-lg">{currentReview.name}</h4>
              <p className="text-rose-500 text-sm font-medium">{currentReview.event}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Client Love</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Don't just take our word for it. Read what our past clients have to say about their unforgettable experiences.
            </p>
          </div>
          
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-bold transition border border-gray-700"
          >
            {isPaused ? <PlayCircle size={20} className="text-green-400" /> : <PauseCircle size={20} className="text-rose-400" />}
            {isPaused ? "Resume Reading" : "Pause Animation"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderColumn(0)}
          {renderColumn(1)}
          {renderColumn(2)}
        </div>
      </div>
    </section>
  );
}