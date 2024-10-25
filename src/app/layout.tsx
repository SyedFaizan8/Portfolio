import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const play = Playfair_Display({ subsets: ['latin'], variable: "--font_play" });

export const metadata: Metadata = {
  title: 'Syed Faizan',
  description: 'Explore Faizan\'s portfolio showcasing projects and skills in software development. Discover a fresh perspective and connect for exciting opportunities.',
  keywords: ["Syed", "Faizan", "Syed Faizan portfolio", "software engineer portfolio", "professional portfolio", "Software Developer", "Web Developer", "Mobile Developer", "DevOps Engineer", "Cybersecurity Specialist", "Full-stack developer", "Portfolio", "Computer Science Engineering", "Project Showcase", "Football", "Next.js Portfolio", "Developer Portfolio"],
  icons: {
    icon: [
      { url: 'icon.png' },
      { url: 'icon2.png' }
    ],
    apple: '/apple-icon.png'
  },
  metadataBase: new URL('https://syedfaizan.in'),
  appleWebApp: {
    title: 'Syed Faizan Portfolio',
    statusBarStyle: 'black-translucent',
    startupImage: [
      {
        url: '/apple-icon.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" >
      <body className={`${inter.className}  ${play.variable} dark`}>
        {children}
      </body>
    </html>
  );
}

