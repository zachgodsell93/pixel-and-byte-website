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
  title: 'Voice AI Agents Brisbane & Gold Coast',
  description: 'AI-powered phone agents for Australian businesses. Handle inbound calls, make outbound calls, and provide 24/7 voice support. Brisbane and Gold Coast AI consulting.',
}

export default function Page() {
  const content = [
    {
      title: 'Natural Language Understanding',
      description:
        'Cutting-edge speech recognition and contextual comprehension that goes far beyond traditional voice interfaces.',
    },
    {
      title: 'Multimodal Interaction',
      description:
        'Voice AI agents capable of processing and responding across text, audio, and visual communication channels.',
    },
    {
      title: 'Personalization Engines',
      description:
        'Adaptive voice experiences that learn individual user preferences and communication styles.',
    },
    {
      title: 'Enterprise-Grade Deployment',
      description:
        'Secure, scalable voice AI solutions that integrate seamlessly with existing business communication infrastructures.',
    },
    {
      title: 'Accent and Dialect Intelligence',
      description:
        'Advanced linguistic models that ensure accurate understanding across diverse language variations and communication styles.',
    },
  ]
  return (
    <>
      <PageIntro
        eyebrow="AI Powered Voice Agents"
        title="Voice interfaces that listen, understand, and act with human-like precision."
      >
        <p>
          Advanced voice AI solutions that transform audio interactions into
          intelligent, context-aware experiences across multiple platforms and
          use cases.
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
