"use client";

import { MotionConfig } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { About } from "./components/About";
import { EngineSection } from "./components/EngineSection";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ScrollOrnament } from "./components/Ornaments";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen">
        <Analytics />
        <SpeedInsights />
        <ScrollOrnament />
        <div className="relative z-10">
          <Nav />
          <Hero />
          <About />
          <EngineSection />
          <Experience />
          <Work />
          <Footer />
        </div>
      </main>
    </MotionConfig>
  );
}
