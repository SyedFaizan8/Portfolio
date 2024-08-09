"use client";

import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandGmail,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
    const gmailLink: string = "https://mail.google.com/mail/?view=cm&su=This%20came%20from%20Portfolio&to=Syedbusiness21@gmail.com";
    return (
        <div id="contact" className="w-full bg-black bg-dot-white/[0.3] md:bg-dot-white/[0.2]  relative flex flex-col items-center justify-center ">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex  items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="z-50 mb-2 ">
                <div className="space-y-2">
                    <p className="text-3xl lg:text-6xl text-center font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                        Contact Me
                    </p>
                    <p className="text-sm lg:text-xl text-center font-bold relative bg-clip-text text-transparent pb-2 bg-gradient-to-b from-neutral-200 to-neutral-500">
                        Feel free to reach out.
                    </p>
                </div>
                <div className="space-y-2 text-white">
                    <a
                        href="https://www.github.com/SyedFaizan8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 lg:h-10 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandGithub className="h-4 w-4 " />
                        <span className=" text-sm lg:text-lg">GitHub</span>
                        <BottomGradient />
                    </a>
                    <a
                        href={gmailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 lg:h-10 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                        <IconBrandGmail className="h-4 w-4 " />
                        <span className=" text-sm lg:text-lg">
                            GMail
                        </span>
                        <BottomGradient />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/syedfaizan-edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 lg:h-10 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandLinkedin className="h-4 w-4 " />
                        <span className=" text-sm lg:text-lg">
                            LinkedIn
                        </span>
                        <BottomGradient />
                    </a>
                    <a
                        href="https://www.instagram.com/syedfaizan.8?igsh=MW5rNmVtcDhjMjBydA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 lg:h-10 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandInstagram className="h-4 w-4 " />
                        <span className=" text-sm lg:text-lg">
                            Instagram
                        </span>
                        <BottomGradient />
                    </a>
                    <a
                        href="https://discordapp.com/users/1051833937120477224"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="drop-shadow-lg bg-opacity-30 backdrop-blur-lg relative group/btn flex space-x-2 items-center justify-start px-4  w-full text-white rounded-md h-8 lg:h-10 font-medium bg-black shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandDiscord className="h-4 w-4 " />
                        <span className=" text-sm lg:text-lg">
                            Discord
                        </span>
                        <BottomGradient />
                    </a>
                </div>
            </div>
            <div className="z-50 pt-4 text-xs text-center font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                ©2024 Syed Faizan - All Rights Reserved
            </div>

        </div>
    );
}


function BottomGradient() {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};
