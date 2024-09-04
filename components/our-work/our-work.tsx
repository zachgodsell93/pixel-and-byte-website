"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import { IconRocket, IconDeviceMobile } from "@tabler/icons-react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const features = [
  {
    // icon: <IconDeviceMobile className="h-8 w-8 text-neutral-200" />,
    title: "Lay Back and Win Web App",
    description: "Lay Back and Win's web app for horse and greyhound betting.",
    content: (
      <div className="relative md:pt-32">
        <Image
          src="/images/work/lbw-web-app.png"
          alt="car"
          height="500"
          width="600"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Thrive Website",
    description:
      "Thrive is a personal finance platform that allows users to track their expenses, set financial goals, and receive personalized financial advice.",
    content: (
      <div className="relative md:pt-32">
        <Image
          src="/images/work/thrive-site.png"
          alt="car"
          height="500"
          width="600"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Thrive Web App",
    description:
      "Thrive is a personal finance platform that allows users to track their expenses, set financial goals, and receive personalized financial advice.",
    content: (
      <div className="relative md:pt-32">
        <Image
          src="/images/work/thrive-web-app.png"
          alt="car"
          height="500"
          width="600"
          className="rounded-lg"
        />
      </div>
    ),
  },
];

export default function OurWorkStickyScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = ["#1f2937", "#262626", "#1e293b"];
  const headerRef = useRef(null);
  const isInView = useInView(ref);
  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = features.map(
      (_, index) => index / features.length
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{
        background: "transparent",
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="w-full relative h-full pt-20 md:pt-40 max-w-7xl mx-auto"
    >
      <div className="px-6 flex flex-col items-center text-center">
        <RoughNotationGroup show={isInView}>
          <RoughNotation
            type="box"
            animationDuration={2000}
            iterations={3}
            strokeWidth={4}
            color="#01B1FE"
          >
            <h2
              ref={headerRef}
              className="text-balance relative z-50 mx-auto mb-4 mt-4 max-w-4xl text-center text-3xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300 md:text-7xl"
            >
              Our Work
            </h2>
          </RoughNotation>
        </RoughNotationGroup>
        {/* <p className="text-neutral-700 text-sm md:text-base max-w-md mx-auto mt-4">
          See some of our work.
        </p> */}
      </div>
      <StickyScroll content={features} />
    </motion.div>
  );
}

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}) => {
  return (
    <div className="py-4 md:py-0">
      <motion.div className="hidden lg:flex h-full  flex-col max-w-7xl mx-auto justify-between relative   p-10 ">
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className="flex lg:hidden  flex-col max-w-7xl mx-auto justify-between relative  p-0 ">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollContent = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0]
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      transition={{
        duration: 0.3,
      }}
      key={item.title + index}
      className="my-40  relative grid grid-cols-2 gap-8"
    >
      <div className="w-full ">
        <motion.div
          style={{
            y: translate,
            opacity: index === 0 ? opacityContent : 1,
          }}
          className=""
        >
          <div>{item.icon}</div>
          <motion.h2 className="max-w-md mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-neutral-600  to-neutral-800">
            {item.title}
          </motion.h2>

          <motion.p className="text-lg text-neutral-700 font-regular max-w-sm mt-2">
            {item.description}
          </motion.p>
          <motion.button className="text-lg bg-pb-blue text-white px-4 py-2 rounded-md mt-4">
            Visit
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        style={{
          y: translateContent,
          opacity: opacity,
        }}
        className="h-full w-full rounded-md  self-start"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};

export const ScrollContentMobile = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  return (
    <motion.div
      transition={{
        duration: 0.3,
      }}
      key={item.title + index}
      className="my-10  relative flex flex-col md:flex-row md:gap-20"
    >
      <motion.div
        key={item.title + index}
        className="w-full rounded-md  self-start mb-8"
      >
        {item.content && item.content}
      </motion.div>
      <div className="w-full">
        <motion.div className=" mb-6">
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
            {item.title}
          </motion.h2>

          <motion.p className="text-sm md:text-base text-neutral-500 font-bold max-w-sm mt-2">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
