"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";

export default function Navbar() {
  const navItems = [
    {
      name: "Our Work",
      link: "/our-work",
    },
    {
      name: "App Development",
      link: "/app-development",
    },
    {
      name: "Web Development",
      link: "/web-development",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="w-full">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
}

const DesktopNav = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      className={cn(
        "hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full",
        "fixed top-0 inset-x-0 transition-all duration-300",
        isScrolled
          ? "bg-gray-50 dark:bg-neutral-900 mt-4 border border-gray-200"
          : "bg-transparent dark:bg-neutral-950 mt-8"
      )}
    >
      <Logo />
      <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className="text-neutral-600 dark:text-neutral-300 relative px-4 py-2"
            key={`link=${idx}`}
            href={navItem.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="w-full h-full absolute inset-0 bg-pb-blue/20 dark:bg-neutral-800 rounded-full"
              />
            )}
            <span className="relative z-20">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <AppConsultationModal />
    </motion.div>
  );
};

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={{
          borderRadius: open ? "4px" : "2rem",
        }}
        key={String(open)}
        className="flex relative flex-col z-[60] lg:hidden w-full justify-between items-center bg-white dark:bg-neutral-950  max-w-[calc(100vw-2rem)] mx-auto px-4 py-2"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          {open ? (
            <IconX
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-lg absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8"
            >
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <motion.span className="block">{navItem.name} </motion.span>
                </Link>
              ))}
              <button className="px-8 py-2 w-full rounded-md bg-black dark:bg-white dark:text-black font-medium text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]">
                Book a call
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image src="/logo-light.png" alt="logo" width={170} height={30} />
    </Link>
  );
};

const AppConsultationModal = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [wantReachOut, setWantReachOut] = useState(false);

  const features = [
    "User Authentication",
    "Push Notifications",
    "In-App Purchases",
    "Social Media Integration",
    "Offline Mode",
    "Analytics",
    "Geolocation",
    "Cloud Sync",
  ];

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <Modal>
      <ModalTrigger className="hidden md:block px-8 py-2 text-sm font-bold rounded-md bg-pb-orange dark:bg-white dark:text-black text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]">
        Free App Cost Calculator
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Free App Cost Estimate
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-neutral-600 dark:text-neutral-400 mb-2">
                Select desired features:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature) => (
                  <label
                    key={feature}
                    className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="form-checkbox"
                    />
                    <span>{feature}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-4 font-bold text-neutral-600 dark:text-neutral-400">
                Expected Number of Users(in the first 6 months)
              </label>
              <select className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white">
                <option value="0-1000">0-1000</option>
                <option value="1001-5000">1001-5000</option>
                <option value="5001-10000">5001-10000</option>
                <option value="10000+">10000+</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="wantReachOut"
                checked={wantReachOut}
                onChange={(e) => setWantReachOut(e.target.checked)}
                className="form-checkbox"
              />
              <label
                htmlFor="wantReachOut"
                className="text-sm text-neutral-600 dark:text-neutral-400"
              >
                Do you want someone to reach out?
              </label>
            </div>
            {wantReachOut && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number (optional)"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
                />
              </>
            )}
          </div>
        </ModalContent>
        <ModalFooter className="space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-black dark:bg-neutral-700 dark:text-white rounded-md">
            Cancel
          </button>
          <button className="px-4 py-2 bg-pb-orange text-white dark:bg-white dark:text-black rounded-md">
            Submit
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};
