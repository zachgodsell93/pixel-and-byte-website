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
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import AppCost from "./app-development/app-cost";

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
  const pathname = usePathname();

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
            className={cn(
              "text-neutral-600 dark:text-neutral-300 relative px-4 py-2",
              pathname === navItem.link &&
                "border-2 border-pb-blue rounded-full"
            )}
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
      <Image src="/images/logo-new.png" alt="logo" width={50} height={30} />
    </Link>
  );
};

const AppConsultationModal = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<
    { name: string; cost: number }[]
  >([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    wantReachOut: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [appCostLoading, setAppCostLoading] = useState(false);
  const [appCost, setAppCost] = useState<number | null>(null);

  const steps = [
    { id: 1, title: "Platform" },
    { id: 2, title: "User Engagement" },
    { id: 3, title: "Monetization" },
    { id: 4, title: "Advanced Features" },
    { id: 5, title: "Your Details" },
    { id: 5, title: "Complete" },
  ];
  const totalSteps = steps.length;

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep + 1);
      handleSubmit();
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const request = await fetch("/api/app-cost-calculator", {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        features: [...selectedFeatures],
      }),
    });
    if (request.ok) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setLoading(false);
    setTimeout(() => {
      setAppCost(selectedFeatures.reduce((acc, f) => acc + f.cost, 0));
      setSuccess(null);
    }, 3000);
  };

  return (
    <Modal>
      <ModalTrigger className="hidden md:block px-8 py-2 text-sm font-bold rounded-md bg-pb-orange dark:bg-white dark:text-black text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]">
        Free App Cost Calculator
      </ModalTrigger>
      <ModalBody closeOnClickOutside={false}>
        <ModalContent>
          <AppCost
            steps={steps}
            currentStep={currentStep}
            totalSteps={totalSteps}
            selectedFeatures={selectedFeatures}
            setSelectedFeatures={setSelectedFeatures}
            handleNextStep={handleNextStep}
            formData={formData}
            setFormData={setFormData}
            appCost={appCost}
          />
        </ModalContent>
        <ModalFooter className="space-x-2">
          {currentStep > 1 && (
            <button
              className="px-4 py-2 bg-gray-200 text-black dark:bg-neutral-700 dark:text-white rounded-md"
              onClick={handlePreviousStep}
              disabled={currentStep === 1}
            >
              Previous
            </button>
          )}
          <button
            className={cn(
              success ? "bg-green-500 dark:bg-green-600" : "bg-pb-orange",
              "px-4 py-2 text-white dark:bg-white dark:text-black rounded-md",
              loading && "bg-gray-400 dark:bg-gray-600"
            )}
            onClick={handleNextStep}
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : success ? (
              "Submitted"
            ) : currentStep < totalSteps - 1 ? (
              "Next"
            ) : currentStep === totalSteps - 1 ? (
              "Get Your App Estimate"
            ) : (
              "Submit"
            )}
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};
