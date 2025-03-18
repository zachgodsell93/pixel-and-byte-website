import { Hero } from "@/components/hero";
import { Metadata } from "next";
import { BenoOne } from "@/components/bento-one";
import { UseCases } from "@/components/use-cases";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Powered Automation & Data Solutions | Pixel and Byte",
  description:
    "Pixel & Byte is a Brisbane-based company that specializes in AI-powered automation and data solutions. Based in Brisbane",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BenoOne />
      <UseCases />
      <Footer />
    </>
  );
}
