"use client"

import HeroSection from "@/components/HomeSection";
import { Profile } from "@/components/Profile";
import Project from "@/components/Project";
import { useEffect } from 'react';
import Lenis from 'lenis'

export default function Home(): JSX.Element {

  useEffect(() => {

    //scroll
    const lenis = new Lenis({ smoothWheel: true })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


    //contextmenu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [])


  return (
    <>
      <HeroSection id="home" />
      <Project id="project" />
      <Profile id="about" />
    </>
  );
}