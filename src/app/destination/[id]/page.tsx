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
        
        const fallbackStory = {
          whyVisit: "Explore unique experiences",
          whyFamous: "Famous for culture and beauty",
          places: ["City Center"],
          food: ["Local Cuisine"],
          culture: "Rich heritage",
          weather: "Pleasant",
          distance: "Unknown",
          travelTime: "Unknown",
          personalizedReason: "A beautiful place to visit."
        };

        if (stored) {
          const parsed = JSON.parse(stored);
          console.log("SELECTED", parsed);
          import("../../../data/destinations").then(({ ALL_DESTINATIONS }) => {
            const matched = ALL_DESTINATIONS.find(d => slug(d.name) === unwrappedParams.id);
            if (matched) {
              if (isMounted) setDestData(matched);
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

  useEffect(() => {
    if (destData) {
      console.log("SELECTED", destData);
      console.log("IMAGE", destData.image);
      console.log("STORY", destData.story);
    }
  }, [destData]);

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
    whyVisit: "Explore unique experiences",
    whyFamous: "Famous for culture and beauty",
    places: ["City Center"],
    food: ["Local Cuisine"],
    culture: "Rich heritage",
    weather: "Pleasant",
    distance: "Unknown",
    travelTime: "Unknown",
    personalizedReason: "A beautiful place to visit."
  };

  const s = destData.story || fallbackStory;
  const imageToUse = destData.image || "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070";

  return (
    <main key={unwrappedParams.id} ref={containerRef} className="relative w-full bg-[#F8F7F4] text-[#111111] min-h-[300vh]">
      {/* 1. Hero Section */}
      <div className="relative w-full h-screen overflow-hidden sticky top-0 bg-[#111111]">
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-[#111111]"
          style={{ backgroundImage: `url(${imageToUse})`, y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#111111]" />
        </motion.div>
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-[#F8F7F4] px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-6xl md:text-[8rem] font-serif tracking-tight leading-none mb-6 uppercase"
          >
            {destData.name.replace('✦ ', '')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="font-sans text-sm md:text-lg tracking-[0.4em] uppercase text-white/80 mb-8"
          >
            {destData.country}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="font-serif italic text-xl md:text-2xl text-[#D6B36A] max-w-2xl"
          >
            {destData.description}
          </motion.p>
        </div>
      </div>

      <div className="relative z-20 bg-[#F8F7F4] pt-32 pb-48 px-6 md:px-24 flex flex-col gap-32 md:gap-48 border-t border-[#111111]/10">
        
        <Section title="Why Visit?" content={s.whyVisit} img={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' emotional scenic landscape')}?width=1000&height=1000&nologo=true`} index={0} />
        
        <Section title="Why Famous?" content={s.whyFamous} img={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' famous landmark cinematic')}?width=1000&height=1000&nologo=true`} index={1} />
        
        <Section title="Culture" content={s.culture} img={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' local culture traditional cinematic')}?width=1000&height=1000&nologo=true`} index={2} />

        <Section title="Food" content={s.food?.join(" • ")} img={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' delicious authentic food plating')}?width=1000&height=1000&nologo=true`} index={3} />
        
        <Section title="Places to Visit" content={s.places?.join(" • ")} img={`https://image.pollinations.ai/prompt/${encodeURIComponent(destData.name.replace('✦ ', '') + ' beautiful places exploring')}?width=1000&height=1000&nologo=true`} index={4} />

        {/* Travel Logistics Grid */}
        <div className="max-w-6xl mx-auto w-full pt-16 border-t border-[#111111]/10">
          <h3 className="text-4xl font-serif mb-16 text-center text-[#111111]">Logistics & Context</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <LogisticsCard icon={<Cloud />} title="Weather" content={s.weather} />
            <LogisticsCard icon={<Calendar />} title="Duration" content={destData.duration} />
            <LogisticsCard icon={<MapPin />} title="Distance" content={s.distance} />
            <LogisticsCard icon={<Plane />} title="Travel Time" content={s.travelTime} />
            <LogisticsCard icon={<CreditCard />} title="Budget" content={destData.budget} />
            
            <div className="p-8 border border-[#D6B36A]/20 rounded-sm bg-[#D6B36A]/5 col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center">
              <h4 className="font-sans text-xs tracking-widest uppercase text-[#D6B36A] mb-4">Why this matches you</h4>
              <p className="font-serif italic text-lg leading-relaxed text-[#111111]">&quot;{s.personalizedReason}&quot;</p>
            </div>
            
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-24 border-t border-brand-text/10">
          <PremiumButton
            onClick={() => {
              sessionStorage.setItem("manifest", JSON.stringify(destData));
              router.push("/manifest");
            }}
            className="border border-[#111111]/20 hover:border-[#D6B36A] text-[#111111]"
          >
            <span>Build My Manifest</span>
            <motion.div animate={{ x: 0 }} whileHover={{ x: 4 }}>
              <ArrowRight className="w-4 h-4 text-[#D6B36A]" />
            </motion.div>
          </PremiumButton>
        </div>
      </div>
    </main>
  );
}

function Section({ title, content, img, index }: { title: string, content: string, img: string, index: number }) {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { setIsMounted(true); }, []);
  
  const { scrollYProgress } = useScroll({
    target: isMounted ? ref : undefined,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32 min-h-[70vh]`}>
      <motion.div 
        style={{ opacity, scale }}
        className="w-full md:w-1/2 overflow-hidden h-[50vh] md:h-[70vh] rounded-sm"
      >
        <motion.div 
          style={{ y }}
          className="w-full h-[140%] bg-cover bg-center -mt-[20%]"
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover bg-gradient-to-br from-[#111111] to-[#333333]" 
            onError={(e) => {
              if (e.currentTarget.src !== "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070") {
                e.currentTarget.src = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070";
              }
            }}
          />
        </motion.div>
      </motion.div>
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-0">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-8 text-brand-text capitalize"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-serif italic text-brand-secondary leading-relaxed"
        >
          {content}
        </motion.p>
      </div>
    </div>
  );
}

function LogisticsCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="p-8 border border-brand-text/10 rounded-sm hover:border-brand-accent/50 transition-colors duration-500 flex flex-col h-full">
      <div className="text-brand-accent mb-6 w-6 h-6">{icon}</div>
      <h4 className="font-sans text-xs tracking-widest uppercase text-brand-secondary mb-2">{title}</h4>
      <p className="font-serif text-xl text-brand-text flex-grow">{content}</p>
    </div>
  );
}
