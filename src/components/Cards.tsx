"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Cards({ id }: { id: string }) {
    return (
        <div id={id} className=" w-full h-auto from-neutral-200 to-neutral-500">
            <div className="text-5xl  py-10 sm:text-7xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center">Projects </div>
            <div className="grid px-16 grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 bg-black min-h-[300px] lg:min-h-[150px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                            Simplified version of classic Pacman game.
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            Technologies used: C, OpenGL Utility Toolkit (GLUT) Library.
                        </p>
                        <a
                            href="https://www.github.com/SyedFaizan8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/btn flex  items-center justify-start px-2 space-x-1 w-auto mt-4 text-white rounded-md h-8 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                            <span className="text-white text-sm">Github | Find the code here </span>
                            <BottomGradient />
                        </a>
                    </div>
                    <Image
                        src="/pacman.png"
                        width={350}
                        height={350}
                        alt=""
                        className="absolute -right-2 contrast-100 brightness-100 -bottom-10 rounded-xl"
                    />

                </WobbleCard>
                <WobbleCard containerClassName="bg-black col-span-1 min-h-[150px]">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        WhatsApp Analyzer
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        Analyzes the messages of group chats and individual chats, showing counts.
                    </p>
                    <a
                        href="https://www.github.com/SyedFaizan8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/btn flex  items-center justify-start px-2 space-x-1 w-auto mt-4 text-white rounded-md h-8 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                        <span className="text-white text-sm">Github | Find the code here </span>
                        <BottomGradient />
                    </a>

                </WobbleCard>
                <WobbleCard containerClassName="bg-black col-span-1 lg:col-span-3 min-h-[300px] lg:min-h-[400px] xl:min-h-[300px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            A web application to track the full supply chain from farmer to consumer using Ethereum blockchain.
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            Solved issues related to decentralization, tamper-resistance, and higher transparency in the supply chain.
                            Technologies used: React.js, Tailwind CSS, Solidity, Hardhat, Ganache, Meta-Mask.

                        </p>
                        <a
                            href="https://www.github.com/SyedFaizan8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/btn flex  items-center justify-start px-2 space-x-1 w-auto mt-4 text-white rounded-md h-8 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                            <span className="text-white text-sm">Github | Find the code here </span>
                            <BottomGradient />
                        </a>
                    </div>
                    <Image
                        src="/agroChain.png"
                        width={600}
                        height={600}
                        alt="linear demo image"
                        className="absolute -right-0 md:-right-[20%] lg:-right-[0] -bottom-4 object-contain rounded-sm"
                    />
                </WobbleCard>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};
