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
      title: 'Agentic AI Architecture',
      description:
        'Purpose-built autonomous agents that reason, plan, and execute. Our agents use advanced reasoning loops to break down complex goals, adapt to changing conditions, and complete multi-step workflows without constant supervision.',
    },
    {
      title: 'Multi-Agent Orchestration',
      description:
        'Deploy teams of specialised agents that collaborate on complex tasks. Our multi-agent systems coordinate seamlessly—one agent researches, another drafts, a third reviews—working together like a well-oiled team.',
    },
    {
      title: 'Deep System Integration',
      description:
        'Agents that live inside your tech stack. We connect to CRMs, ERPs, email, calendars, databases, and custom APIs—so your agents can take real action, not just provide recommendations.',
    },
    {
      title: 'Continuous Learning & Memory',
      description:
        'Agents that get smarter over time. Built-in feedback loops and persistent memory mean your AI learns from every interaction, improving accuracy and expanding capabilities as it works.',
    },
    {
      title: 'Responsible AI & Governance',
      description:
        'Deploy with confidence. Every agent includes human oversight controls, decision audit trails, and configurable guardrails—so you maintain control while benefiting from autonomous operation.',
    },
  ]
  return (
    <>
      <PageIntro
        eyebrow="Autonomous AI Agents"
        title="Digital workers that reason, plan, and execute—not just respond"
      >
        <p>
          The next generation of AI isn't chatbots—it's autonomous agents that
          handle complex, multi-step workflows end-to-end. We build AI that
          thinks ahead, adapts on the fly, and gets real work done.
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
