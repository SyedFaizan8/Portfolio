"use client";

import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLeetcode,
    IconBrandLinkedin,
    IconBrandX,
} from "@tabler/icons-react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { TextBox } from "./ui/textbox";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";

const emailFormSchema = z.object({
    fullname: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    description: z.string().min(1, 'Description is required'),
});

type EmailFormData = z.infer<typeof emailFormSchema>;

export default function Footer() {

    const [status, setStatus] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<EmailFormData>({
        resolver: zodResolver(emailFormSchema),
    });

    const sendEmail = async (data: EmailFormData) => {
        setIsSending(true);
        setStatus('Sending...');
        try {
            const response = await axios.post('/api/send-email', {
                email: data.email,
                fullname: `Mail from ${data.fullname}`,
                description: data.description,
            });

            if (response.status === 200) {
                setStatus('Email sent successfully!');
                setTimeout(() => {
                    setStatus(null);
                }, 3000);
                reset();
            }
        } catch (error: any) {
            console.error(error);
            setStatus('Failed to send email');
            setTimeout(() => {
                setStatus(null);
            }, 3000);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <footer id="contact" className="w-full pt-8 pb-2 flex flex-col items-center">
            <div className="w-full bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0  bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="mb-6 text-center  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
                    <p className="font-play  md:text-6xl text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2">
                        Contact Me
                    </p>
                    <p className=" md:text-2xl text-lg font-bold text-gray-400">
                        Feel free to reach out anytime.
                    </p>
                </div>
                <div className="z-20 w-full font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 max-w-md md:max-w-2xl mx-auto rounded-none md:rounded-2xl px-8  shadow-input">
                    <form className="my-2" onSubmit={handleSubmit(sendEmail)}>
                        <div className="gap-4 md:grid md:grid-cols-2">
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="fullname">Full name</Label>
                                <Input
                                    id="fullname"
                                    placeholder="Full name"
                                    type="text"
                                    {...register('fullname')}
                                />
                                {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-4">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    placeholder="example@gmail.com"
                                    type="email"
                                    {...register('email')}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-8 md:col-span-2">
                                <Label htmlFor="description">Description</Label>
                                <TextBox
                                    id="description"
                                    placeholder="Description"
                                    {...register('description')}
                                    className="h-28 resize-none"
                                />
                                {errors.description && (<p className="text-red-500 text-sm">{errors.description.message}</p>)}
                            </LabelInputContainer>
                        </div>

                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                            disabled={isSending}
                        >
                            Send &rarr;
                            <BottomGradient />
                        </button>
                        {status && <p className="mt-4 text-gray-400 font-bold text-center">{status}</p>}
                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    </form>
                </div>
            </div>
            <div className=" grid grid-cols-3 gap-4  md:grid-cols-6">
                {[
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
                        href: "https://leetcode.com/u/syedfaizan8",
                        icon: <IconBrandLeetcode className="h-5 w-5" />,
                        label: "Leetcode",
                    },
                    {
                        href: "https://discordapp.com/users/1051833937120477224",
                        icon: <IconBrandDiscord className="h-5 w-5" />,
                        label: "Discord",
                    },
                    {
                        href: "https://x.com/syedfaizan_8",
                        icon: <IconBrandX className="h-5 w-5" />,
                        label: "Twitter",
                    },
                    {
                        href: "https://www.instagram.com/syedfaizan.8?igsh=MW5rNmVtcDhjMjBydA==",
                        icon: <IconBrandInstagram className="h-5 w-5" />,
                        label: "Instagram",
                    },
                ].map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-xs text-white hover:text-gray-200  transition-colors duration-200"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 lg:hover:bg-blue-900  transition-colors duration-200">
                            {icon}
                        </div>
                        <span className="mt-2">{label}</span>
                    </a>
                ))}
            </div>
            <div className="pt-8 text-xs text-center text-gray-500">
                ©2025 Syed Faizan - All Rights Reserved
            </div>
        </footer>
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

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};