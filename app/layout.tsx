import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";
import { Noise } from "@/components/ui/noise"; // Import Noise
import { Cursor } from "@/components/ui/cursor";
import { Preloader } from "@/components/ui/preloader";
import SmoothScroll from "@/components/ui/smooth-scroll";


export const metadata: Metadata = {
  title: {
    default: "Gaurav Kumar | Full Stack Developer",
    template: "%s | Gaurav Kumar"
  },
  description: "I build high-performance applications for enterprise clients. Specialist in Next.js, and Scalable Backend Systems.",
  openGraph: {
    title: "Gaurav Kumar | Full Stack Developer",
    description: "Building the next generation of web experiences.",
    url: "https://portfolio-olive-five-k36adlswe2.vercel.app",
    siteName: "Gaurav Kumar Portfolio",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Kumar | Full Stack Developer",
    description: "I build high-performance applications.",
    creator: "@GauravOP_03",
    images: ["/og-img.png"],
  },
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-body`}
      >
        <SmoothScroll />
        <Preloader />
        <Noise />

        {/* 2. Add the Custom Cursor */}
        <Cursor />
        {children}
      </body>
    </html>
  );
}
