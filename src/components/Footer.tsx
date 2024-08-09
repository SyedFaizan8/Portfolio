"use client";

import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandGmail,
    IconBrandInstagram,
    IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
    const gmailLink: string =
        "https://mail.google.com/mail/?view=cm&su=This%20came%20from%20Portfolio&to=Syedbusiness21@gmail.com";

    return (
        <footer id="contact" className="w-full bg-black pt-8 pb-2 flex flex-col items-center">

            <div className="mb-6 text-center ">
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2">
                    Contact Me
                </p>
                <p className="text-md text-gray-400">
                    Feel free to reach out anytime.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {[
                    {
                        href: gmailLink,
                        icon: <IconBrandGmail className="h-5 w-5" />,
                        label: "GMail",
                    },
                    {
                        href: "https://www.linkedin.com/in/syedfaizan-edu",
                        icon: <IconBrandLinkedin className="h-5 w-5" />,
                        label: "LinkedIn",
                    },
                    {
                        href: "https://www.github.com/SyedFaizan8",
                        icon: <IconBrandGithub className="h-5 w-5" />,
                        label: "GitHub",
                    },
                    {
                        href: "https://www.instagram.com/syedfaizan.8?igsh=MW5rNmVtcDhjMjBydA==",
                        icon: <IconBrandInstagram className="h-5 w-5" />,
                        label: "Instagram",
                    },
                    {
                        href: "https://discordapp.com/users/1051833937120477224",
                        icon: <IconBrandDiscord className="h-5 w-5" />,
                        label: "Discord",
                    },
                ].map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-xs text-white hover:text-gray-200  transition-colors duration-200"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-900  transition-colors duration-200">
                            {icon}
                        </div>
                        <span className="mt-2">{label}</span>
                    </a>
                ))}
            </div>


            <div className="pt-8 text-xs text-center text-gray-500">
                ©2024 Syed Faizan - All Rights Reserved
            </div>
        </footer>
    );
}
