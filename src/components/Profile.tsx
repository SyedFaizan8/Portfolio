import React from "react";
import Imagecards from "./ui/imagecards";

export function Profile() {

    return (
        <div id="about" className="w-full mb-2 lg:mb-12 lg:mt-20 bg-black bg-dot-white/[0.3]  relative flex flex-col items-center justify-center pt-16">
            {/* Radial gradient for the container to give a faded look */}
            <div className="z-10 absolute pointer-events-none inset-0 flex  items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="font-play text-start lg:text-center lg:text-7xl w-full text-5xl pb-8 lg:pb-10 px-10 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                About Me
            </p>
            <div className="z-20 lg:z-0 grid grid-cols-3 lg:px-20">
                <Imagecards classname="col-span-3 lg:col-span-1 w-full pb-10" imageUrl="/sideProfile.webp" />
                <div className="text-white col-span-3 lg:col-span-2 space-y-6 px-12 lg:px-4  text-wrap pb-10 text-justify indent-12 hyphens-auto md:hyphens-none">
                    <p>Hello! I am Syed Faizan, a recent Computer Science Engineering graduate and a passionate Software Developer specializing in web and mobile applications, DevOps, and cybersecurity. With a strong foundation in frontend and backend technologies, I create efficient and innovative solutions.</p>
                    <p>During my studies, I completed projects ranging from complex web applications to secure systems. I pride myself on my problem-solving skills, attention to detail, and teamwork.</p>
                    <p>I am an avid learner, staying updated with industry trends. When not coding, I enjoy exploring new technologies, playing football, and video games, which teach me strategic thinking and perseverance.</p>
                </div>
            </div>
        </div >
    );
}