"use client"

import HeroSection from "@/components/HomeSection";
import { Profile } from "@/components/Profile";
import Project from "@/components/Project";

export default function Home(): JSX.Element {

  return (
    <>
      <HeroSection id="home" />
      <Project id="project" />
      <Profile id="about" />
    </>
  );
}