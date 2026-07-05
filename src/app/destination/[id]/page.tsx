"use client";

import { use, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Cloud, Calendar, Plane, CreditCard, Sparkles, Coffee, Map, Compass, Camera } from "lucide-react";
import PremiumButton from "../../../components/PremiumButton";
import { useRouter } from "next/navigation";

const slug = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

export default function DestinationStory({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const router = useRouter();
  const [destData, setDestData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    const loadStory = () => {
      setLoading(true);
      try {
        const stored = sessionStorage.getItem("selectedDestination");
        const parsed = stored ? JSON.parse(stored) : null;
        
        if (parsed) {
          import("../../../data/destinations").then(({ ALL_DESTINATIONS_INDIA, ALL_DESTINATIONS_INTL }) => {
            const all = [...ALL_DESTINATIONS_INDIA, ...ALL_DESTINATIONS_INTL];
            const matched = all.find(d => slug(d.name) === unwrappedParams.id);
            if (matched) {
              if (isMounted) setDestData({ 
                ...matched, 
                ...parsed,
                story: { ...matched.story, ...parsed.story }
              });
            } else {
              if (isMounted) setDestData(parsed);
            }
          });
        } else {
          import("../../../data/destinations").then(({ ALL_DESTINATIONS_INDIA }) => {
            const matched = ALL_DESTINATIONS_INDIA.find(d => slug(d.name) === unwrappedParams.id) || ALL_DESTINATIONS_INDIA[0];
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

  if (loading) {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center bg-[#FCFBF7] text-[#111111]">
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

  if (!destData) return <div className="h-screen w-full bg-[#FCFBF7] flex items-center justify-center text-[#111111] text-xl font-serif">Journey data unavailable.</div>;

  const s = destData.story;
  const iQuery = destData.imageQuery || `${destData.name} cinematic luxury travel`;

  return (
    <>
      <main key={unwrappedParams.id} className="relative w-full bg-[#FCFBF7] text-[#111111]">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
        
        {/* 1. Hero Section */}
        <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-[#111111] z-10">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src={`https://image.pollinations.ai/prompt/${encodeURIComponent(iQuery + ' epic wide shot')}?width=1920&height=1080&nologo=true`} 
              className="w-full h-full object-cover opacity-60"
              alt="Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#111111]" />
          </div>
          
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-[#FCFBF7] px-4 pt-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-5xl md:text-[8rem] font-serif tracking-tight leading-none mb-6 uppercase drop-shadow-2xl"
            >
              {s?.heroTitle || destData.name.replace('✦ ', '')}
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
              className="font-serif italic text-xl md:text-2xl text-[#D6B36A] max-w-3xl px-4"
            >
              {s?.heroSubtitle || destData.description}
            </motion.p>
          </div>
        </div>

        {/* 2. Story Sections */}
        <div className="relative z-20 bg-[#FCFBF7] pt-24 pb-32 px-4 md:px-16 xl:px-24 flex flex-col gap-32 border-t border-[#111111]/10">
          
          <section className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111111] capitalize">Why Visit</h2>
              <p className="text-lg md:text-xl font-serif text-[#555555] leading-relaxed">{s?.whyVisit}</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-[24px] shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(iQuery + ' emotional landscape premium photography')}?width=1200&height=1600&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/1200/1600"; }}
                  alt="Landscape" 
                  className="w-full h-[60vh] object-cover" 
                />
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
            <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2 mt-0 sm:mt-12 overflow-hidden rounded-[24px] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(iQuery + ' famous landmark architecture detail')}?width=800&height=1200&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/800/1200"; }}
                  alt="Detail 1" 
                  className="w-full h-[40vh] object-cover" 
                />
              </div>
              <div className="w-full sm:w-1/2 mb-0 sm:mb-12 overflow-hidden rounded-[24px] shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src={`https://image.pollinations.ai/prompt/${encodeURIComponent(iQuery + ' local culture candid')}?width=800&height=1200&nologo=true`} 
                  onError={(e) => { e.currentTarget.src = "https://picsum.photos/800/1200?random=1"; }}
                  alt="Detail 2" 
                  className="w-full h-[40vh] object-cover" 
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#111111] capitalize">Why Famous</h2>
              <p className="text-lg md:text-xl font-serif text-[#555555] leading-relaxed">{s?.whyFamous}</p>
            </div>
          </section>

          {/* Places & Food Grid */}
          <section className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Map className="w-8 h-8 text-[#D6B36A]" />
                <h2 className="text-4xl font-serif text-[#111111]">Iconic Places</h2>
              </div>
              <div className="flex flex-col gap-6">
                {s?.places?.map((p: any, i: number) => (
                  <div key={i} className="border-l-2 border-[#D6B36A] pl-6 py-2">
                    <h3 className="font-serif text-2xl text-[#111111] mb-2">{p.name}</h3>
                    <p className="font-sans text-[#777777]">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Coffee className="w-8 h-8 text-[#D6B36A]" />
                <h2 className="text-4xl font-serif text-[#111111]">Culinary Journey</h2>
              </div>
              <div className="flex flex-col gap-6">
                {s?.food?.map((f: any, i: number) => (
                  <div key={i} className="border-l-2 border-[#D6B36A] pl-6 py-2">
                    <h3 className="font-serif text-2xl text-[#111111] mb-2">{f.name}</h3>
                    <p className="font-sans text-[#777777]">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hidden Gems & Tips */}
          <section className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111111] text-[#FCFBF7] p-8 rounded-[24px] flex flex-col gap-6">
              <div className="flex items-center gap-3 text-[#D6B36A]">
                <Compass className="w-6 h-6" />
                <h3 className="font-serif text-2xl">Hidden Gems</h3>
              </div>
              <ul className="flex flex-col gap-4 font-sans text-white/80 text-sm">
                {s?.hiddenGems?.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#D6B36A]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#111111] text-[#FCFBF7] p-8 rounded-[24px] flex flex-col gap-6">
              <div className="flex items-center gap-3 text-[#D6B36A]">
                <Camera className="w-6 h-6" />
                <h3 className="font-serif text-2xl">Instagram Spots</h3>
              </div>
              <ul className="flex flex-col gap-4 font-sans text-white/80 text-sm">
                {s?.instagramSpots?.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#D6B36A]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#111111] p-8 rounded-[24px] flex flex-col gap-6">
              <div className="flex items-center gap-3 text-[#D6B36A]">
                <Sparkles className="w-6 h-6" />
                <h3 className="font-serif text-2xl">Travel Tips</h3>
              </div>
              <ul className="flex flex-col gap-4 font-sans text-[#555555] text-sm">
                {s?.travelTips?.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#D6B36A]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Travel Logistics Grid */}
          <section className="max-w-6xl mx-auto w-full pt-24 border-t border-[#111111]/10 px-4">
            <h3 className="text-4xl font-serif mb-16 text-center text-[#111111]">Logistics & Context</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              
              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#FCFBF7]/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><Cloud /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Weather & Season</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{s?.weather} • Best in {s?.bestSeason}</p>
              </div>

              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#FCFBF7]/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><Calendar /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Duration</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{destData.duration || "7 Days"}</p>
              </div>

              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#FCFBF7]/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><MapPin /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Distance</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{destData?.distance || "Unknown"}</p>
              </div>

              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#FCFBF7]/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><Plane /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Travel Time</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{destData?.travelTime || "Unknown"}</p>
              </div>

              <div className="p-8 border border-[#111111]/10 rounded-[24px] hover:border-[#D6B36A]/50 transition-colors duration-500 flex flex-col h-full bg-[#FCFBF7]/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="text-[#D6B36A] mb-6 w-6 h-6"><CreditCard /></div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-[#777777] mb-2">Budget</h4>
                <p className="font-serif text-xl text-[#111111] flex-grow">{destData.budget || "$$"}</p>
              </div>
              
              <div className="p-8 border border-[#D6B36A]/30 rounded-[24px] bg-[#D6B36A]/5 col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
              className="group relative flex items-center justify-center px-12 py-6 overflow-hidden rounded-sm bg-[#111111] text-[#FCFBF7] hover:bg-[#D6B36A] hover:text-[#111111] transition-colors duration-1000 shadow-2xl"
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
