import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Bungee_Shade } from 'next/font/google'

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

const bungeeShade = Bungee_Shade({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bungee-shade',
})

export const metadata: Metadata = {
  title: "E-CELL MOTIF RAIT",
  description: "E-cell Technical Team",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bungeeShade.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
