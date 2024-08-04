"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
    IconBrandGithub,
    IconBrandGmail,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";

export default function WavyBgFooter() {

    const gmailLink: string = "https://mail.google.com/mail/?view=cm&su=This%20came%20from%20Portfolio&to=Syedbusiness21@gmail.com";

    return (
        <>
            <WavyBackground id="contact" className="w-full grid grid-cols-3" >
                <div className="col-span-1 col-start-2 px-14 mb-2">
                    <div className="space-y-2">
                        <p className="text-2xl text-center sm:text-4xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                            Contact Me
                        </p>
                        <p className="text-2xl text-center sm:text-xl font-bold relative bg-clip-text text-transparent pb-2 bg-gradient-to-b from-neutral-200 to-neutral-500">
                            Feel free to reach out.
                        </p>
                    </div>
                    <div className="space-y-2 ">
                        <a
                            href="https://www.github.com/SyedFaizan8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                            <span className="text-neutral-300 text-sm">GitHub</span>
                            <BottomGradient />
                        </a>
                        <a
                            href={gmailLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                            <IconBrandGmail className="h-4 w-4 text-neutral-300" />
                            <span className="text-neutral-300 text-sm">
                                GMail
                            </span>
                            <BottomGradient />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/syedfaizan-edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            <IconBrandLinkedin className="h-4 w-4 text-neutral-300" />
                            <span className="text-neutral-300 text-sm">
                                LinkedIn
                            </span>
                            <BottomGradient />
                        </a>
                        <a
                            href="https://www.github.com/SyedFaizan8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            <IconBrandInstagram className="h-4 w-4 text-neutral-300" />
                            <span className="text-neutral-300 text-sm">
                                Instagram
                            </span>
                            <BottomGradient />
                        </a>
                    </div>
                </div>
            </WavyBackground>
            <p className="text-2xl sm:text-sm font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                ©2024 Syed Faizan - All Rights Reserved
            </p>
        </>
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
