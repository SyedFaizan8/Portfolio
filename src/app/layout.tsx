import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const play = Playfair_Display({ subsets: ['latin'], variable: "--font_play" });

export const metadata: Metadata = {
  title: "Syed Faizan",
  description: "Explore Faizan\'s portfolio showcasing projects and skills in software development. Discover a fresh perspective and connect for exciting opportunities.",
  keywords: ["Syed", "Faizan", "Syed Faizan portfolio", "software engineer portfolio", "professional portfolio", "Software Developer", "Web Developer", "Mobile Developer", "DevOps Engineer", "Cybersecurity Specialist", "Full-stack developer", "Portfolio", "Computer Science Engineering", "Project Showcase", "Football", "Next.js Portfolio", "Developer Portfolio"],
  openGraph: {
    title: "Syed Faizan",
    description: "Explore Faizan\'s portfolio showcasing projects and skills in software development. Discover a fresh perspective and connect for exciting opportunities.",
    images: ["https://www.syedfaizan.in/opengraph-image.jpg"],
    url: "https://www.syedfaizan.in",
    type: 'website',
    siteName: "syedfaizan",
    locale: 'en_US',
  },
  twitter: {
    title: "Syed Faizan",
    description: "Explore Faizan\'s portfolio showcasing projects and skills in software development. Discover a fresh perspective and connect for exciting opportunities.",
    images: ["https://www.syedfaizan.in/opengraph-image.jpg"],
    card: "summary_large_image",
    site: "@SyedFaizan",
  },
  metadataBase: new URL('https://www.syedfaizan.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" }
    ]
  }
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

