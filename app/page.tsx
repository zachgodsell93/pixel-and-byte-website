import Image from "next/image";
import HeroSection from "../components/hero-section";
import { BentoFeatures } from "@/components/bento-features";
import { FeaturesSection } from "@/components/features";
import FeaturesTwo from "@/components/features-two";

export default function Home() {
  return (
    <main className="bg-white min-h-screen antialiased px-6">
      <HeroSection />
      <FeaturesTwo />
      {/* <BentoFeatures /> */}
    </main>
  );
}
