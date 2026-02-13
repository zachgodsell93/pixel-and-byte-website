import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SmoothScrollWrapper } from "./components/SmoothScrollWrapper";

export const metadata: Metadata = {
  title: "Pixel & Byte — AI Consulting",
  description: "Gold Coast-based AI consulting for Australian businesses. Chatbots, automation, and AI agents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay antialiased">
        <SmoothScrollWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
