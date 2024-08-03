import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import WavyBgFooter from '@/components/WavyBgFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Syed Faizan - Professional Portfolio | Software Engineer',
  description: 'Explore Faizan\'s portfolio showcasing projects and skills in software development. Discover a fresh perspective and connect for exciting opportunities.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {


  return (
    <html lang="en" >
      <body className={inter.className}>
        <div className='relative w-full flex justify-center'>
          <Navbar />
        </div>
        {children}
        <footer>
          <WavyBgFooter id="target" />
        </footer>
      </body>
    </html>
  );
}

