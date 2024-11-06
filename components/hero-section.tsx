"use client";
import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function HeroSectionWithBeamsAndGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-10 md:px-8 md:pt-40 md:pb-20"
    >
      <BackgroundGrids />
      <CollisionMechanism
        beamOptions={{
          initialX: -400,
          translateX: 600,
          duration: 7,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        beamOptions={{
          initialX: -200,
          translateX: 800,
          duration: 4,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        beamOptions={{
          initialX: 200,
          translateX: 1200,
          duration: 5,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      />
      <CollisionMechanism
        containerRef={containerRef}
        parentRef={parentRef}
        beamOptions={{
          initialX: 400,
          translateX: 1400,
          duration: 6,
          repeatDelay: 3,
        }}
      />

      <h2
        ref={ref}
        className="text-balance relative z-50 mx-auto mb-4 mt-4 max-w-4xl text-center text-3xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300 md:text-7xl"
      >
        <Balancer>
          Idea to app in{" "}
          <RoughNotationGroup show={isInView}>
            <RoughNotation
              type="highlight"
              animationDuration={2000}
              iterations={3}
              color="#01B1FE"
            >
              weeks,
            </RoughNotation>{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="text-black [text-shadow:0_0_rgba(0,0,0,0.1)] dark:text-white">
                <span className="">
                  not{" "}
                  <RoughNotation
                    type="crossed-off"
                    animationDuration={2000}
                    strokeWidth={5}
                    iterations={3}
                    color="#FF6904"
                  >
                    months
                  </RoughNotation>
                </span>
              </div>
            </div>
          </RoughNotationGroup>
        </Balancer>
      </h2>
      <p className="relative z-50 mx-auto mt-4 max-w-lg px-4 text-center text-base/6 text-gray-600 dark:text-gray-200">
        Get your app developed locally in Australia with our team of experienced
        developers. Fast turnarounds, no offshore outsourcing.
      </p>
      <div className="mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row md:mb-20">
        <ContactModal className="w-[80%] sm:w-56" />
        <Link
          href="/pricing"
          className="group relative z-20 flex h-10 w-[80%] cursor-pointer items-center justify-center space-x-2 rounded-lg bg-white p-px px-4 py-2 text-sm font-semibold leading-6 text-black no-underline shadow-input transition duration-200 hover:-translate-y-0.5 dark:bg-neutral-800 dark:text-white sm:w-52"
        >
          Our Work
        </Link>
      </div>
      <div
        ref={containerRef}
        className="relative mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4"
      >
        <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
          <Image
            src="/images/dashboard.png"
            alt="header"
            width={1920}
            height={1080}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

const BackgroundGrids = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
          if (beamRef.current) {
            beamRef.current.style.opacity = "0";
          }
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        // Set beam opacity to 0
        if (beamRef.current) {
          beamRef.current.style.opacity = "1";
        }
      }, 2000);

      // Reset the beam animation after a delay
      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || -45,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "800px",
            translateX: beamOptions.translateX || "700px",
            rotate: beamOptions.rotate || -45,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x + 20}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-[4px] w-10 rounded-full bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-orange-500 to-yellow-500"
        />
      ))}
    </div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.3)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const ContactModal = ({ className }: { className?: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    enquiringAbout: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    const request = await fetch("/api/submit-contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (request.ok) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setLoading(false);
  };
  return (
    <Modal>
      <ModalTrigger
        className={cn(
          "bg-pb-blue dark:bg-white dark:text-black text-white flex justify-center group/modal-btn h-11 relative overflow-hidden rounded-lg",
          className
        )}
      >
        <span className="group-hover/modal-btn:translate-x-[150%] text-center text-sm font-semibold transition duration-500 absolute inset-0 flex items-center justify-center">
          Speak to Us
        </span>
        <div className="-translate-x-[150%] group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          😎
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Request a Free App Consultation
          </h4>
          <div className="space-y-4">
            <div>
              <label className="text-sm mb-0 mt-4 font-bold text-neutral-600 dark:text-neutral-400">
                Name
              </label>
              <input
                type="text"
                placeholder="joe Smith"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-sm mb-0 font-bold text-neutral-600 dark:text-neutral-400">
                Email
              </label>
              <input
                type="email"
                placeholder="joe.smith@example.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-sm mb-0 font-bold text-neutral-600 dark:text-neutral-400">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="0412 345 678"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-sm mb-0 font-bold text-neutral-600 dark:text-neutral-400">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Acme Inc."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-sm mb-0 font-bold text-neutral-600 dark:text-neutral-400">
                What are you enquiring about?
              </label>
              <textarea
                rows={4}
                placeholder="I'm enquiring about..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
                value={formData.enquiringAbout}
                onChange={(e) =>
                  setFormData({ ...formData, enquiringAbout: e.target.value })
                }
              />
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-black dark:bg-neutral-700 dark:text-white rounded-md">
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-pb-orange text-white dark:bg-white dark:text-black rounded-md"
            onClick={handleSubmit}
          >
            {success ? "Submitted" : loading ? "Submitting..." : "Submit"}
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};
