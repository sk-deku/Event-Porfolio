export const featuredEvents = [
  {
    id: 1,
    title: "The Royal Indian Wedding",
    category: "Marriage",
    budget: "$25,000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/5502945/5502945-hd_1920_1080_30fps.mp4", // Reliable Pexels MP4
    description: "A spectacular multi-day celebration featuring traditional ceremonies, premium catering, and breathtaking floral installations at a heritage venue.",
    reviews: [
      { clientName: "Priya & Rahul", text: "LuxeEvents made our dream wedding a reality! We didn't have to stress about a single detail. Truly magical." },
      { clientName: "Anjali (Mother of Bride)", text: "The team handled the massive guest list flawlessly. The food was spectacular!" },
      { clientName: "Vikram (Groom)", text: "From the DJ to the decor, everything was premium. Worth every penny." }
    ]
  },
  {
    id: 2,
    title: "Neon 21st Birthday Bash",
    category: "Birthday",
    budget: "$5,000",
    image: "https://images.unsplash.com/photo-1530103862676-de8892b07f87?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4",
    description: "A high-energy, neon-themed 21st birthday party featuring a club-grade sound system, custom LED lighting, and a private mixologist.",
    reviews: [
      { clientName: "Sarah Jenkins", text: "The best 21st birthday I could have asked for. The DJ was insane, and the neon aesthetic was perfectly executed!" },
      { clientName: "Mark (Friend)", text: "Best party of the year. The venue transformation was unbelievable." }
    ]
  },
  {
    id: 3,
    title: "Elegant Beach Vows",
    category: "Marriage",
    budget: "$15,000",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/3125905/3125905-hd_1920_1080_25fps.mp4",
    description: "An intimate, elegant beachside sunset wedding with minimalist boho decor, acoustic live music, and a curated seafood menu.",
    reviews: [
      { clientName: "Emma & David", text: "We wanted a quiet, elegant beach wedding and LuxeEvents delivered beyond our expectations." },
      { clientName: "Chloe (Maid of Honor)", text: "The sunset timing was planned to perfection. The photos look like a movie." }
    ]
  }
];

export const vendorCategories = ["Event Advisors", "Venues", "Photographers", "Catering", "Decorators", "DJs", "Makeup Artists"];

// Added rating to the interface
export interface Vendor { id: number; name: string; category: string; price: number; image: string; rating: number; }

export const vendors: Vendor[] = [
  // EVENT ADVISORS (New)
  { id: 1, name: "Sarah Jenkins (Senior Planner)", category: "Event Advisors", price: 1500, rating: 5.0, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" },
  { id: 2, name: "Marcus Thorne (Creative Director)", category: "Event Advisors", price: 2000, rating: 4.9, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" },
  { id: 3, name: "Elena Rostova (Budget Specialist)", category: "Event Advisors", price: 900, rating: 4.7, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop" },

  // VENUES
  { id: 101, name: "Sunset Beach Resort", category: "Venues", price: 5000, rating: 4.8, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=500&auto=format&fit=crop" },
  { id: 102, name: "Downtown Grand Hall", category: "Venues", price: 2500, rating: 4.5, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=500&auto=format&fit=crop" },
  { id: 103, name: "Cozy Garden Pavilion", category: "Venues", price: 1000, rating: 4.2, image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500&auto=format&fit=crop" },
  { id: 104, name: "The Glass Conservatory", category: "Venues", price: 3500, rating: 4.9, image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&auto=format&fit=crop" },
  
  // PHOTOGRAPHERS
  { id: 201, name: "Lens & Light Studios", category: "Photographers", price: 2000, rating: 5.0, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop" },
  { id: 202, name: "Candid Moments By Alex", category: "Photographers", price: 1200, rating: 4.6, image: "https://images.unsplash.com/photo-1537151608804-ea6fac81b838?q=80&w=500&auto=format&fit=crop" },
  { id: 203, name: "ProShots Basics", category: "Photographers", price: 600, rating: 3.9, image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=500&auto=format&fit=crop" },
  
  // CATERING
  { id: 301, name: "Royal Feast Catering", category: "Catering", price: 4000, rating: 4.9, image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=500&auto=format&fit=crop" },
  { id: 302, name: "Urban Bites & Tapas", category: "Catering", price: 2000, rating: 4.4, image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=500&auto=format&fit=crop" },
  
  // DECORATORS
  { id: 401, name: "Floral Fantasy", category: "Decorators", price: 1500, rating: 4.7, image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=500&auto=format&fit=crop" },
  { id: 402, name: "Minimalist Elegance", category: "Decorators", price: 900, rating: 4.3, image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=500&auto=format&fit=crop" },
  
  // DJs
  { id: 501, name: "DJ Sonic Boom", category: "DJs", price: 800, rating: 4.8, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=500&auto=format&fit=crop" },
  { id: 502, name: "The Classical Quartet", category: "DJs", price: 1200, rating: 4.9, image: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?q=80&w=500&auto=format&fit=crop" },
  
  // MAKEUP
  { id: 601, name: "Glamour Glow", category: "Makeup Artists", price: 500, rating: 4.9, image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=500&auto=format&fit=crop" },
  { id: 602, name: "Natural Radiance", category: "Makeup Artists", price: 350, rating: 4.5, image: "https://images.unsplash.com/photo-1516975080661-42bceb515a81?q=80&w=500&auto=format&fit=crop" }
];