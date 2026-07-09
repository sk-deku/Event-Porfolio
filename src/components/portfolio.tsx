"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredEvents } from "@/lib/data";
import { X, PlayCircle, Quote } from "lucide-react";

const categories = ["All", "Marriage", "Birthday", "Corporate"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  
  // State for the Auto-Swiping Review Carousel
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-swiping logic for reviews
  useEffect(() => {
    if (!selectedEvent || !selectedEvent.reviews) return;
    
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => 
        prev === selectedEvent.reviews.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Swipes every 4 seconds

    return () => clearInterval(interval);
  }, [selectedEvent]);

  // Reset review index when opening a new event
  const openModal = (event: any) => {
    setSelectedEvent(event);
    setCurrentReviewIndex(0);
  };

  const filteredEvents = activeCategory === "All" 
    ? featuredEvents 
    : featuredEvents.filter(event => event.category === activeCategory);

  return (
    <motion.section id="gallery" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Masterpieces</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any event to see client videos, event details, and testimonials.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeCategory === category ? "bg-rose-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div key={event.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} onClick={() => openModal(event)} className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white border border-gray-100 relative">
                <div className="relative h-64 overflow-hidden bg-gray-900">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-500" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-90" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-rose-600 shadow-md">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-500 text-sm font-medium">Clients: {event.reviews?.[0]?.clientName || "Private"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* EVENT DETAIL MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6">
          
          {/* 
            SCROLLBAR KILLER CSS 
            We use Tailwind's arbitrary variants to aggressively force scrollbars to disappear 
            on this specific container across all browsers.
          */}
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300 shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* Close Button */}
            <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 z-20 bg-black/60 text-white p-2 rounded-full hover:bg-rose-600 transition shadow-lg">
              <X size={24} />
            </button>

            {/* Cinematic Video Player */}
            <div className="w-full aspect-video bg-black relative">
              {selectedEvent.videoUrl ? (
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  controls 
                  muted 
                  loop 
                  playsInline // CRUCIAL for autoplay on many devices
                  src={selectedEvent.videoUrl} 
                />
              ) : (
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
              )}
            </div>

            {/* Event Details & Reviews */}
            <div className="p-6 sm:p-10 bg-gray-50">
              
              {/* Description Section */}
              <div className="mb-8">
                <span className="text-rose-600 font-bold text-sm tracking-widest uppercase">{selectedEvent.category}</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1 mb-4">{selectedEvent.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Looping Review Carousel */}
              {selectedEvent.reviews && selectedEvent.reviews.length > 0 && (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden min-h-[160px] flex items-center">
                  <Quote className="absolute top-4 right-4 text-gray-100 w-16 h-16" />
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReviewIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10 w-full"
                    >
                      <p className="text-gray-800 text-lg sm:text-xl italic font-medium leading-relaxed mb-4">
                        "{selectedEvent.reviews[currentReviewIndex].text}"
                      </p>
                      <p className="font-bold text-rose-600">
                        — {selectedEvent.reviews[currentReviewIndex].clientName}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedEvent.reviews.map((_: any, idx: number) => (
                      <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentReviewIndex ? "w-6 bg-rose-600" : "w-2 bg-gray-300"}`} 
                      />
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}