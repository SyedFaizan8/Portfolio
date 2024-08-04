"use client"

import Cards from "@/components/Cards";
import HeroSection from "@/components/HomeSection";
import { Profile } from "@/components/Profile";
import { useEffect } from 'react';

export default function Home(): JSX.Element {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  return (
    <>
      <HeroSection id="home" />
      <Cards id="project" />
      <Profile id="about" />
    </>
  );
}