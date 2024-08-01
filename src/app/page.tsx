"use client"

import Earth from "@/components/Earth";
// import GeminiEffect from "@/components/GeminiEffect";
import HeroSection from "@/components/HomeSection";
import WavyBgFooter from "@/components/WavyBgFooter";

export default function Home(): JSX.Element {
  return (
    <>

      <HeroSection />
      {/* <GeminiEffect /> */}
      <div className=" h-full flex flex-row">
        <div className="w-1/2 justify-between  text-white bg-black flex flex-col">
          <div>
            1
          </div>

          <div>
            2
          </div>

          <div>
            3
          </div>

          <div>
            4
          </div>
        </div>
        <div className="w-[1px] bg-black flex justify-center items-center py-20"><div className="h-full bg-white w-full"></div></div>
        <Earth />
      </div >
      <WavyBgFooter />
    </>
  );
}
