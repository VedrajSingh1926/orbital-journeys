"use client";

import { use, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Cloud, Calendar, Plane, CreditCard } from "lucide-react";
import PremiumButton from "../../../components/PremiumButton";
import { useRouter } from "next/navigation";

const slug = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

export default function DestinationStory({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [destData, setDestData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const loadStory = () => {
      setLoading(true);
      try {
        const stored = sessionStorage.getItem("selectedDestination");
        const parsed = stored ? JSON.parse(stored) : null;
        
        console.log("SESSION", sessionStorage.getItem("journey"));
        console.log("SELECTED", parsed);
        console.log("STORY", parsed?.story);
        
        const fallbackStory = {
          whyVisit: "Explore unique experiences tailored for you",
          whyFamous: "Known for culture, history, and beauty",
          culture: "A rich tapestry of heritage and traditions",
          food: ["Local Cuisine", "Street Food", "Fine Dining"],
          places: ["City Center", "Historical Monuments", "Nature Trails"],
          weather: "Pleasant",
          budget: "$$",
          distance: "Unknown",
          travelTime: "Unknown",
          personalizedReason: "This destination perfectly matches your travel mood."
        };

        if (parsed) {
          import("../../../data/destinations").then(({ ALL_DESTINATIONS }) => {
            const matched = ALL_DESTINATIONS.find(d => slug(d.name) === unwrappedParams.id);
            if (matched) {
              // CRITICAL FIX: Merge the matched local data with the parsed session data
              // so we don't throw away the AI enhancements (story, match percentage, etc)
              if (isMounted) setDestData({ 
                ...matched, 
                ...parsed,
                story: { ...matched.story, ...parsed.story }
              });
            } else {
              if (!parsed.story) parsed.story = fallbackStory;
              if (isMounted) setDestData(parsed);
            }
          });
        } else {
          // Fallback
          import("../../../data/destinations").then(({ ALL_DESTINATIONS }) => {
            const matched = ALL_DESTINATIONS.find(d => slug(d.name) === unwrappedParams.id) || ALL_DESTINATIONS[0];
            console.log("SELECTED", matched);
            if (isMounted) setDestData(matched);
          });
        }
      } catch (e) {
        console.error("Error reading destination data", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    
    loadStory();
    return () => { isMounted = false; };
  }, [unwrappedParams.id]);


  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll(); // Use window scroll to avoid hydration errors

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (loading) {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center bg-[#F8F7F4] text-[#111111]">
         <motion.p
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="font-serif text-2xl tracking-wide z-10"
         >
           Preparing your story...
         </motion.p>
      </main>
    );
  }

  if (!destData) return <div className="h-screen w-full bg-[#F8F7F4] flex items-center justify-center text-[#111111] text-xl font-serif">Journey data unavailable.</div>;

  const fallbackStory = {
    whyVisit: "Explore unique experiences tailored for you",
    whyFamous: "Known for culture, history, and beauty",
    culture: "A rich tapestry of heritage and traditions",
    food: ["Local Cuisine", "Street Food", "Fine Dining"],
    places: ["City Center", "Historical Monuments", "Nature Trails"],
    weather: "Pleasant",
    budget: "$$",
    distance: "Unknown",
    travelTime: "Unknown",
    personalizedReason: "This destination perfectly matches your travel mood."
  };

  const s = destData.story || fallbackStory;
  const imageToUse = destData.image || "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070";

  return (
    <>
      <main key={unwrappedParams.id} className="relative w-full bg-[#F8F7F4] text-[#111111]">
        {/* Subtle Paper Texture Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
        
        {/* 1. Hero Section - Changed from sticky h-screen to relative h-[80vh] to fix scroll trapping */}
        <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-[#111111] z-10">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-[#111111]"
            style={{ backgroundImage: `url(${imageToUse})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#111111]" />
          </div>
          
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-[#F8F7F4] px-4 pt-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-5xl md:text-[8rem] font-serif tracking-tight leading-none mb-6 uppercase drop-shadow-2xl"
            >
              {destData.name.replace('✦ ', '')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="font-sans text-sm md:text-lg tracking-[0.4em] uppercase text-white/90 mb-8"
            >
              {destData.country}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="font-serif italic text-xl md:text-2xl text-[#D6B36A] max-w-2xl px-4"
            >
              {destData.description}
            </motion.p>
          </div>
        </div>

        {/* 2. Story Sections (Direct Rendering with Premium Image Layouts) */}
        <div className="relative z-20 bg-[#F8F7F4] pt-24 pb-32 px-4 md:px-16 xl:px-24 flex flex-col gap-32 border-t border-[#111111]/10">
          
          {/* Why Visit: Large Asymmetric Right Banner */}
          <section className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111111] capitalize">Why Visit</h2>
              <p className="text-lg md:text-2xl font-serif italic text-[#555555] leading-relaxed">{s?.whyVisit}</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-[24px] shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' cinematic emotional landscape premium photography')}?width=1200&height=1600&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/1200/1600"; }}
                  alt="Landscape" 
                  className="w-full h-[60vh] object-cover" 
                />
              </div>
            </div>
          </section>

          {/* Why Famous: Dual Stacked Left Cards */}
          <section className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2 mt-0 sm:mt-12 overflow-hidden rounded-[24px] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' famous landmark architecture detail')}?width=800&height=1200&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/800/1200"; }}
                  alt="Detail 1" 
                  className="w-full h-[40vh] object-cover" 
                />
              </div>
              <div className="w-full sm:w-1/2 mb-0 sm:mb-12 overflow-hidden rounded-[24px] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' famous landmark cinematic wide')}?width=800&height=1200&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/800/1200?random=1"; }}
                  alt="Detail 2" 
                  className="w-full h-[40vh] object-cover" 
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111111] capitalize">Why Famous</h2>
              <p className="text-lg md:text-2xl font-serif italic text-[#555555] leading-relaxed">{s?.whyFamous}</p>
            </div>
          </section>

          {/* Culture: Masonry Center Bridge */}
          <section className="max-w-7xl mx-auto w-full flex flex-col items-center gap-16">
            <div className="max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111111] capitalize">Culture & Heritage</h2>
              <p className="text-lg md:text-2xl font-serif italic text-[#555555] leading-relaxed">{s?.culture}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <div className="overflow-hidden rounded-[24px] shadow-lg transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' traditional culture closeup')}?width=600&height=600&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/600/600?random=2"; }}
                  alt="Culture 1" 
                  className="w-full h-[30vh] object-cover" 
                />
              </div>
              <div className="overflow-hidden rounded-[24px] shadow-lg transition-transform duration-700 hover:scale-[1.02] sm:-mt-8 sm:mb-8">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' local people candid cinematic')}?width=600&height=600&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/600/600?random=3"; }}
                  alt="Culture 2" 
                  className="w-full h-[30vh] object-cover" 
                />
              </div>
              <div className="overflow-hidden rounded-[24px] shadow-lg transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' local art or craft traditional')}?width=600&height=600&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/600/600?random=4"; }}
                  alt="Culture 3" 
                  className="w-full h-[30vh] object-cover" 
                />
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto w-full mt-12 text-center px-4">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111111] capitalize">Food & Drink</h2>
            <p className="text-lg md:text-2xl font-serif italic text-[#555555] leading-relaxed">
              {s?.food ? (Array.isArray(s.food) ? s.food.join(" • ") : s.food) : "Explore local cuisine"}
            </p>
          </section>
          
          <section className="max-w-4xl mx-auto w-full text-center px-4">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111111] capitalize">Iconic Places</h2>
            <p className="text-lg md:text-2xl font-serif italic text-[#555555] leading-relaxed">
              {s?.places ? (Array.isArray(s.places) ? s.places.join(" • ") : s.places) : "Discover iconic landmarks"}
            </p>
          </section>

          {/* Travel Logistics Grid */}
          <section className="max-w-6xl mx-auto w-full pt-24 border-t border-[#111111]/10 px-4">
            <h3 className="text-4xl font-serif mb-16 text-center text-[#111111]">Logistics & Context</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              
              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#F8F7F4]/80 shadow-sm">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><Cloud /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Weather</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{s?.weather}</p>
              </div>

              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#F8F7F4]/80 shadow-sm">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><Calendar /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Duration</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{destData.duration}</p>
              </div>

              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#F8F7F4]/80 shadow-sm">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><MapPin /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Distance</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{s?.distance}</p>
              </div>

              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#F8F7F4]/80 shadow-sm">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><Plane /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Travel Time</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{s?.travelTime}</p>
              </div>

              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#F8F7F4]/80 shadow-sm">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><CreditCard /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Budget</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{destData.budget}</p>
              </div>
              
              <div className="p-8 border border-[#D6B36A]/30 rounded-[24px] bg-[#D6B36A]/5 col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center shadow-sm">
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#D6B36A] mb-4">Why this matches you</h4>
                <p className="font-serif italic text-lg leading-relaxed text-[#111111]">&quot;{s?.personalizedReason}&quot;</p>
              </div>
              
            </div>
          </section>

          {/* CTA */}
          <section className="w-full pt-32 pb-32 mt-16 border-t-2 border-b-2 border-dashed border-[#111111]/20 bg-[#111111]/5 flex flex-col items-center justify-center">
            <h2 className="font-serif text-5xl md:text-7xl mb-12 text-[#111111] uppercase tracking-tight text-center px-4">
              Manifest Your Journey
            </h2>
            <button
              onClick={() => {
                sessionStorage.setItem("selectedJourney", JSON.stringify(destData));
                router.push("/manifest");
              }}
              className="group relative flex items-center justify-center px-12 py-6 overflow-hidden rounded-sm bg-[#111111] text-[#F8F7F4] hover:bg-[#D6B36A] hover:text-[#111111] transition-colors duration-1000 shadow-2xl"
            >
              <span className="relative z-10 font-sans tracking-widest uppercase text-sm font-bold">
                [ Confirm Journey ]
              </span>
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
