"use client"

import { Profile } from "@/components/Profile";
import Project from "@/components/Project";
import { useEffect } from 'react';
import Lenis from 'lenis'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";

export default function Home(): JSX.Element {

  useEffect(() => {
    //scroll
    const lenis = new Lenis()
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
      <Navbar />
      <HomeSection />
      <Project />
      <Profile />
      <Footer />
    </>
  );
}