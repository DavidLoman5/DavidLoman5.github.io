import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { content } from "@/data/content";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorGlow from "@/components/CursorGlow";
import ClickNotes from "@/components/ClickNotes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: `${content.name} · ${content.role}`,
  description: content.tagline,
  openGraph: {
    title: `${content.name} · ${content.role}`,
    description: content.tagline,
    type: "website",
    locale: "zh_TW",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c372a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AnimatedBackground />
        <CursorGlow />
        <ClickNotes />
        {children}
      </body>
    </html>
  );
}
