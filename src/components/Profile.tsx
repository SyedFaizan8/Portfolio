import Imagecards from "./ui/imagecards";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Profile() {
    const handleCopy = () => {
        navigator.clipboard.writeText("contact@syedfaizan.in");
    };

    return (
        <div id="about" className="w-full mb-2 lg:mb-12 lg:mt-20 md:mb-12 md:mt-20 bg-black bg-dot-white/[0.3]  relative flex flex-col items-center justify-center pt-16">
            {/* Radial gradient for the container to give a faded look */}
            <div className="z-10 absolute pointer-events-none inset-0 flex  items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="md:hidden block font-play text-start lg:text-center md:text-center lg:text-7xl md:text-7xl w-full text-5xl pb-8 lg:pb-10 md:pb-10 px-5 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                About Me
            </p>
            <div className="z-20 lg:z-0 md:z-0 grid grid-cols-3 lg:px-20 md:pl-5 xl:px-44">
                <Imagecards classname="col-span-3 md:col-span-1 w-full" imageUrl="/sideProfile.webp" />
                <div className="col-span-3 md:col-span-2 h-full justify-center flex items-center">
                    <div>
                        <p className="md:block hidden font-play text-start md:text-center md:text-6xl w-full text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-200">
                            About Me
                        </p>
                        <div className="md:text-lg text-base py-10 text-white space-y-2 px-5 lg:px-6 text-wrap pb-10 text-justify  hyphens-auto md:hyphens-none">
                            <p className="indent-12">Hi, I’m Syed Faizan, a Computer Science graduate and Software Developer. I am committed to developing efficient, scalable solutions and keeping my skills aligned with the latest industry trends. I take a methodical approach to problem-solving and value quality in every project. In my spare time, I enjoy football and gaming, which enhance my critical thinking and strategy skills.</p>
                            <div onClick={() => handleCopy()} className="flex flex-col justify-center md:space-y-0 space-y-2 md:justify-between md:flex-row ">
                                <TooltipProvider>
                                    <Tooltip delayDuration={400}>
                                        <TooltipTrigger asChild>
                                            <span className="font-bold cursor-pointer text-sm md:text-lg">My Email: <span className="underline">contact@syedfaizan.in</span></span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>click to copy address</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <a
                                    href="/resume.pdf"
                                    target="_main"
                                >
                                    <button className=" text-sm shadow-[0_0_0_3px_#000000_inset] px-2 py-1 bg-transparent border border-white text-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}