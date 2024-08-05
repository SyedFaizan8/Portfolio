"use client";

import { Link } from "react-scroll"

const Navbar = () => {
  return (
    //className="from-neutral-200  to-neutral-500  font-bold drop-shadow-lg bg-opacity-10 backdrop-blur-sm fixed flex top-4 space-x-5 justify-center items-center w-1/3 z-50 bg-black rounded-r-full rounded-l-full py-2"
    <div className="from-neutral-200  font-bold drop-shadow-lg bg-opacity-10 backdrop-blur-sm fixed flex pt-5 justify-center items-center w-full z-50 bg-black ">
      <div className="space-x-5 pb-4">
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