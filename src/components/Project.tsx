"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { IconBrandGithub, IconRobot, } from "@tabler/icons-react";

export default function Project() {
    return (
        <>
            <div id="project" className=" font-play relative z-20 w-full px-5 pb-8 text-5xl font-bold text-start text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 md:pb-12 md:text-7xl md:text-center">
                Projects
            </div>
            <div className="grid lg:px-20 grid-cols-1 lg:grid-cols-3 px-5 gap-4 max-w-7xl mx-auto w-full from-neutral-200 to-neutral-500">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    {/* sm: '480px', md: '768px', lg: '976px', xl: '1440px', */}
                    <div className="max-w-xs z-50">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] ">
                            Simplified version of classic Pacman game.
                        </h2>
                        <p className="mt-4 text-left  text-xs lg:text-base/6 ">
                            Technologies used: C, OpenGL Utility Toolkit (GLUT) Library.
                        </p>
                        <a
                            href="https://www.github.com/SyedFaizan8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" relative group/btn flex  items-center justify-start px-2 space-x-1 mt-10 text-white w-56 rounded-md h-8 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                            <span className="text-white text-sm">Github | Find the code here </span>
                            <BottomGradient className="hidden lg:inline-block" />
                        </a>
                    </div>
                    <Image
                        src="/pacman.webp"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="z-20 absolute -right-4 xl:-right-[10%] lg:-right-[30%] md:w-96  -bottom-10 object-contain rounded-2xl"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="bg-black col-span-1 min-h-[300px]  ">
                    <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                        Robo Animation
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-xs lg:text-base/6 ">
                        Robo Animation powered by Spline Library, View on PC for better Experience
                    </p>
                    <a
                        href="https://robo.syedfaizan.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/btn flex items-center justify-start px-2 space-x-1 mt-10 text-white rounded-md h-8 w-28 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconRobot className="h-4 w-4 text-neutral-300" />
                        <span className="text-white text-sm">Live page</span>
                        <BottomGradient className="hidden lg:inline-block" />
                    </a>
                </WobbleCard>
                <WobbleCard containerClassName="bg-black col-span-1 lg:col-span-3 h-[500px] lg:h-[400px] xl:min-h-[300px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] ">
                            A web application to track the full supply chain from farmer to consumer using Ethereum blockchain.
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left   text-xs lg:text-base/6 ">
                            Solved issues related to decentralization, tamper-resistance, and higher transparency in the supply chain.
                            Technologies used: React.js, Tailwind CSS, Solidity, Hardhat, Ganache, Meta-Mask.
                        </p>
                        <a
                            href="https://github.com/SyedFaizan8/Blockchain-Based_SupplyChainManagement_for_AgriculturalProducts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/btn flex items-center justify-start px-2 space-x-1  mt-4 text-white rounded-md w-56 h-8 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                            <span className="text-white text-sm">Github | Find the code here</span>
                            <BottomGradient className="hidden lg:inline-block" />
                        </a>
                    </div>
                    <Image
                        src="/agroChain.webp"
                        width={500}
                        height={500}
                        alt="linear demo image"
                        className="absolute -right-10 md:-right-[40%] lg:-right-10 xl:-right-0 -bottom-0 object-contain rounded-2xl"
                    />
                </WobbleCard>
            </div>
        </>
    );
}

const BottomGradient = ({ className }: { className: string }) => {
    return (
        <>
            <span className={`${className} group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent`} />
            <span className={`${className} group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent`} />
        </>
    );
};
