// SYSTEM GENERATED FILE - GEMINI PRIMARY ENGINE FALLBACK DB

export interface Place {
  name: string;
  description: string;
}

export interface Food {
  name: string;
  description: string;
}

export interface DestinationStory {
  heroTitle: string;
  heroSubtitle: string;
  whyVisit: string;
  whyFamous: string;
  places: Place[];
  food: Food[];
  culture: string;
  weather: string;
  bestSeason: string;
  currentSeason: string;
  travelTips: string[];
  hiddenGems: string[];
  instagramSpots: string[];
  personalizedReason: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  type: string;
  match: number;
  budget: string;
  distance: string;
  travelTime: string;
  description: string;
  personalizedReason: string;
  imageQuery: string;
  
  // Graph rendering data (dynamically attached by UI)
  wave?: string;
  x?: number;
  y?: number;
  isUnexpected?: boolean;
  isCustomSearch?: boolean;

  story: DestinationStory;
}

export const ALL_DESTINATIONS_INDIA: Destination[] = [
  {
    "id": "ladakh",
    "name": "LADAKH",
    "country": "India",
    "continent": "Asia",
    "type": "expected",
    "match": 94,
    "budget": "₹85,000",
    "distance": "2000 KM",
    "travelTime": "4 Hours",
    "description": "A stunning escape into the heart of Ladakh.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Ladakh luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Ladakh",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Ladakh is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Ladakh captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Ladakh Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Ladakh Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Ladakh Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Ladakh Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Ladakh Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Ladakh Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Ladakh Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Ladakh Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Ladakh Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Ladakh Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Ladakh Dish 1",
          "description": "Savor the exquisite flavors of Traditional Ladakh Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Ladakh Dish 2",
          "description": "Savor the exquisite flavors of Traditional Ladakh Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Ladakh Dish 3",
          "description": "Savor the exquisite flavors of Traditional Ladakh Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Ladakh Dish 4",
          "description": "Savor the exquisite flavors of Traditional Ladakh Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Ladakh Dish 5",
          "description": "Savor the exquisite flavors of Traditional Ladakh Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "22°C",
      "bestSeason": "October to March",
      "currentSeason": "Monsoon",
      "travelTips": [
        "Always carry a premium pashmina for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "kerala",
    "name": "KERALA",
    "country": "India",
    "continent": "Asia",
    "type": "expected",
    "match": 98,
    "budget": "₹85,000",
    "distance": "2000 KM",
    "travelTime": "4 Hours",
    "description": "A stunning escape into the heart of Kerala.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Kerala luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Kerala",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Kerala is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Kerala captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Kerala Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Kerala Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kerala Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Kerala Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kerala Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Kerala Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kerala Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Kerala Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kerala Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Kerala Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Kerala Dish 1",
          "description": "Savor the exquisite flavors of Traditional Kerala Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kerala Dish 2",
          "description": "Savor the exquisite flavors of Traditional Kerala Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kerala Dish 3",
          "description": "Savor the exquisite flavors of Traditional Kerala Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kerala Dish 4",
          "description": "Savor the exquisite flavors of Traditional Kerala Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kerala Dish 5",
          "description": "Savor the exquisite flavors of Traditional Kerala Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "22°C",
      "bestSeason": "October to March",
      "currentSeason": "Monsoon",
      "travelTips": [
        "Always carry a premium pashmina for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "meghalaya",
    "name": "MEGHALAYA",
    "country": "India",
    "continent": "Asia",
    "type": "expected",
    "match": 96,
    "budget": "₹85,000",
    "distance": "2000 KM",
    "travelTime": "4 Hours",
    "description": "A stunning escape into the heart of Meghalaya.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Meghalaya luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Meghalaya",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Meghalaya is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Meghalaya captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Meghalaya Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Meghalaya Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Meghalaya Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Meghalaya Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Meghalaya Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Meghalaya Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Meghalaya Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Meghalaya Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Meghalaya Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Meghalaya Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Meghalaya Dish 1",
          "description": "Savor the exquisite flavors of Traditional Meghalaya Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Meghalaya Dish 2",
          "description": "Savor the exquisite flavors of Traditional Meghalaya Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Meghalaya Dish 3",
          "description": "Savor the exquisite flavors of Traditional Meghalaya Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Meghalaya Dish 4",
          "description": "Savor the exquisite flavors of Traditional Meghalaya Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Meghalaya Dish 5",
          "description": "Savor the exquisite flavors of Traditional Meghalaya Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "22°C",
      "bestSeason": "October to March",
      "currentSeason": "Monsoon",
      "travelTips": [
        "Always carry a premium pashmina for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "spiti",
    "name": "SPITI",
    "country": "India",
    "continent": "Asia",
    "type": "expected",
    "match": 90,
    "budget": "₹85,000",
    "distance": "2000 KM",
    "travelTime": "4 Hours",
    "description": "A stunning escape into the heart of Spiti.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Spiti luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Spiti",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Spiti is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Spiti captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Spiti Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Spiti Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Spiti Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Spiti Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Spiti Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Spiti Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Spiti Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Spiti Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Spiti Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Spiti Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Spiti Dish 1",
          "description": "Savor the exquisite flavors of Traditional Spiti Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Spiti Dish 2",
          "description": "Savor the exquisite flavors of Traditional Spiti Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Spiti Dish 3",
          "description": "Savor the exquisite flavors of Traditional Spiti Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Spiti Dish 4",
          "description": "Savor the exquisite flavors of Traditional Spiti Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Spiti Dish 5",
          "description": "Savor the exquisite flavors of Traditional Spiti Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "22°C",
      "bestSeason": "October to March",
      "currentSeason": "Monsoon",
      "travelTips": [
        "Always carry a premium pashmina for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "kashmir",
    "name": "KASHMIR",
    "country": "India",
    "continent": "Asia",
    "type": "expected",
    "match": 96,
    "budget": "₹85,000",
    "distance": "2000 KM",
    "travelTime": "4 Hours",
    "description": "A stunning escape into the heart of Kashmir.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Kashmir luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Kashmir",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Kashmir is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Kashmir captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Kashmir Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Kashmir Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kashmir Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Kashmir Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kashmir Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Kashmir Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kashmir Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Kashmir Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kashmir Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Kashmir Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Kashmir Dish 1",
          "description": "Savor the exquisite flavors of Traditional Kashmir Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kashmir Dish 2",
          "description": "Savor the exquisite flavors of Traditional Kashmir Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kashmir Dish 3",
          "description": "Savor the exquisite flavors of Traditional Kashmir Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kashmir Dish 4",
          "description": "Savor the exquisite flavors of Traditional Kashmir Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kashmir Dish 5",
          "description": "Savor the exquisite flavors of Traditional Kashmir Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "22°C",
      "bestSeason": "October to March",
      "currentSeason": "Monsoon",
      "travelTips": [
        "Always carry a premium pashmina for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "andaman",
    "name": "ANDAMAN",
    "country": "India",
    "continent": "Asia",
    "type": "expected",
    "match": 90,
    "budget": "₹85,000",
    "distance": "2000 KM",
    "travelTime": "4 Hours",
    "description": "A stunning escape into the heart of Andaman.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Andaman luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Andaman",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Andaman is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Andaman captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Andaman Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Andaman Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Andaman Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Andaman Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Andaman Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Andaman Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Andaman Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Andaman Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Andaman Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Andaman Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Andaman Dish 1",
          "description": "Savor the exquisite flavors of Traditional Andaman Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Andaman Dish 2",
          "description": "Savor the exquisite flavors of Traditional Andaman Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Andaman Dish 3",
          "description": "Savor the exquisite flavors of Traditional Andaman Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Andaman Dish 4",
          "description": "Savor the exquisite flavors of Traditional Andaman Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Andaman Dish 5",
          "description": "Savor the exquisite flavors of Traditional Andaman Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "22°C",
      "bestSeason": "October to March",
      "currentSeason": "Monsoon",
      "travelTips": [
        "Always carry a premium pashmina for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "rajasthan",
    "name": "RAJASTHAN",
    "country": "India",
    "continent": "Asia",
    "type": "expected",
    "match": 99,
    "budget": "₹85,000",
    "distance": "2000 KM",
    "travelTime": "4 Hours",
    "description": "A stunning escape into the heart of Rajasthan.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Rajasthan luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Rajasthan",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Rajasthan is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Rajasthan captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Rajasthan Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Rajasthan Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Rajasthan Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Rajasthan Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Rajasthan Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Rajasthan Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Rajasthan Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Rajasthan Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Rajasthan Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Rajasthan Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Rajasthan Dish 1",
          "description": "Savor the exquisite flavors of Traditional Rajasthan Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Rajasthan Dish 2",
          "description": "Savor the exquisite flavors of Traditional Rajasthan Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Rajasthan Dish 3",
          "description": "Savor the exquisite flavors of Traditional Rajasthan Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Rajasthan Dish 4",
          "description": "Savor the exquisite flavors of Traditional Rajasthan Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Rajasthan Dish 5",
          "description": "Savor the exquisite flavors of Traditional Rajasthan Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "22°C",
      "bestSeason": "October to March",
      "currentSeason": "Monsoon",
      "travelTips": [
        "Always carry a premium pashmina for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "coorg",
    "name": "COORG",
    "country": "India",
    "continent": "Asia",
    "type": "expected",
    "match": 92,
    "budget": "₹85,000",
    "distance": "2000 KM",
    "travelTime": "4 Hours",
    "description": "A stunning escape into the heart of Coorg.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Coorg luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Coorg",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Coorg is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Coorg captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Coorg Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Coorg Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Coorg Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Coorg Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Coorg Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Coorg Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Coorg Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Coorg Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Coorg Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Coorg Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Coorg Dish 1",
          "description": "Savor the exquisite flavors of Traditional Coorg Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Coorg Dish 2",
          "description": "Savor the exquisite flavors of Traditional Coorg Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Coorg Dish 3",
          "description": "Savor the exquisite flavors of Traditional Coorg Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Coorg Dish 4",
          "description": "Savor the exquisite flavors of Traditional Coorg Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Coorg Dish 5",
          "description": "Savor the exquisite flavors of Traditional Coorg Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "22°C",
      "bestSeason": "October to March",
      "currentSeason": "Monsoon",
      "travelTips": [
        "Always carry a premium pashmina for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  }
];
export const ALL_DESTINATIONS_INTL: Destination[] = [
  {
    "id": "iceland",
    "name": "ICELAND",
    "country": "Iceland",
    "continent": "Global",
    "type": "expected",
    "match": 96,
    "budget": "₹250,000",
    "distance": "6000 KM",
    "travelTime": "12 Hours",
    "description": "A stunning escape into the heart of Iceland.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Iceland luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Iceland",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Iceland is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Iceland captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Iceland Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Iceland Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Iceland Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Iceland Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Iceland Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Iceland Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Iceland Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Iceland Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Iceland Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Iceland Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Iceland Dish 1",
          "description": "Savor the exquisite flavors of Traditional Iceland Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Iceland Dish 2",
          "description": "Savor the exquisite flavors of Traditional Iceland Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Iceland Dish 3",
          "description": "Savor the exquisite flavors of Traditional Iceland Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Iceland Dish 4",
          "description": "Savor the exquisite flavors of Traditional Iceland Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Iceland Dish 5",
          "description": "Savor the exquisite flavors of Traditional Iceland Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "15°C",
      "bestSeason": "May to September",
      "currentSeason": "Summer",
      "travelTips": [
        "Always carry a premium scarf for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "kyoto",
    "name": "KYOTO",
    "country": "Japan",
    "continent": "Global",
    "type": "expected",
    "match": 93,
    "budget": "₹250,000",
    "distance": "6000 KM",
    "travelTime": "12 Hours",
    "description": "A stunning escape into the heart of Kyoto.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Kyoto luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Kyoto",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Kyoto is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Kyoto captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Kyoto Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Kyoto Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kyoto Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Kyoto Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kyoto Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Kyoto Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kyoto Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Kyoto Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Kyoto Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Kyoto Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Kyoto Dish 1",
          "description": "Savor the exquisite flavors of Traditional Kyoto Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kyoto Dish 2",
          "description": "Savor the exquisite flavors of Traditional Kyoto Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kyoto Dish 3",
          "description": "Savor the exquisite flavors of Traditional Kyoto Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kyoto Dish 4",
          "description": "Savor the exquisite flavors of Traditional Kyoto Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Kyoto Dish 5",
          "description": "Savor the exquisite flavors of Traditional Kyoto Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "15°C",
      "bestSeason": "May to September",
      "currentSeason": "Summer",
      "travelTips": [
        "Always carry a premium scarf for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "norway",
    "name": "NORWAY",
    "country": "Norway",
    "continent": "Global",
    "type": "expected",
    "match": 95,
    "budget": "₹250,000",
    "distance": "6000 KM",
    "travelTime": "12 Hours",
    "description": "A stunning escape into the heart of Norway.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Norway luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Norway",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Norway is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Norway captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Norway Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Norway Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Norway Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Norway Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Norway Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Norway Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Norway Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Norway Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Norway Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Norway Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Norway Dish 1",
          "description": "Savor the exquisite flavors of Traditional Norway Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Norway Dish 2",
          "description": "Savor the exquisite flavors of Traditional Norway Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Norway Dish 3",
          "description": "Savor the exquisite flavors of Traditional Norway Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Norway Dish 4",
          "description": "Savor the exquisite flavors of Traditional Norway Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Norway Dish 5",
          "description": "Savor the exquisite flavors of Traditional Norway Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "15°C",
      "bestSeason": "May to September",
      "currentSeason": "Summer",
      "travelTips": [
        "Always carry a premium scarf for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "switzerland",
    "name": "SWITZERLAND",
    "country": "Switzerland",
    "continent": "Global",
    "type": "expected",
    "match": 98,
    "budget": "₹250,000",
    "distance": "6000 KM",
    "travelTime": "12 Hours",
    "description": "A stunning escape into the heart of Switzerland.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Switzerland luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Switzerland",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Switzerland is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Switzerland captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Switzerland Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Switzerland Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Switzerland Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Switzerland Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Switzerland Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Switzerland Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Switzerland Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Switzerland Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Switzerland Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Switzerland Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Switzerland Dish 1",
          "description": "Savor the exquisite flavors of Traditional Switzerland Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Switzerland Dish 2",
          "description": "Savor the exquisite flavors of Traditional Switzerland Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Switzerland Dish 3",
          "description": "Savor the exquisite flavors of Traditional Switzerland Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Switzerland Dish 4",
          "description": "Savor the exquisite flavors of Traditional Switzerland Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Switzerland Dish 5",
          "description": "Savor the exquisite flavors of Traditional Switzerland Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "15°C",
      "bestSeason": "May to September",
      "currentSeason": "Summer",
      "travelTips": [
        "Always carry a premium scarf for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "peru",
    "name": "PERU",
    "country": "Peru",
    "continent": "Global",
    "type": "expected",
    "match": 91,
    "budget": "₹250,000",
    "distance": "6000 KM",
    "travelTime": "12 Hours",
    "description": "A stunning escape into the heart of Peru.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Peru luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Peru",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Peru is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Peru captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Peru Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Peru Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Peru Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Peru Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Peru Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Peru Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Peru Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Peru Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Peru Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Peru Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Peru Dish 1",
          "description": "Savor the exquisite flavors of Traditional Peru Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Peru Dish 2",
          "description": "Savor the exquisite flavors of Traditional Peru Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Peru Dish 3",
          "description": "Savor the exquisite flavors of Traditional Peru Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Peru Dish 4",
          "description": "Savor the exquisite flavors of Traditional Peru Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Peru Dish 5",
          "description": "Savor the exquisite flavors of Traditional Peru Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "15°C",
      "bestSeason": "May to September",
      "currentSeason": "Summer",
      "travelTips": [
        "Always carry a premium scarf for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "bali",
    "name": "BALI",
    "country": "Indonesia",
    "continent": "Global",
    "type": "expected",
    "match": 92,
    "budget": "₹250,000",
    "distance": "6000 KM",
    "travelTime": "12 Hours",
    "description": "A stunning escape into the heart of Bali.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Bali luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Bali",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Bali is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Bali captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Bali Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Bali Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Bali Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Bali Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Bali Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Bali Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Bali Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Bali Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Bali Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Bali Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Bali Dish 1",
          "description": "Savor the exquisite flavors of Traditional Bali Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Bali Dish 2",
          "description": "Savor the exquisite flavors of Traditional Bali Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Bali Dish 3",
          "description": "Savor the exquisite flavors of Traditional Bali Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Bali Dish 4",
          "description": "Savor the exquisite flavors of Traditional Bali Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Bali Dish 5",
          "description": "Savor the exquisite flavors of Traditional Bali Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "15°C",
      "bestSeason": "May to September",
      "currentSeason": "Summer",
      "travelTips": [
        "Always carry a premium scarf for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "patagonia",
    "name": "PATAGONIA",
    "country": "Patagonia",
    "continent": "Global",
    "type": "expected",
    "match": 92,
    "budget": "₹250,000",
    "distance": "6000 KM",
    "travelTime": "12 Hours",
    "description": "A stunning escape into the heart of Patagonia.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic Patagonia luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of Patagonia",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "Patagonia is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, Patagonia captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "Patagonia Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of Patagonia Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Patagonia Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of Patagonia Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Patagonia Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of Patagonia Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Patagonia Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of Patagonia Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "Patagonia Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of Patagonia Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional Patagonia Dish 1",
          "description": "Savor the exquisite flavors of Traditional Patagonia Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Patagonia Dish 2",
          "description": "Savor the exquisite flavors of Traditional Patagonia Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Patagonia Dish 3",
          "description": "Savor the exquisite flavors of Traditional Patagonia Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Patagonia Dish 4",
          "description": "Savor the exquisite flavors of Traditional Patagonia Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional Patagonia Dish 5",
          "description": "Savor the exquisite flavors of Traditional Patagonia Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "15°C",
      "bestSeason": "May to September",
      "currentSeason": "Summer",
      "travelTips": [
        "Always carry a premium scarf for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  },
  {
    "id": "new zealand",
    "name": "NEW ZEALAND",
    "country": "New Zealand",
    "continent": "Global",
    "type": "expected",
    "match": 97,
    "budget": "₹250,000",
    "distance": "6000 KM",
    "travelTime": "12 Hours",
    "description": "A stunning escape into the heart of New Zealand.",
    "personalizedReason": "Perfectly suited for your mood, offering a serene yet deeply moving environment.",
    "imageQuery": "cinematic New Zealand luxury travel emotional",
    "story": {
      "heroTitle": "The Soul of New Zealand",
      "heroSubtitle": "Where ancient traditions meet untamed, breathtaking natural beauty in perfect harmony.",
      "whyVisit": "New Zealand is an absolute masterpiece of nature and culture. Imagine waking up to sweeping, cinematic vistas that have remained untouched by time. The air is crisp, the light is golden, and every corner whispers stories of a glorious past. This is not just a vacation; it is a profound emotional reset designed to elevate your spirit and immerse you in sheer, unadulterated luxury.",
      "whyFamous": "Renowned globally for its striking contrasts, New Zealand captures the imagination of elite travelers. Its dramatic landscapes and perfectly preserved heritage sites have made it a crown jewel of international tourism. From exclusive boutique retreats to Michelin-worthy local culinary scenes, the region offers a masterclass in combining raw geographical drama with world-class hospitality and service.",
      "places": [
        {
          "name": "New Zealand Landmark 1",
          "description": "Experience the breathtaking beauty and rich history of New Zealand Landmark 1. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "New Zealand Landmark 2",
          "description": "Experience the breathtaking beauty and rich history of New Zealand Landmark 2. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "New Zealand Landmark 3",
          "description": "Experience the breathtaking beauty and rich history of New Zealand Landmark 3. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "New Zealand Landmark 4",
          "description": "Experience the breathtaking beauty and rich history of New Zealand Landmark 4. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        },
        {
          "name": "New Zealand Landmark 5",
          "description": "Experience the breathtaking beauty and rich history of New Zealand Landmark 5. A place where timeless elegance meets unparalleled grandeur, perfectly aligned with your luxury travel aspirations."
        }
      ],
      "food": [
        {
          "name": "Traditional New Zealand Dish 1",
          "description": "Savor the exquisite flavors of Traditional New Zealand Dish 1. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional New Zealand Dish 2",
          "description": "Savor the exquisite flavors of Traditional New Zealand Dish 2. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional New Zealand Dish 3",
          "description": "Savor the exquisite flavors of Traditional New Zealand Dish 3. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional New Zealand Dish 4",
          "description": "Savor the exquisite flavors of Traditional New Zealand Dish 4. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        },
        {
          "name": "Traditional New Zealand Dish 5",
          "description": "Savor the exquisite flavors of Traditional New Zealand Dish 5. Crafted with traditional techniques and local ingredients, it offers a culinary journey that delights the most refined palates."
        }
      ],
      "culture": "The culture here is a vibrant tapestry of indigenous rituals, high-art, and warm, unparalleled hospitality.",
      "weather": "15°C",
      "bestSeason": "May to September",
      "currentSeason": "Summer",
      "travelTips": [
        "Always carry a premium scarf for the evening chill.",
        "Hire a private local curator for exclusive access.",
        "Embrace the slow pace of life and travel sustainably.",
        "Reserve fine-dining experiences well in advance.",
        "Pack comfortable yet elegant walking attire."
      ],
      "hiddenGems": [
        "The Secret Courtyard of the Old City",
        "A hidden cascade far from the tourist trail",
        "An exclusive artisan workshop open by appointment only"
      ],
      "instagramSpots": [
        "The Golden Hour Overlook",
        "The Royal Heritage Corridor",
        "The Infinity Pool edge at dawn"
      ],
      "personalizedReason": "Your desire for adventure and luxury finds its ultimate expression here, blending raw nature with supreme comfort."
    }
  }
];

export const getSmartFallback = (distance: string): Destination[] => {
  let pool = [];
  if (distance === "India") {
    pool = [...ALL_DESTINATIONS_INDIA];
  } else if (distance === "International") {
    pool = [...ALL_DESTINATIONS_INTL];
  } else {
    pool = [...ALL_DESTINATIONS_INDIA.slice(0,2), ...ALL_DESTINATIONS_INTL.slice(0,2)];
  }

  // Pick 4 destinations, make the last one unexpected
  const selected = pool.sort(() => 0.5 - Math.random()).slice(0, 4);
  
  if (selected.length === 4) {
    selected[3].type = "unexpected";
    selected[3].isUnexpected = true;
  }

  return selected;
};
