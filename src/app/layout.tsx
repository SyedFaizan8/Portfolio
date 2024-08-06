"use client"

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import WavyBgFooter from '@/components/WavyBgFooter';
import { useEffect } from 'react';
import Lenis from 'lenis'

const inter = Inter({ subsets: ['latin'] });
const play = Playfair_Display({ subsets: ['latin'], variable: "--font_play" });

export const metadata: Metadata = {
  title: 'Syed Faizan',
  description: 'Explore Faizan\'s portfolio showcasing projects and skills in software development. Discover a fresh perspective and connect for exciting opportunities.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {

  useEffect(() => {
    //scroll
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    //contextmenu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [])

  return (
    <html lang="en" >
      <body className={`${inter.className}  ${play.variable}`}>
        <nav>
          <Navbar />
        </nav>
        {children}
        <footer>
          <WavyBgFooter />
        </footer>
      </body>
    </html>
  );
}

