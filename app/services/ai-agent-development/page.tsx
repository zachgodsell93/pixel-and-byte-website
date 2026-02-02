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
  title: 'AI Agent Development Brisbane & Gold Coast',
  description:
    "Custom AI agents for Australian businesses. Autonomous agents that handle inbox management, scheduling, research, and complex multi-step tasks. Brisbane and Gold Coast AI consulting.",
}

const agentTypes = [
  {
    name: 'Email & Inbox Agent',
    description: 'Automatically triage, respond to, and escalate emails based on content and priority',
  },
  {
    name: 'Scheduling Agent',
    description: 'Coordinate meetings, manage calendars, and handle rescheduling autonomously',
  },
  {
    name: 'Research Agent',
    description: 'Gather information, compile reports, and synthesise findings from multiple sources',
  },
  {
    name: 'Sales Agent',
    description: 'Qualify leads, follow up with prospects, and update CRM records automatically',
  },
  {
    name: 'Support Agent',
    description: 'Handle customer queries, troubleshoot issues, and escalate complex cases',
  },
  {
    name: 'Data Agent',
    description: 'Extract, transform, and analyse data across systems with intelligent processing',
  },
]

export default function Page() {
  const content = [
    {
      title: 'Advanced Agent Architecture',
      description:
        'Custom-designed AI agents with deep reasoning capabilities, engineered to tackle your most sophisticated business problems and operational complexities.',
    },
    {
      title: 'Adaptive Learning Frameworks',
      description:
        'Intelligent systems that continuously learn, improve, and optimize performance through real-world interactions and advanced machine learning techniques.',
    },
    {
      title: 'Multi-System Intelligence',
      description:
        'Develop AI agents capable of seamlessly navigating complex software ecosystems, breaking down technological barriers and connecting disparate business processes.',
    },
    {
      title: 'Autonomous Decision Making',
      description:
        'Create intelligent agents that can analyze intricate scenarios, make strategic decisions, and take proactive actions with minimal human intervention.',
    },
    {
      title: 'Ethical AI Governance',
      description:
        'Implement robust safeguards and transparent decision-making protocols to ensure reliability, fairness, and accountability in every AI agent deployment.',
    },
  ]
  return (
    <>
      <PageIntro
        eyebrow="AI Agent Development"
        title="Build intelligent digital teammates that work harder, smarter, and never ask for a coffee break."
      >
        <p>
          Cutting-edge AI agents designed to solve complex problems, automate
          intricate processes, and extend your team's capabilities beyond human
          limitations.
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
          eyebrow="Agent Types"
          title="AI agents for every business function"
        >
          <p>
            From email management to sales automation, we build agents that
            handle the tasks that eat up your team's time.
          </p>
        </SectionIntro>
        <FadeIn className="mt-16">
          <GridList>
            {agentTypes.map((agent) => (
              <GridListItem key={agent.name} title={agent.name}>
                {agent.description}
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
