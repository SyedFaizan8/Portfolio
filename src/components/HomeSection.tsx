import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { Link as ScrollLink } from "react-scroll"

export default function HomeSection() {

    const skills = ["Web", "Mobile", "Frontend", "Backend", "Devops", "Fullstack"]

    return (
        <div id="home" className="font-play h-80 lg:h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">

            {/* Radial gradient for the container to give a faded look */}
            <div className="z-0 absolute pointer-events-none inset-0 flex  items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <Spotlight
                className=" -top-20 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="z-10 mt-16 md:mt-40 w-full">
                <div className="w-full px-4">
                    <div className="w-full ">
                        <div className="lg:hidden text-4xl md:text-5xl  w-full py-6  font-bold text-white text-left "> Hi I am <br />Syed Faizan<span className="text-2xl">👋</span></div>
                        <div className="hidden lg:inline-block text-xl py-6 w-full md:text-7xl font-bold text-white text-left">  Hi I am Syed Faizan👋</div>
                    </div>
                    <div className="font-extralight w-full text-sm lg:text-3xl  text-neutral-200 ">
                        I am a passionate Software Developer specializing in<FlipWords className="hidden lg:inline-block" words={skills} /><span className="lg:hidden"> Web and Mobile Application </span>development. <div className="hidden md:inline-block"> Lets create something amazing together!</div>
                    </div>
                    <ScrollLink
                        to="contact"
                        smooth="easeInOutQuad"
                        duration={1000}>
                        <button className="lg:rounded-3xl lg:mt-4 lg:text-lg lg:px-2 mt-4 text-xs shadow-[0_0_0_3px_#000000_inset] px-1 py-1 bg-transparent border border-white text-white rounded-xl font-bold transform lg:hover:-translate-y-1 transition duration-400">
                            Contact Me
                        </button>
                    </ScrollLink>
                </div>
                <div className="w-full ">
                </div>
            </div>

        </div >
    );
}
