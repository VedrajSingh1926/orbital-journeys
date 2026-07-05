import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import SmoothScroll from "../components/SmoothScroll";
import { JourneyProvider } from "../context/JourneyContext";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import FilmGrain from "../components/FilmGrain";

export const metadata: Metadata = {
  title: "Orbital Journeys",
  description: "Travel isn't about places. It's about feelings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="flex flex-col font-sans text-brand-text bg-brand-bg relative selection:bg-brand-accent selection:text-white">
        <JourneyProvider>
          <SmoothScroll>
            <FilmGrain />
            <Header />
            <BackButton />
            {children}
          </SmoothScroll>
        </JourneyProvider>
      </body>
    </html>
  );
}
