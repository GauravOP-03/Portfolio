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
  keywords:["portfolio","gaurav kumar","full stack developer","next.js developer","react developer","node.js developer","web developer","software engineer","javascript developer","typescript developer","frontend developer","backend developer","mern stack developer","developer portfolio","personal website"],

  robots: {
      index:true,
      follow:true,
      nocache: true,
      googleBot: {
          index:true,
          follow:true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1
      }
  }
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
