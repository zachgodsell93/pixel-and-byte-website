"use client";
import { cn } from "@/lib/utils";
import {
  IconDevices,
  IconPalette,
  IconBrowser,
  IconServer,
  IconShoppingCart,
  IconCode,
  IconCloudUpload,
  IconLifebuoy,
} from "@tabler/icons-react";
import { BorderBeam } from "./magicui/border-beam";
import SparklesText from "./magicui/sparkles-text";

const features = [
  {
    title: "Cross-Platform App Development",
    description:
      "Your app, everywhere. We build apps that work seamlessly across all platforms, so you reach your audience wherever they are.",
    icon: <IconDevices />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designs that make your users smile. Our design team crafts user interfaces that are as intuitive as they are beautiful, making your users feel right at home.",
    icon: <IconPalette />,
  },
  {
    title: "Responsive Web Development",
    description:
      "Your website, perfectly sized for any device. We ensure your website looks and works great, whether it's on a massive desktop screen or a tiny smartphone.",
    icon: <IconBrowser />,
  },
  {
    title: "API & Backend Development",
    description:
      "The backbone of your digital empire. We build robust backends and seamless APIs to keep your app or website running like a well-oiled machine.",
    icon: <IconServer />,
  },
  {
    title: "eCommerce Solutions",
    description:
      "Selling made simple. From product pages to payment gateways, we create eCommerce platforms that convert visitors into customers.",
    icon: <IconShoppingCart />,
  },
  {
    title: "Custom Software Development",
    description:
      "Your unique challenges, our custom solutions. If you can dream it, we can build it—tailored software that fits your business like a glove.",
    icon: <IconCode />,
  },
  {
    title: "Cloud Integration & Migration",
    description:
      "Your data, safe and sound in the cloud. We help you move to the cloud or optimize your existing cloud setup, ensuring scalability and security.",
    icon: <IconCloudUpload />,
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "We’ve got your back, 24/7. From bug fixes to feature updates, our team is here to support your project every step of the way.",
    icon: <IconLifebuoy />,
  },
];

export default function FeaturesTwo() {
  return (
    <div className="relative z-20 py-10 lg:py-10 max-w-7xl mx-auto">
      <div className="px-8">
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          <SparklesText
            className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight"
            text="What we do"
          />
        </h2>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From idea to execution, we’re here to make your project shine.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-pb-orange transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
