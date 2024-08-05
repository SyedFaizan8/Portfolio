"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "./ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Link as ScrollLink } from "react-scroll"

export default function HeroSection({ id }: { id: string }) {

    const skills = ["Web", "Mobile"]


    const words = [
        {
            text: "Hi, ",
            className: "text-xl w-full md:text-5xl font-bold text-white text-left"
        },
        {
            text: "I'm ",
            className: "text-xl w-full md:text-5xl font-bold text-white text-left"
        },
        {
            text: "Syed ",
            className: "text-xl w-full md:text-5xl font-bold text-white text-left"
        },
        {
            text: "Faizan.",
            className: "text-xl w-full md:text-5xl font-bold text-white text-left"
        },
    ];

    return (
        <div id={id}>
            <AuroraBackground className="h-96 lg:h-screen">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="w-full relative "
                >
                    <div className=" mt-36 lg:mt-60 w-full">
                        <div className="w-full px-10">
                            <div className="font-play w-full ">
                                <TypewriterEffectSmooth cursorClassName="lg:h-14 md:h-14 h-7" words={words} />
                            </div>
                            <div className="font-extralight w-full text-sm lg:text-xl text-neutral-200 ">
                                I'm a passionate Software Developer specializing in<FlipWords className="hidden lg:inline-block" words={skills} /><span className="lg:hidden"> Web and Mobile Application </span>development. <div className="hidden md:inline-block"> Let's create something amazing together!</div>
                            </div>
                            <ScrollLink
                                to="contact"
                                smooth="easeInOutQuad"
                                duration={1000}>
                                <button className="lg:rounded-3xl lg:mt-8  lg:text-lg lg:px-2 mt-6 text-xs shadow-[0_0_0_3px_#000000_inset] px-1 py-1 bg-transparent border border-white text-white rounded-xl font-bold transform lg:hover:-translate-y-1 transition duration-400">
                                    Contact Me
                                </button>
                            </ScrollLink>
                        </div>
                        {/* right */}
                        <div className="w-full ">
                        </div>
                    </div>
                </motion.div>
            </AuroraBackground>
        </div>
    );
}
