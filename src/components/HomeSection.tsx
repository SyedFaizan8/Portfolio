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
            className: " text-3xl w-full md:text-5xl font-bold text-white text-left"
        },
        {
            text: "I'm ",
            className: " text-3xl w-full md:text-5xl font-bold text-white text-left"
        },
        {
            text: "Syed ",
            className: " text-3xl w-full md:text-5xl font-bold text-white text-left"
        },
        {
            text: "Faizan.",
            className: " text-3xl w-full md:text-5xl font-bold text-white text-left"
        },
    ];

    return (
        <div id={id}>
            <AuroraBackground className="max-h-96">
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
                    {/* className="w-full relative flex flex-col gap-4 items-center justify-center " */}
                    <div className=" mt-36 w-full">
                        {/* className=" mt-20 w-full flex flex-row" */}
                        {/* left */}
                        <div className="w-full px-10">
                            <div className="font-play text-sm w-full font-bold text-neutral-500 text-left">
                                <TypewriterEffectSmooth words={words} />
                            </div>
                            <div className="font-extralight w-full text-sm  text-neutral-200 ">
                                I'm a passionate Software Developer specializing in<FlipWords className="hidden" words={skills} /><span className="md:hidden"> Web and Mobile Application </span>development.  Let's create something amazing together!
                            </div>
                            <ScrollLink
                                to="contact"
                                smooth="easeInOutQuad"
                                duration={1000}>
                                <button className=" mt-6 text-xs shadow-[0_0_0_3px_#000000_inset] px-1 py-1 bg-transparent border border-white text-white rounded-xl font-bold transform md:hover:-translate-y-1 transition duration-400">
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
