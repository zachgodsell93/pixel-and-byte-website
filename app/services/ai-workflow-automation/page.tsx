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
  title: 'AI Workflow Automation',
  description:
    'End-to-end automation solutions that reimagine how work gets done, eliminating bottlenecks and unleashing organizational potential.',
}

export default function Page() {
  const content = [
    {
      title: 'Process Intelligence',
      description:
        'Deep diagnostic analysis of your existing workflows to uncover hidden inefficiencies and automation opportunities with maximum impact and ROI.',
    },
    {
      title: 'Intelligent Workflow Design',
      description:
        'Create adaptive automation ecosystems that handle complex decision-making, manage exceptions, and seamlessly integrate across multiple business systems.',
    },
    {
      title: 'AI-Powered Orchestration',
      description:
        'Deploy intelligent agents that can coordinate complex multi-step processes, reducing manual intervention and accelerating business outcomes.',
    },
    {
      title: 'Continuous Optimization',
      description:
        'Dynamic performance monitoring and adaptive refinement of automated processes to ensure maximum efficiency and ongoing improvement.',
    },
    {
      title: 'Enterprise Integration',
      description:
        'Seamless connection and synchronization of automation solutions across your entire technological infrastructure.',
    },
  ]
  return (
    <>
      <PageIntro
        eyebrow="AI Workflow Automation"
        title="Transform chaos into choreography with intelligent process automation.."
      >
        <p>
          End-to-end automation solutions that reimagine how work gets done,
          eliminating bottlenecks and unleashing organizational potential.
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

      <Values />

      <ContactSection />
    </>
  )
}
