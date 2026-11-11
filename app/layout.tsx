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
  title: "Neo Lucas Monyebodi | Full Stack Developer",

  description:
    "Portfolio website of Neo Lucas Monyebodi, a Full Stack Developer and Information Technology student specializing in React, Node.js, .NET, SQL and modern web technologies.",

  keywords: [
    "Neo Lucas Monyebodi",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    ".NET Developer",
    "Node.js Developer",
    "UNISA",
    "Portfolio",
    "Web Developer",
    "South Africa",
  ],

  authors: [
    {
      name: "Neo Lucas Monyebodi",
    },
  ],

  creator: "Neo Lucas Monyebodi",

  openGraph: {
    title: "Neo Lucas Monyebodi | Portfolio",
    description:
      "Developer portfolio showcasing projects, skills and experience in software development.",

    siteName: "Neo Portfolio",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
