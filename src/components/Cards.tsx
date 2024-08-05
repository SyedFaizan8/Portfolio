"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Cards({ id }: { id: string }) {
    return (
        <div id={id} className=" w-full  py-16 h-auto from-neutral-200 to-neutral-500">
            <div className="text-5xl pb-8 px-10 font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-start">
                Projects
            </div>
            <div className="grid px-10 grid-cols-1 gap-10 w-full">
                <WobbleCard
                    containerClassName="col-span-1 relative bg-black h-[300px] "
                >
                    <div className="grid grid-cols-2">
                        <h2 className="col-span-2 text-left text-lg font-semibold tracking-[-0.015em]">
                            Simplified version of classic Pacman game.
                        </h2>
                        <div className="col-span-1">
                            <p className="mt-4 text-left text-sm text-neutral-200">
                                Technologies used: C, OpenGL Utility Toolkit (GLUT) Library.
                            </p>
                            <a
                                href="https://www.github.com/SyedFaizan8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" relative group/btn flex  items-center justify-start px-2 space-x-1 w-28 mt-10 text-white rounded-md h-8 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            >
                                <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                                <span className="text-white text-sm">Github <span className="hidden">| Find the code here</span> </span>
                                <BottomGradient className="hidden" />
                            </a>
                        </div>
                        <Image
                            src="/pacman.png"
                            width={300}
                            height={300}
                            alt=""
                            className="col-span-1 w-full h-full pt-5  contrast-100 brightness-100 rounded-lg"
                        />
                    </div>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 relative bg-black h-[250px]">
                    <h2 className="text-left text-lg font-semibold tracking-[-0.015em]">
                        WhatsApp Analyzer
                    </h2>
                    <p className="mt-4 text-left text-sm text-neutral-200">
                        Analyzes the messages of group chats and individual chats, showing counts.
                    </p>
                    <a
                        href="https://github.com/SyedFaizan8/Whatsapp_Analyzer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/btn flex items-center justify-start px-2 space-x-1 w-28 mt-10 text-white rounded-md h-8 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                        <span className="text-white text-sm">Github <span className="hidden">| Find the code here</span> </span>
                        <BottomGradient className="hidden" />
                    </a>

                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 relative bg-black h-[550px]">
                    <div className="">
                        <h2 className="text-left text-lg font-semibold tracking-[-0.015em]">
                            A web application to track the full supply chain from farmer to consumer using Ethereum blockchain.
                        </h2>
                        <p className="mt-4 text-left text-sm text-neutral-200">
                            Solved issues related to decentralization, tamper-resistance, and higher transparency in the supply chain.
                            Technologies used: React.js, Tailwind CSS, Solidity, Hardhat, Ganache, Meta-Mask.

                        </p>
                        <a
                            href="https://github.com/SyedFaizan8/Blockchain-Based_SupplyChainManagement_for_AgriculturalProducts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/btn flex items-center justify-start px-2 space-x-1 w-28 mt-4 text-white rounded-md h-8 font-medium bg-zinc-700 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                            <span className="text-white text-sm">Github <span className="hidden">| Find the code here</span> </span>
                            <BottomGradient className="hidden" />
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

const BottomGradient = ({ className }: { className: string }) => {
    return (
        <>
            <span className={`${className} group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent`} />
            <span className={`${className} group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent`} />
        </>
    );
};
