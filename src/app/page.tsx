"use client"

import Cards from "@/components/Cards";
import { ContactMe } from "@/components/ContactMe";
import Earth from "@/components/Earth";
import GeminiEffect from "@/components/GeminiEffect";
import HeroSection from "@/components/HomeSection";
import { Profile } from "@/components/Profile";
import WavyBgFooter from "@/components/WavyBgFooter";

export default function Home(): JSX.Element {
  return (
    <>

      <HeroSection id="home" />
      <GeminiEffect />
      <Cards id="project" />
      <Profile id="about" />
      <div className=" h-full flex flex-row">
        <div className="w-1/2 justify-between  text-white bg-black flex flex-col">
          <div className="w-full bg-black h-full">
            <ContactMe id="contact" />
          </div>
        </div>
        <Earth />
      </div >

      <WavyBgFooter id="target" />
    </>
  );
}


// page.js this is the entry point of application

// "use client";
// import { useRef } from 'react';
// const App = () => {
//   const geeksForGeeksRef = useRef(null);
//   const scrollToElement = () => {
//     if (geeksForGeeksRef.current) {
//       geeksForGeeksRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
//   return (
//     <div style={{ padding: '20px' }}>
//       <h3>Approach 1: Using ref and scrollIntoView</h3>
//       <button onClick={scrollToElement}
//                 style={{ marginBottom: '20px' }}>
//         Scroll to GeeksforGeeks
//       </button>
//       <div style={{ height: '100vh' }}></div>
//       <h1 ref={geeksForGeeksRef} 
//           style={{ color: 'green' }}>
//         GeeksforGeeks
//       </h1>
//     </div>
//   );
// };
// export default App;
