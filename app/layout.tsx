import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";


export const metadata: Metadata = {
  title: "Gaurav Portfolio",
  description: "I build custom website that grow business",
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
        <ReactLenis root />
        {children}
      </body>
    </html>
  );
}
