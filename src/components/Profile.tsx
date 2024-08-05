import React from "react";
import Imagecards from "./ui/imagecards";

export function Profile({ id }: { id: string }) {

    return (
        <div id={id} className="w-full mb-10 bg-black bg-dot-white/[0.2]  relative flex flex-col items-center justify-center pt-8">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex  items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="text-start w-full text-5xl pb-8 px-10 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                About Me
            </p>
            <div className="grid grid-cols-3">
                <Imagecards classname="col-span-3 w-full flex pb-10" imageUrl="/sideProfile.jpg" />
                <div className="col-span-3 space-y-6 px-14 text-wrap pb-10  text-justify indent-12">
                    <p>Hello! I'm Syed Faizan, a recent Computer Science Engineering graduate and a passionate Software Developer specializing in web and mobile applications, DevOps, and cybersecurity. With a strong foundation in frontend and backend technologies, I create efficient and innovative solutions.</p>
                    <p>During my studies, I completed projects ranging from complex web applications to secure systems. I pride myself on my problem-solving skills, attention to detail, and teamwork.</p>
                    <p>I'm an avid learner, staying updated with industry trends. When not coding, I enjoy exploring new technologies, playing video games, and football, which teach me strategic thinking and perseverance.</p>
                </div>
            </div>
        </div >
    );
}