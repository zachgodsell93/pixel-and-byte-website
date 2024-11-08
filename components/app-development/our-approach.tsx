"use client";
import Image from "next/image";
import React from "react";
import CallPopup from "./call-popup";
import { useState } from "react";

type Props = {};

const steps = [
  {
    number: 1,
    title: "Market Research and Analysis",
    description:
      "Identify your target audience and understand their needs, preferences, and behaviors.",
  },
  {
    number: 2,
    title: "Product Development and Testing",
    description:
      "Develop digital products or services that address the needs and preferences of your target audience.",
  },
  {
    number: 3,
    title: "Marketing and Promotion",
    description:
      "Develop a comprehensive marketing strategy to promote your digital products or services.",
  },
  {
    number: 4,
    title: "Launch and Optimization",
    description:
      "Launch your digital products or services to the market, closely monitoring their performance and user feedback.",
  },
];

export default function OurApproach({}: Props) {
  const [isCallPopupOpen, setIsCallPopupOpen] = useState(false);

  return (
    <div className="bg-neutral-100">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-primary font-semibold text-2xl md:text-4xl md:leading-tight">
            Our approach
          </h2>
          <p className="mt-1 text-neutral-400">
            This profound insight guides our comprehensive strategy — from
            meticulous research and strategic planning to the seamless execution
            of brand development and website or product deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <Image
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Features Image"
              width={480}
              height={600}
            />
          </div>

          <div>
            <div className="mb-4">
              <h3 className="text-pb-blue text-xs font-medium uppercase">
                Steps
              </h3>
            </div>

            {steps.map((step) => (
              <>
                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-white bg-blue-500 font-semibold text-xs uppercase rounded-full">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-800">
                      <span className="text-primary font-bold underline underline-offset-1">
                        {step.title}:{" "}
                      </span>
                      {step.description}
                    </p>
                  </div>
                </div>
              </>
            ))}

            <a
              className="group inline-flex items-center gap-x-2 py-2 px-3 bg-pb-blue font-medium text-sm text-white rounded-full focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                setIsCallPopupOpen(true);
              }}
              href="#"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Schedule a call
            </a>
            <CallPopup
              open={isCallPopupOpen}
              onOpenChange={setIsCallPopupOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
