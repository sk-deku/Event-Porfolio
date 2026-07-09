"use client";

import { useState } from "react";
import { vendorCategories, vendors, Vendor } from "@/lib/data";
import InquiryModal from "./InquiryModal";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Star } from "lucide-react"; // <-- Added Star

const eventTypes = ["Marriage", "Birthday", "Corporate Event", "Private Party", "Other"];
export type SelectionType = Vendor | "management" | "none";

export default function BudgetPlanner() {
  const [step, setStep] = useState(0); 
  
  // New States for Step 0
  const [selectedEventType, setSelectedEventType] = useState<string>("Marriage");
  const [guests, setGuests] = useState<number>(100);
  const [vegPercent, setVegPercent] = useState<number>(50); // 50% veg / 50% non-veg
  const [leaveDetailsToMgmt, setLeaveDetailsToMgmt] = useState(false);
  
  const [selections, setSelections] = useState<Record<string, SelectionType>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subtotal = Object.values(selections).reduce((sum, val) => {
    if (typeof val === "object" && val !== null) return sum + val.price;
    return sum;
  }, 0);

  const managementFee = subtotal > 0 ? subtotal * 0.15 : 0;
  const extraCharges = subtotal > 0 ? subtotal * 0.05 : 0;
  const estimatedTotal = subtotal + managementFee + extraCharges;

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const selectVendor = (category: string, vendor: Vendor) => {
    setSelections(prev => ({ ...prev, [category]: vendor }));
    setTimeout(handleNext, 300);
  };

  const skipCategory = (category: string) => {
    setSelections(prev => ({ ...prev, [category]: "management" }));
    handleNext();
  };

  return (
    <motion.section id="quote" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Plan Your Perfect Event</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Follow the steps to customize your package, or leave choices to our experts.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT SIDE: Wizard */}
          <div className="w-full lg:w-2/3 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100 min-h-[600px] flex flex-col relative overflow-hidden">
            <div className="w-full bg-gray-100 rounded-full h-2.5 mb-8">
              <div className="bg-rose-600 h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${(step / (vendorCategories.length + 1)) * 100}%` }}></div>
            </div>

            <div className="flex-grow">
              <AnimatePresence mode="wait">
                
                {/* STEP 0: EVENT DETAILS (Sliders) */}
                {step === 0 && (
                  <motion.div key="step-0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    
                    {/* Event Type */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">1. Event Type</h3>
                      <div className="flex flex-wrap gap-3">
                        {eventTypes.map(type => (
                          <button key={type} onClick={() => setSelectedEventType(type)} className={`px-5 py-2.5 rounded-full font-bold transition-all border-2 ${selectedEventType === type ? "border-rose-600 bg-rose-50 text-rose-700" : "border-gray-200 text-gray-600 hover:border-rose-300"}`}>
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Leave to Management Checkbox */}
                    <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <input type="checkbox" id="mgmt" checked={leaveDetailsToMgmt} onChange={(e) => setLeaveDetailsToMgmt(e.target.checked)} className="w-5 h-5 accent-rose-600 rounded" />
                      <label htmlFor="mgmt" className="font-semibold text-gray-800 cursor-pointer">I'm not sure about Guest Count & Food. Leave it to Management.</label>
                    </div>

                    {/* Sliders (Disabled if leaving to mgmt) */}
                    <div className={`space-y-8 transition-opacity ${leaveDetailsToMgmt ? "opacity-30 pointer-events-none" : "opacity-100"}`}>
                      
                      {/* Guest Slider */}
                      <div>
                        <div className="flex justify-between items-end mb-2">
                          <h3 className="text-xl font-bold text-gray-900">2. Expected Attendees</h3>
                          <input type="number" min="10" max="2000" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-24 border-b-2 border-gray-300 focus:border-rose-600 outline-none text-right font-bold text-xl text-rose-600 bg-transparent" />
                        </div>
                        <input type="range" min="10" max="1000" step="10" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-600" />
                        <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold"><span>10</span><span>1000+</span></div>
                      </div>

                      {/* Food Preference Slider */}
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2">3. Food Preference</h3>
                         <div className="flex justify-between text-sm font-bold mb-2">
                           <span className="text-green-600 text-lg">Vegetarian: {vegPercent}%</span>
                           <span className="text-red-500 text-lg">Non-Veg: {100 - vegPercent}%</span>
                         </div>
                         <input type="range" min="0" max="100" step="5" value={vegPercent} onChange={(e) => setVegPercent(Number(e.target.value))} className="w-full h-2 bg-gradient-to-r from-green-500 to-red-500 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md" />
                      </div>
                    </div>

                    <button onClick={handleNext} className="w-full py-4 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 transition shadow-lg text-lg">
                      Continue to Vendors
                    </button>
                  </motion.div>
                )}

                {/* STEPS 1-N: VENDOR CATEGORIES */}
                {step > 0 && step <= vendorCategories.length && (
                  <motion.div key={`step-${step}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Select {vendorCategories[step - 1]}</h3>
                      <button onClick={handlePrev} className="text-gray-500 hover:text-rose-600 flex items-center gap-1 font-bold text-sm bg-gray-100 px-3 py-1 rounded-full"><ChevronLeft size={16} /> Back</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow overflow-y-auto no-scrollbar pb-20">
                      {vendors.filter(v => v.category === vendorCategories[step - 1]).map(vendor => (
                        <div key={vendor.id} onClick={() => selectVendor(vendor.category, vendor)} className="cursor-pointer rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-rose-500 hover:shadow-lg transition-all group bg-white">
                          <div className="h-40 overflow-hidden relative">
                            <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="p-4 flex justify-between items-center bg-white relative z-10">
                            <div>
                              <h4 className="font-bold text-gray-900 text-[15px] leading-tight mb-1">{vendor.name}</h4>
                              
                              {/* RATING DISPLAY ADDED HERE */}
                              <div className="flex items-center gap-1 mb-1">
                                <Star size={14} className="text-yellow-500" fill="currentColor" />
                                <span className="text-xs font-bold text-gray-600">{vendor.rating} / 5.0</span>
                              </div>
                              
                              <p className="text-rose-600 font-bold text-sm">${vendor.price.toLocaleString()}</p>
                            </div>
                            <div className="bg-gray-100 p-2 rounded-full group-hover:bg-rose-100"><ChevronRight className="text-gray-400 group-hover:text-rose-600" /></div>

                          </div>
                        </div>
                      ))}
                    </div>

                    {/* NEW SKIP BUTTON */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-12">
                      <button onClick={() => skipCategory(vendorCategories[step - 1])} className="w-full py-4 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 transition border border-gray-200">
                        Skip & Leave to Management
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* FINAL STEP: REVIEW */}
                {step > vendorCategories.length && (
                  <motion.div key="step-final" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="text-center py-10">
                      <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
                      <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Your Plan is Ready!</h3>
                      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">Review your estimated receipt. When you are ready, submit your inquiry to our concierges.</p>
                      <button onClick={handlePrev} className="text-rose-600 hover:text-rose-800 font-bold underline decoration-2 underline-offset-4">Go back and edit choices</button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: Receipt */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-900 rounded-3xl shadow-xl p-8 sticky top-24 border border-gray-800 text-white">
              <h3 className="text-2xl font-bold mb-4">Estimate Summary</h3>
              
              <div className="bg-gray-800/50 p-4 rounded-xl mb-6 border border-gray-700">
                <p className="font-bold text-rose-400 mb-1">{selectedEventType}</p>
                {leaveDetailsToMgmt ? (
                  <p className="text-xs text-gray-400">Guest & Food details left to management.</p>
                ) : (
                  <p className="text-xs text-gray-400">{guests} Guests • {vegPercent}% Veg / {100-vegPercent}% Non-Veg</p>
                )}
              </div>
              
              <div className="space-y-4 mb-6 min-h-[150px] text-sm">
                {vendorCategories.map(cat => {
                  const sel = selections[cat];
                  if (!sel) return null;
                  return (
                    <div key={cat} className="flex justify-between items-center pb-2 border-b border-gray-800/50">
                      <div className="flex-1">
                        <p className="text-gray-500 text-xs font-semibold uppercase">{cat}</p>
                        <p className="font-medium text-gray-200">{sel === "management" ? "To be decided" : sel === "none" ? "None" : sel.name}</p>
                      </div>
                      <p className="font-semibold text-gray-300">{sel === "management" ? "TBD" : sel === "none" ? "$0" : `$${sel.price.toLocaleString()}`}</p>
                    </div>
                  );
                })}
              </div>

              {subtotal > 0 && (
                <div className="border-t border-gray-800 pt-4 space-y-2 text-sm mb-6 text-gray-400">
                  <div className="flex justify-between"><span>Base Subtotal</span><span>${subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Mgmt Fee (15%)</span><span>${managementFee.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Misc (5%)</span><span>${extraCharges.toLocaleString()}</span></div>
                </div>
              )}

              <div className="border-t-2 border-rose-500 pt-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-bold text-white">Estimated Total</span>
                  <span className="text-3xl font-extrabold text-rose-500">${estimatedTotal.toLocaleString()}</span>
                </div>
                <p className="text-[11px] text-gray-500 italic leading-tight text-right">*Disclaimer: This is an estimated baseline. Actual prices will vary based on guest count, custom requirements, and date.</p>
              </div>

              <button onClick={() => setIsModalOpen(true)} disabled={step <= vendorCategories.length} className="w-full py-4 rounded-xl font-bold text-lg transition-all text-white disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed bg-rose-600 hover:bg-rose-700 shadow-lg">
                Proceed & Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} eventType={selectedEventType} selections={selections} estimatedTotal={estimatedTotal} />
    </motion.section>
  );
}