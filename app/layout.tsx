import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Work_Sans, Bungee_Shade } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const bungeeShade = Bungee_Shade({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bungee-shade',
})

export const metadata: Metadata = {
  title: "E-CELL RAIT",
  description: "E-cell Technical Team",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${bungeeShade.variable} antialiased`}>
      <body className={workSans.className}>
        {children}
      </body>
    </html>
  );
}
