import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

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

  return (
    <html lang="en" >
      <body className={`${inter.className}  ${play.variable}`}>
        {children}
      </body>
    </html>
  );
}

