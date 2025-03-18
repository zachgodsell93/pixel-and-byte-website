import { cn } from "@/lib/utils";
import {
  IconCloud,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconSearch,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";

export function UseCases() {
  const features = [
    {
      title: "Semantic Search",
      description:
        "AI-powered search engines can understand the context and meaning of queries, providing more accurate and relevant results from internal knowledge bases",
      icon: <IconSearch />,
    },
    {
      title: "Lead enrichment",
      description:
        "AI can automatically gather additional information about leads from various sources, such as social media, company websites, and public databases.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Email Management",
      description:
        "Use AI to filter spam, categorize emails, and even draft responses, improving email efficiency.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Customer Service",
      description:
        "Chatbots and virtual assistants can handle routine customer inquiries, providing instant support and freeing up human agents for more complex issues.",
      icon: <IconUser />,
    },
    {
      title: "Business Intelligence",
      description:
        "Use AI to identify patterns and anomalies in large datasets, providing valuable insights that may be missed by human analysts.",
      icon: <IconCloud />,
    },
    {
      title: "Sentiment Analysis",
      description:
        "AI can analyze customer feedback from various sources, such as social media and reviews, to understand customer sentiment and identify areas for improvement.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Data Entry and Processing",
      description:
        "AI can automate the extraction and input of data from various sources, reducing manual labor and errors.",
      icon: <IconHelp />,
    },

    {
      title: "And everything else",
      description:
        "AI has many more use cases, if you can think it up, AI can probably do it",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      <h2 className="font-sans text-bold text-xl text-center md:text-4xl font-bold tracking-tight text-neutral-8000 dark:text-neutral-100">
        Common Use Cases
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
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
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
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
