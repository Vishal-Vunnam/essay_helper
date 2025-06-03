import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Inter } from 'next/font/google';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} $antialiased`}
      >
      <h1 className={`${playfair.variable} ${inter.variable} text-4xl font-bold text-center my-8`}></h1>
        {children}
      </body>
    </html>
  );
}
