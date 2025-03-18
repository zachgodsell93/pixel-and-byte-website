"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BenoOne() {
  return (
    <div className="w-full max-w-7xl mx-auto my-20 px-4 md:px-8">
      <h2 className="font-sans text-bold text-xl text-center md:text-4xl font-bold tracking-tight text-neutral-8000 dark:text-neutral-100">
        What we do
      </h2>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        We offer a range of AI-powered services to help businesses transform
        their operations and improve their customer experience. Our goal is not
        to replace your team, but to empower them to do the work that drives the
        business forward
      </p>
      <div className="mt-20  grid cols-1 md:grid-cols-3 gap-4 md:auto-rows-[25rem]">
        {items.map((item, index) => (
          <Card
            key={index}
            className={cn("flex flex-col justify-between", item.className)}
          >
            <CardContent className="h-40">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardSkeletonBody>{item.header}</CardSkeletonBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    title: "AI Agents & Automation",
    description:
      "Build intelligent chatbots for customer support, lead generation, and internal communication.",
    header: (
      <Image
        src="/ai-agent.webp"
        alt="Bento grid 1"
        width={500}
        height={500}
        className="w-full object-cover rounded-lg ml-6"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Workflow Automation with AI",
    description:
      "Improve existing flows with and utilise AI to enhance the processes and improve efficiency",
    header: (
      <Image
        src="/automation.png"
        alt="Bento grid 2"
        width={500}
        height={500}
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "AI Enhanced Customer Service",
    description:
      "Improve customer experience with AI-powered chatbots, helpdesk  and sentiment analysis",
    header: (
      <Image
        src="/ai-chat.webp"
        alt="Bento grid 3"
        width={500}
        height={500}
        className="rounded-lg -ml-6 object-cover -mt-4 md:-mt-0"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "AI-Powered Content Creation",
    description: "Generate content with AI-powered suggestions and insights.",
    header: (
      <div className="flex">
        <Image
          src="https://assets.aceternity.com/pro/bento-4.png"
          alt="Bento grid 4"
          width={500}
          height={500}
          className="object-cover rounded-lg ml-6"
        />
        <Image
          src="https://assets.aceternity.com/pro/bento-4.png"
          alt="Bento grid 4"
          width={500}
          height={500}
          className="object-cover rounded-lg ml-6 mt-8"
        />
      </div>
    ),
    className: "md:col-span-2",
  },

  {
    title: "Responsible and Ethical AI",
    description: "Ensure responsible and ethical AI practices.",
    header: (
      <Image
        src="https://assets.aceternity.com/pro/bento-5.png"
        alt="Bento grid 5"
        width={500}
        height={500}
        className="w-[calc(100%-3rem)] mx-auto rounded-lg -mb-4"
      />
    ),
    className: "md:col-span-1",
  },
];

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("overflow-hidden", className)}>{children}</div>;
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
    },
  };
  return (
    <motion.h3
      variants={variants}
      transition={{
        type: "easeOut",
        duration: 0.2,
      }}
      className={cn(
        "font-sans  text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100",
        className
      )}
    >
      {children}
    </motion.h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 15,
    },
  };
  return (
    <motion.p
      variants={variants}
      transition={{
        type: "easeOut",
        duration: 0.2,
      }}
      className={cn(
        "font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </motion.p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
