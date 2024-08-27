import React from "react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const avatars = [
  {
    name: "John Doe",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    name: "Robert Johnson",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Jane Smith",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Emily Davis",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Tyler Durden",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "Dora",
    src: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const brands = [
  {
    name: "Aceternity UI",
    src: "https://assets.aceternity.com/pro/logos/aceternity-ui.png",
  },
  { name: "Gamity", src: "https://assets.aceternity.com/pro/logos/gamity.png" },
  {
    name: "Host it",
    src: "https://assets.aceternity.com/pro/logos/hostit.png",
  },
  {
    name: "Asteroid Kit",
    src: "https://assets.aceternity.com/pro/logos/asteroid-kit.png",
  },
];

export default function HeroSection() {
  return (
    <div className="pb-4 flex flex-col items-center justify-center overflow-hidden px-8 md:px-8">
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-7xl tracking-tight font-bold mt-4 mb-8 relative text-center text-zinc-700 dark:text-white max-w-6xl mx-auto">
          Your best in class{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-pb-blue/80 to-blue-500 z-10">
            Salesforce and development studio
          </span>
        </h1>

        <h2 className="font-regular text-base md:text-xl text-zinc-500 dark:text-zinc-200 tracking-wide mb-8 mt-8 text-center max-w-xl mx-auto antialiased">
          We provide the best in class design and development services for teams
          that ship with the speed of light.
        </h2>
      </div>

      <div className=" z-10 group mb-10">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pb-blue to-purple-500 rounded-lg" />
          <div className="px-8 py-2 font-semibold  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:text-white hover:bg-transparent">
            Book a call today
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-base text-neutral-700 font-sans dark:text-neutral-300 mt-4">
          Trusted by famous brands
        </p>
        <div className="flex gap-10 h-20 flex-wrap justify-center md:gap-40 relative w-full mt-4 md:mt-2 max-w-4xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex animate-marquee">
            {brands.concat(brands).map((brand, index) => (
              <Image
                key={`${brand.name}-${index}`}
                alt={brand.name}
                src={brand.src}
                width={100}
                height={100}
                className="md:w-40 w-32 object-contain filter mx-0 md:mx-10 dark:invert"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
