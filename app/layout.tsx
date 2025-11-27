import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mudassar Naveed | Software Engineer Portfolio | Frontend & Backend Developer",
  description: "Software Engineer with 2.5+ years of Frontend Development experience and 6 months of Backend Development. Specialized in React, Next.js, NestJS, and building scalable web applications.",
  keywords: ["Mudassar Naveed", "Software Engineer", "Frontend Developer", "Backend Developer", "React", "Next.js", "NestJS", "TypeScript", "Portfolio"],
  authors: [{ name: "Mudassar Naveed" }],
  openGraph: {
    title: "Mudassar Naveed - Software Engineer Portfolio",
    description: "Software Engineer with expertise in Frontend and Backend Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
