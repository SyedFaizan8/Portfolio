"use client"

import HeroSection from "@/components/HomeSection";
import { Profile } from "@/components/Profile";
import Project from "@/components/Project";
import { useEffect } from 'react';

export default function Home(): JSX.Element {

  useEffect(() => {

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