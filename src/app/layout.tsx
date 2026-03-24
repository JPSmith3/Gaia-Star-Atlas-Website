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
  title: "Gaia - Star Atlas | Your Guide to the Stars",
  description:
    "A powerful and beautifully designed stargazing atlas that helps you explore the night sky, understand what you are seeing, and plan unforgettable sessions under the stars.",
  openGraph: {
    title: "Gaia - Star Atlas",
    description:
      "Explore the night sky with an immersive astronomy app. Browse thousands of stars, track celestial events, and navigate the cosmos from your pocket.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
