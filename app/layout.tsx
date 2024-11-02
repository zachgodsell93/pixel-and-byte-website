import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel & Byte | App Development & Website Design",
  description:
    "Pixel & Byte is a Brisbane-based company that specializes in app development and website design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-gray-50 antialiased h-full w-full mx-auto"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
