"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FAQs = [
  {
    question: "How much does it cost to build an app?",
    answer:
      "There are a number of factors that contribute to the cost of building an app, including the complexity of the app, the number of features it has, and the platform it is built for. On average, the cost generally starts at $10,000 and can go into the hundreds of thousands for enterprise-level apps.",
  },
  {
    question: "How long does it take to build an app?",
    answer:
      "As with the cost, this depends on the complexity of the app and the number of features. We find that for the majority of our customers, the time to market is within 1-2 months",
  },
  {
    question: "Should I develop for both Android and iOS or just one?",
    answer:
      "As a rule of thumb, we recommend developing for both Android and iOS as this will give you the widest reach. However, if your target market is predominantly one platform, then you should consider developing for that platform only. It is also worth noting whether you would need to develop natively or using a cross-platform framework.",
  },
  {
    question: "What's the process of getting my app to market?",
    answer:
      "First step is to get in touch with us, we will work through your idea and requirements. From there we are able to provide you with a quote and Scope of Work. Once that is agreed upon. We can then begin the UI/UX Design, where we get designs approved by you. After that we begin the development phase, where we build the app to the design and your requirements. Finally, we perform testing and handover the app to you.",
  },
  {
    question: "Do you use off-shore development teams?",
    answer:
      "For the development of your app, we use all Australian and New Zealand based developers. If there is critical infrastructure involved then we do have technical staff located in Singapore and the UK.",
  },
  {
    question: "Is all my data kept in Australia?",
    answer:
      "All data is stored in Australia to ensure we are compliant with Australian data governance laws. If these laws aren't applicable to your business, we have the option of utilising Edge Networks to make the data quickly available to users around the world.",
  },
];
export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-20">
      <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-left md:text-6xl">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconPlus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <IconMinus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
