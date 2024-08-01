"use client"

import Earth from "@/components/Earth";
import GeminiEffect from "@/components/GeminiEffect";
import HeroSection from "@/components/HomeSection";
import WavyBgFooter from "@/components/WavyBgFooter";


export default function Home(): JSX.Element {
  return (
    <>
      <HeroSection />
      <GeminiEffect />
      <Earth />
      <WavyBgFooter />
    </>
  );
}
