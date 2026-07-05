"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { getSmartFallback, Destination } from "../data/destinations";

interface JourneyContextType {
  location: string;
  setLocation: (location: string) => void;
  mood: string;
  setMood: (mood: string) => void;
  days: number;
  setDays: (days: number) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  distance: string;
  setDistance: (distance: string) => void;
  companions: string;
  setCompanions: (companions: string) => void;
  destinations: Destination[];
  usedDestinations: string[];
  generateDestinations: () => void;
}

const JourneyContext = createContext<JourneyContextType | undefined>(undefined);

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState("");
  const [mood, setMood] = useState("");
  const [days, setDays] = useState(7);
  const [currentStep, setCurrentStep] = useState(0);
  const [distance, setDistance] = useState("");
  const [companions, setCompanions] = useState("");
  
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [usedDestinations, setUsedDestinations] = useState<string[]>([]);

  const generateDestinations = () => {
    try {
      const fallbacks = getSmartFallback(distance);
      setDestinations(fallbacks);
      
      const payload = JSON.stringify({ destinations: fallbacks });
      try {
        sessionStorage.setItem("journey", payload);
        localStorage.setItem("journey_backup", payload);
      } catch(storageErr) {
        console.warn("Storage failed", storageErr);
      }
    } catch (e) {
      console.warn("Error:", e);
    }
  };



  return (
    <JourneyContext.Provider value={{
      location, setLocation,
      mood, setMood,
      days, setDays,
      currentStep, setCurrentStep,
      distance, setDistance,
      companions, setCompanions,
      destinations,
      usedDestinations,
      generateDestinations,
    }}>
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  const context = useContext(JourneyContext);
  if (context === undefined) {
    throw new Error("useJourney must be used within a JourneyProvider");
  }
  return context;
}
