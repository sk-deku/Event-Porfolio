import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import BudgetPlanner from "@/components/BudgetPlanner";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 scroll-smooth relative">
      <Navbar />
      <Hero />
      
      {/* 1. Introduction & Stats */}
      <About />
      
      {/* 2. Show the Work */}
      <Portfolio />
      
      {/* 3. Build the Package */}
      <BudgetPlanner />
      
      {/* 4. Social Proof & Trust */}
      <Testimonials />
      <Partners />
      
      <Footer />
    </main>
  );
}