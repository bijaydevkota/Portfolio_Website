import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

// 🔥 Updated metadata for SEO and social sharing
export const metadata: Metadata = {
  title: 'Bijay Devkota | Software Developer',
  description: "Hey, I'm Bijay Devkota. Passionate Software Developer From Nepal",
  keywords: ['Bijay Devkota', 'bijaydevkota', 'devkotabijay', 'Devkota Bijay', 'Mernstack Developer', 'Fullstack Developer', 'Portfolio' , 'Software Developer', 'IT'],
  authors: [{ name: 'Bijay Devkota', url: 'https://devkotabijay.com.np' }],
  creator: 'Bijay Devkota',
  metadataBase: new URL('https://devkotabijay.com.np'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bijay Devkota |  Software Developer',
    description: "Hey, I'm Bijay Devkota.Passioanate Software Developer From Nepal",
    url: 'https://devkotabijay.com.np',
    siteName: 'Bijay Devkota',
    type: 'website',
    locale: 'en_US',
    // Optional image:
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bijay Devkota | Software Developer',
    description: "Hey, I'm Bijay Devkota.Passioanate Software Developer From Nepal",
    // Optional image:
    // images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
