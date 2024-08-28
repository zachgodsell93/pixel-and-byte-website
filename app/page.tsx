import Image from "next/image";
import HeroSection from "../components/hero-section";
import BentoFeatures from "@/components/bento-features";
import { FeaturesSection } from "@/components/features";
import FeaturesTwo from "@/components/features-two";
import { Cta } from "@/components/cta";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen overflow-hidden antialiased">
      <TracingBeam className="px-6">
        <HeroSection />
        <BentoFeatures />
        <FeaturesTwo />
        <Cta />
      </TracingBeam>
    </main>
  );
}
