"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { SelectionType } from "./BudgetPlanner"; // Import the type from the planner

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventType: string;
  selections: Record<string, SelectionType>;
  estimatedTotal: number;
}

export default function InquiryModal({ isOpen, onClose, eventType, selections, estimatedTotal }: InquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        
        <div className="bg-gray-900 px-6 py-4 flex justify-between items-center text-white shrink-0">
          <h3 className="text-xl font-bold">Complete Your Inquiry</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-10">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Inquiry Submitted!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you! Our management team will review your estimated plan for your <strong>{eventType}</strong>. We will contact you within 24 hours to discuss final pricing and availability.
              </p>
              <button 
                onClick={onClose}
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              
              {/* Left: Summary */}
              <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-2xl h-fit border border-gray-200 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2">Plan Summary</h4>
                <p className="text-sm font-semibold text-rose-600 mb-4">{eventType}</p>
                
                <div className="space-y-3 mb-6 text-sm">
                  {Object.entries(selections).map(([cat, sel]) => (
                    <div key={cat} className="flex justify-between text-gray-600 border-b border-gray-200/50 pb-2">
                      <span className="font-medium text-xs uppercase">{cat}</span>
                      <span className="font-semibold text-gray-900 text-right max-w-[120px] truncate">
                        {sel === "management" ? "Mgmt Decision" : sel === "none" ? "None" : sel.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-300 pt-4 flex flex-col gap-1">
                  <span className="text-xs text-gray-500 font-bold uppercase">Estimated Total</span>
                  <span className="text-2xl font-black text-rose-600">${estimatedTotal.toLocaleString()}</span>
                  <p className="text-[10px] text-gray-400 mt-2 leading-tight">
                    *Final price varies based on management review and actual event requirements.
                  </p>
                </div>
              </div>

              {/* Right: Form (With Black High-Contrast Text) */}
              <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">First Name</label>
                    <input required type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400 placeholder:font-normal transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Last Name</label>
                    <input required type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400 placeholder:font-normal transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Email</label>
                    <input required type="email" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400 placeholder:font-normal transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Phone</label>
                    <input required type="tel" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400 placeholder:font-normal transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Estimated Date</label>
                    <input required type="date" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400 placeholder:font-normal transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Expected Guests</label>
                    <input required type="number" min="10" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400 placeholder:font-normal transition-colors" placeholder="e.g. 150" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-rose-600 text-white font-bold py-4 rounded-xl hover:bg-rose-700 transition disabled:bg-rose-400 disabled:cursor-not-allowed flex justify-center items-center shadow-lg hover:shadow-rose-500/30 text-lg"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Submitting Inquiry...</span>
                  ) : (
                    "Submit Official Inquiry"
                  )}
                </button>
              </form>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}