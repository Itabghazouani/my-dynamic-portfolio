import { Inter, Calistoga } from 'next/font/google';

import { twMerge } from 'tailwind-merge';

import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://my-dynamic-portfolio-bcn25.vercel.app'),
  title: 'My Animated Portfolio',
  description:
    'A dynamic and responsive portfolio showcasing my front-end development skills.',
  openGraph: {
    title: 'My Animated Portfolio',
    description:
      'A dynamic and responsive portfolio showcasing my front-end development skills.',
    url: 'https://my-dynamic-portfolio-bcn25.vercel.app/',
    siteName: 'My Animated Portfolio',
    images: [
      {
        url: '/opengraph-dynamic-portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Preview of my Portfolio',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-900 text-white antialiased font-sans',
        )}
      >
        {children}
      </body>
    </html>
  );
}
