"use client";

import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <div className="lg:mx-auto text-sm lg:text-lg lg:left-0 lg:right-0 lg:top-5 lg:rounded-r-full lg:rounded-l-full lg:w-1/3 from-neutral-200 font-bold drop-shadow-lg bg-opacity-10 backdrop-blur-sm fixed flex justify-center items-center w-full py-3 z-50 bg-black ">
      <div className="space-x-5">
        <Link
          to="home"
          smooth="easeInOutQuad"
          duration={1000}
        >
          <button>Home</button>
        </Link>
        <Link
          to="project"
          smooth="easeInOutQuad"
          duration={1000}
        >
          <button>Projects</button>
        </Link>
        <Link
          to="about"
          smooth="easeInOutQuad"
          duration={1000}
          offset={-30}
        >
          <button>About Me</button>
        </Link>
        <Link
          to="contact"
          smooth="easeInOutQuad"
          duration={1000}
        >
          <button>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar