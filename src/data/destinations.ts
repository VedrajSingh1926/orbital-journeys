export interface DestinationStory {
  whyVisit: string;
  whyFamous: string;
  culture: string;
  food: string[];
  places: string[];
  weather: string;
  distance: string;
  travelTime: string;
  personalizedReason: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  match: number | string;
  budget: string;
  duration: string;
  
  // Graph rendering data
  wave: string;
  x: number;
  y: number;
  isUnexpected?: boolean;
  isCustomSearch?: boolean;

  story: DestinationStory;
}

export const ALL_DESTINATIONS: Destination[] = [
  {
    id: "kyoto",
    name: "KYOTO",
    country: "JAPAN",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070",
    description: "Ancient temples whisper through morning mist.",
    match: "98%",
    budget: "₹85,000",
    duration: "7 Days",
    wave: "M 0 300 Q 200 200 400 300 T 800 300 T 1200 300",
    x: 300, y: 300,
    story: {
      whyVisit: "Kyoto offers a rare glimpse into the soul of traditional Japan.",
      whyFamous: "The harmonious blend of pristine nature and meticulous architecture.",
      culture: "Witnessing the profound tranquility of a traditional tea ceremony.",
      food: ["Kaiseki", "Matcha", "Yudofu"],
      places: ["Fushimi Inari", "Arashiyama Bamboo Grove", "Kinkaku-ji"],
      weather: "18°C",
      distance: "5800 KM",
      travelTime: "9 Hours",
      personalizedReason: "Matches your deep interest in cultural heritage and slow travel."
    }
  },
  {
    id: "bali",
    name: "BALI",
    country: "INDONESIA",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038",
    description: "Where the jungle meets spiritual devotion.",
    match: "95%",
    budget: "₹45,000",
    duration: "5 Days",
    wave: "M 0 150 Q 300 250 600 150 T 1200 150",
    x: 600, y: 150,
    story: {
      whyVisit: "Bali is not just a place, it is a tropical state of mind.",
      whyFamous: "The Island of the Gods balances vibrant coastal life with deep spiritual roots.",
      culture: "Daily offerings and traditional gamelan music filling the air.",
      food: ["Nasi Goreng", "Babi Guling", "Smoothie Bowls"],
      places: ["Ubud Monkey Forest", "Uluwatu Temple", "Tegalalang Rice Terrace"],
      weather: "28°C",
      distance: "4200 KM",
      travelTime: "7 Hours",
      personalizedReason: "Perfect for your desire to escape into nature."
    }
  },
  {
    id: "iceland",
    name: "ICELAND",
    country: "NORDIC",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2159",
    description: "Fire, ice, and dancing northern lights.",
    match: "91%",
    budget: "₹150,000",
    duration: "10 Days",
    wave: "M 0 600 C 300 500, 600 700, 900 600 S 1500 700, 1800 600",
    x: 800, y: 600,
    story: {
      whyVisit: "A landscape that feels like another planet entirely.",
      whyFamous: "The dramatic contrast of glaciers resting on active volcanoes.",
      culture: "A deep connection to sagas, folklore, and the harsh beauty of nature.",
      food: ["Arctic Char", "Skyr", "Rye Bread"],
      places: ["Blue Lagoon", "Gullfoss", "Reynisfjara Beach"],
      weather: "5°C",
      distance: "8200 KM",
      travelTime: "12 Hours",
      personalizedReason: "Fulfills your craving for untamed wilderness."
    }
  },
  {
    id: "switzerland",
    name: "SWITZERLAND",
    country: "EUROPE",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070",
    description: "Pristine alpine lakes and towering peaks.",
    match: "94%",
    budget: "₹180,000",
    duration: "8 Days",
    wave: "M 0 450 Q 250 350 500 450 T 1000 450 T 1500 450",
    x: 400, y: 450,
    story: {
      whyVisit: "The epitome of alpine luxury and breathtaking landscapes.",
      whyFamous: "Perfectly engineered scenic train rides through the Alps.",
      culture: "Precision, elegance, and a quiet appreciation for the dramatic outdoors.",
      food: ["Cheese Fondue", "Raclette", "Swiss Chocolate"],
      places: ["Zermatt", "Lake Geneva", "Jungfraujoch"],
      weather: "12°C",
      distance: "6500 KM",
      travelTime: "10 Hours",
      personalizedReason: "The absolute height of luxury and natural beauty."
    }
  },
  {
    id: "leh",
    name: "LEH LADAKH",
    country: "INDIA",
    image: "https://images.unsplash.com/photo-1581793707643-4c91a3297a78?q=80&w=2000",
    description: "A high-altitude desert of stark, dramatic beauty.",
    match: "97%",
    budget: "₹35,000",
    duration: "8 Days",
    wave: "M 0 350 Q 200 450 400 350 T 800 350 T 1200 350",
    x: 500, y: 350,
    story: {
      whyVisit: "Unmatched rugged landscapes and ancient Buddhist monasteries.",
      whyFamous: "The sheer isolation and spiritual resonance of the high Himalayas.",
      culture: "Deeply rooted Tibetan Buddhism influencing every aspect of life.",
      food: ["Thukpa", "Momos", "Butter Tea"],
      places: ["Pangong Lake", "Nubra Valley", "Khardung La"],
      weather: "15°C",
      distance: "800 KM",
      travelTime: "2 Hours",
      personalizedReason: "Perfect balance of adventure and raw beauty."
    }
  },
  {
    id: "kerala",
    name: "KERALA",
    country: "INDIA",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000",
    description: "Tranquil backwaters and lush green landscapes.",
    match: "94%",
    budget: "₹40,000",
    duration: "6 Days",
    wave: "M 0 500 Q 300 400 600 500 T 1200 500",
    x: 350, y: 500,
    story: {
      whyVisit: "God's Own Country offers ultimate relaxation.",
      whyFamous: "Houseboats, Ayurvedic treatments, and spice plantations.",
      culture: "Rich traditions of Kathakali and ancient healing arts.",
      food: ["Appam", "Fish Curry", "Sadhya"],
      places: ["Munnar", "Alleppey", "Wayanad"],
      weather: "28°C",
      distance: "1500 KM",
      travelTime: "4 Hours",
      personalizedReason: "For a serene escape into nature's embrace."
    }
  },
  {
    id: "jaipur",
    name: "JAIPUR",
    country: "INDIA",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2000",
    description: "Royal palaces bathed in a dusty pink glow.",
    match: "92%",
    budget: "₹30,000",
    duration: "4 Days",
    wave: "M 0 600 Q 250 500 500 600 T 1000 600 T 1500 600",
    x: 700, y: 600,
    story: {
      whyVisit: "Experience the grandeur of Rajputana architecture.",
      whyFamous: "The Pink City's forts, palaces, and vibrant bazaars.",
      culture: "A rich tapestry of history, royal heritage, and folk arts.",
      food: ["Dal Bati Churma", "Laal Maas", "Ghevar"],
      places: ["Amber Fort", "Hawa Mahal", "City Palace"],
      weather: "32°C",
      distance: "300 KM",
      travelTime: "1 Hour",
      personalizedReason: "Perfect for indulging in luxury and culture."
    }
  },
  {
    id: "andaman",
    name: "ANDAMAN",
    country: "INDIA",
    image: "https://images.unsplash.com/photo-1589136777351-fdc9c9cb164f?q=80&w=2000",
    description: "Pristine white beaches and crystal-clear waters.",
    match: "96%",
    budget: "₹60,000",
    duration: "7 Days",
    wave: "M 0 100 Q 200 200 400 100 T 800 100 T 1200 100",
    x: 800, y: 150,
    story: {
      whyVisit: "Untouched coral reefs and isolated tropical bliss.",
      whyFamous: "World-class scuba diving and historic cellular jail.",
      culture: "A melting pot of mainland cultures in a remote setting.",
      food: ["Seafood", "Coconut Curry", "Tropical Fruits"],
      places: ["Radhanagar Beach", "Havelock Island", "Neil Island"],
      weather: "29°C",
      distance: "2000 KM",
      travelTime: "5 Hours",
      personalizedReason: "The ultimate tropical escape within India."
    }
  },
  {
    id: "santorini",
    name: "SANTORINI",
    country: "GREECE",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1?q=80&w=2000",
    description: "Whitewashed dreams overlooking a sapphire sea.",
    match: "99%",
    budget: "₹120,000",
    duration: "6 Days",
    wave: "M 0 200 Q 250 100 500 200 T 1000 200 T 1500 200",
    x: 650, y: 200,
    story: {
      whyVisit: "The iconic caldera views offer the most romantic sunsets on Earth.",
      whyFamous: "Architecture that seamlessly cascades down volcanic cliffs.",
      culture: "A relaxed, elegant Mediterranean lifestyle celebrating history and sea.",
      food: ["Fresh Seafood", "Fava", "Assyrtiko Wine"],
      places: ["Oia", "Fira", "Red Beach"],
      weather: "24°C",
      distance: "5200 KM",
      travelTime: "8 Hours",
      personalizedReason: "Aesthetic perfection for your luxury getaway."
    }
  }
];

export const getSmartFallback = (distance: string): Destination[] => {
  let ids: string[] = [];
  if (distance === "India") {
    ids = ["leh", "kerala", "jaipur", "andaman"];
  } else if (distance === "Outside India") {
    ids = ["kyoto", "santorini", "bali", "switzerland"];
  } else {
    ids = ["iceland", "leh", "santorini", "kerala"];
  }

  const selected = ids.map(id => ALL_DESTINATIONS.find(d => d.id === id)).filter(Boolean) as Destination[];

  return selected.map((dest, index) => {
    return {
      ...dest,
      isUnexpected: index === 3
    };
  });
};
