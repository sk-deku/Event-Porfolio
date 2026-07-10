"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ArrowLeft, CheckCircle, UploadCloud } from "lucide-react";

export default function VendorPortal() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for registration/login
    setTimeout(() => {
      setIsSubmitting(false);
      if (!isLogin) setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex">
      
      {/* Left Side: Branding & Info (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10"></div>
        
        <div className="relative z-20 text-white max-w-lg">
          <Link href="/" className="flex items-center gap-2 mb-12 hover:opacity-80 transition">
            <ArrowLeft size={20} /> Back to main site
          </Link>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Grow your business with LuxeEvents.</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our network of elite photographers, caterers, decorators, and waste management professionals. Connect with high-budget clients directly.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-rose-500" /> 70+ Premium Events Yearly</div>
            <div className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-rose-500" /> Guaranteed Payments</div>
            <div className="flex items-center gap-3 text-gray-300"><CheckCircle className="text-rose-500" /> Dedicated Vendor Support</div>
          </div>
        </div>
      </div>

      {/* Right Side: Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative overflow-y-auto">
        
        {/* Mobile Back Button */}
        <Link href="/" className="lg:hidden absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition font-medium">
          <ArrowLeft size={20} /> Back
        </Link>

        <div className="w-full max-w-md mt-12 lg:mt-0">
          <div className="flex items-center gap-2 mb-10 justify-center lg:justify-start">
            <CalendarDays className="h-8 w-8 text-rose-600" />
            <span className="font-extrabold text-2xl tracking-tight text-gray-900">LuxeEvents Partner</span>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* SUCCESS STATE */
              <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center bg-green-50 p-8 rounded-3xl border border-green-100">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for applying. Our quality assurance team will review your portfolio and work validation links. We will email you within 48 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="text-rose-600 font-bold hover:underline">
                  Return to login
                </button>
              </motion.div>
            ) : (
              /* FORM STATE */
              <motion.div key="form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                
                <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                  <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${!isLogin ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}>
                    Register Business
                  </button>
                  <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${isLogin ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}>
                    Login
                  </button>
                </div>

                <div className="mb-8">
                  <h2 className="text-3xl font-extrabold text-gray-900">{isLogin ? "Welcome back" : "Become a Partner"}</h2>
                  <p className="text-gray-500 mt-2">{isLogin ? "Enter your credentials to access your dashboard." : "Fill out the form below to apply for our vendor network."}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-1">Business Name</label>
                        <input required type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400" placeholder="e.g. Sonic Sound DJs" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-1">Service Category</label>
                        <select required className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold bg-white cursor-pointer">
                          <option value="">Select a category...</option>
                          <option value="photographer">Photography & Videography</option>
                          <option value="catering">Catering & Food Services</option>
                          <option value="decorator">Decorators & Florists</option>
                          <option value="dj">DJs & Live Music</option>
                          <option value="venue">Venue / Real Estate</option>
                          <option value="makeup">Makeup & Styling</option>
                          <option value="waste">Waste Management & Cleanup</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-1">Work Validation (Portfolio / Website URL)</label>
                        <div className="relative">
                          <UploadCloud className="absolute left-4 top-3.5 text-gray-400" size={20} />
                          <input required type="url" className="w-full border-2 border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400" placeholder="https://yourwork.com" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">*Required by our team to verify service quality.</p>
                      </div>
                    </>
                  )}
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Email Address</label>
                    <input required type="email" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Password</label>
                    <input required type="password" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-rose-500 outline-none text-black font-semibold placeholder:text-gray-400" placeholder="••••••••" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full mt-2 bg-rose-600 text-white font-bold py-4 rounded-xl hover:bg-rose-700 transition disabled:bg-rose-400 flex justify-center items-center shadow-lg hover:shadow-rose-500/30">
                    {isSubmitting ? <span className="animate-pulse">Processing...</span> : (isLogin ? "Sign In" : "Submit Application")}
                  </button>
                </form>

              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </main>
  );
}