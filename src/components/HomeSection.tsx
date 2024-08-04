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
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="w-full relative flex flex-col gap-4 items-center justify-center "
                >
                    <div className=" mt-20 w-full flex flex-row">
                        {/* left */}
                        <div className="w-full  px-10">
                            <div className="font-play  text-3xl w-full md:text-5xl font-bold text-white text-left">
                                <TypewriterEffectSmooth words={words} />
                            </div>
                            <div className="pb-5 pt-2">
                                <div className="font-extralight text-base md:text-xl  text-neutral-200 ">
                                    I'm a passionate Software Developer specializing in<FlipWords words={skills} />development.  Let's create something amazing together!
                                </div>
                            </div>
                            <ScrollLink
                                to="contact"
                                smooth="easeInOutQuad"
                                duration={1000}>
                                <button className=" mt-8 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white rounded-full font-bold transform hover:-translate-y-1 transition duration-400">
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
