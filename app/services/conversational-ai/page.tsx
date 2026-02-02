import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { Values } from '@/components/Values'
interface Content {
  title: string
  description: string
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="mt-12 lg:mt-0 lg:w-[40rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function ContentSection({ title, description }: Content) {
  return (
    <Section title={title}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{description}</p>
      </div>
      {/* <h3 className="font-display mt-12 text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'AI Assistants Brisbane & Gold Coast | Conversational AI',
  description:
    'Intelligent AI assistants for Australian businesses. Context-aware conversations, seamless handoffs, and deep integrations. Brisbane and Gold Coast AI consulting.',
}

const capabilities = [
  {
    name: 'Context-Aware Conversations',
    description: 'AI that remembers previous interactions and understands the full context of each conversation',
  },
  {
    name: 'Multi-Channel Deployment',
    description: 'Deploy once, run everywhere—web, mobile, WhatsApp, Messenger, Slack, and more',
  },
  {
    name: 'Seamless Human Handoff',
    description: 'Intelligent escalation that knows when to bring in a human, with full context transfer',
  },
  {
    name: 'RAG-Powered Knowledge',
    description: 'Connect to your docs, FAQs, and databases for accurate, grounded responses',
  },
  {
    name: 'Action Execution',
    description: 'Go beyond answering—book appointments, update records, process orders in real-time',
  },
  {
    name: 'Analytics & Insights',
    description: 'Understand what customers ask, where AI struggles, and how to continuously improve',
  },
]

const industryExamples = [
  {
    industry: 'Trades & Services',
    example: 'Automated quote requests, job booking, and after-hours enquiry handling',
  },
  {
    industry: 'Healthcare',
    example: 'Patient intake, appointment scheduling, and FAQ handling with compliance built-in',
  },
  {
    industry: 'Hospitality',
    example: 'Reservation management, menu enquiries, and guest request handling',
  },
  {
    industry: 'Real Estate',
    example: 'Property enquiries, inspection bookings, and lead qualification',
  },
  {
    industry: 'Professional Services',
    example: 'Client intake, document collection, and appointment scheduling',
  },
  {
    industry: 'Retail & E-commerce',
    example: 'Product recommendations, order tracking, and returns processing',
  },
]

export default function Page() {
  const content = [
    {
      title: 'Intelligent AI Assistants',
      description:
        'Go beyond simple Q&A. Our AI assistants understand context, remember conversation history, and handle complex multi-turn dialogues that feel natural and helpful.',
    },
    {
      title: 'RAG-Powered Knowledge',
      description:
        'Connect your AI to company documents, FAQs, product catalogs, and databases. Every response is grounded in your actual data—accurate, up-to-date, and on-brand.',
    },
    {
      title: 'Omnichannel Presence',
      description:
        'Deploy across web, mobile, WhatsApp, Messenger, Slack, and more. One AI brain, consistent experience everywhere your customers are.',
    },
    {
      title: 'Smart Escalation',
      description:
        'AI that knows its limits. Seamless handoff to human agents with full conversation context—so customers never have to repeat themselves.',
    },
    {
      title: 'Action-Oriented',
      description:
        'Not just answers—actions. Book appointments, process orders, update accounts, trigger workflows. Your AI assistant gets things done.',
    },
  ]
  return (
    <>
      <PageIntro
        eyebrow="Conversational AI Assistants"
        title="AI that actually helps—not just another FAQ bot"
      >
        <p>
          Modern AI assistants that understand context, take action, and know
          when to bring in a human. Built on the latest LLMs with RAG, memory,
          and deep integrations.
        </p>
      </PageIntro>

      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-24 [counter-reset:section] sm:mt-32 sm:gap-y-32 lg:mt-40 lg:grid-cols-2 lg:gap-y-40">
        {content.map((item) => (
          <ContentSection
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          eyebrow="Industry Applications"
          title="Chatbots that work for your industry"
        >
          <p>
            Every business is different. Here's how chatbots are transforming
            operations across various industries.
          </p>
        </SectionIntro>
        <FadeIn className="mt-16">
          <GridList>
            {industryExamples.map((item) => (
              <GridListItem key={item.industry} title={item.industry}>
                {item.example}
              </GridListItem>
            ))}
          </GridList>
        </FadeIn>
      </Container>

      <Values />

      <ContactSection />
    </>
  )
}
