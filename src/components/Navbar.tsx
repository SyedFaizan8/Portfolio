"use client";

import { Link } from "react-scroll"
import React, { MouseEvent } from "react"

const Navbar: React.FC = () => {

  const prevent = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  }

  return (
    <div className="lg:mx-auto text-sm lg:text-lg lg:left-0 lg:right-0 lg:top-3 lg:rounded-r-full lg:rounded-l-full lg:w-2/5  xl:w-2/6 from-neutral-200 font-bold drop-shadow-lg bg-opacity-10 backdrop-blur-sm fixed flex justify-center items-center w-full py-3 z-50 bg-black ">
      <div className="space-x-5">
        <Link
          to="home"
          smooth="easeInOutQuad"
          duration={500}
          onClick={() => prevent}
        >
          <button>Home</button>
        </Link>
        <Link
          to="project"
          smooth="easeInOutQuad"
          duration={500}
          offset={-80}
          onClick={() => prevent}
        >
          <button>Projects</button>
        </Link>
        <Link
          to="about"
          smooth="easeInOutQuad"
          duration={500}
          offset={-10}
          onClick={() => prevent}
        >
          <button>About Me</button>
        </Link>
        <Link
          to="contact"
          smooth="easeInOutQuad"
          duration={500}
          onClick={() => prevent}
        >
          <button>Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar