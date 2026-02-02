import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import screenshotN8n from '@/images/n8n-screenshot.png'
import imageLaptop from '@/images/laptop.jpg'
import logoAnthropic from '@/images/logos/Anthropic.png'
import logoOpenAI from '@/images/logos/OpenAI.png'
import logoEinstein from '@/images/logos/Eisntein.png'
import logoGemini from '@/images/logos/Gemini.png'
import logoMake from '@/images/logos/Make.png'
import logoN8n from '@/images/logos/N8N.png'
import logoRelevance from '@/images/logos/relevance.png'
import logoElevenLabs from '@/images/logos/elevenlabs.png'
import logoLong from '@/images/logo-bw-long.png'

import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['OpenAI', logoOpenAI],
  ['Anthropic', logoAnthropic],
  ['Gemini', logoGemini],
  ['Einstein', logoEinstein],
  ['Make', logoMake],
  ['N8N', logoN8n],
  ['Relevance', logoRelevance],
  ['ElevenLabs', logoElevenLabs],
]

function Clients() {
  return (
    <div className="rounded-4xl mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="font-display text-center text-sm font-semibold tracking-wider text-white sm:text-left">
            We only work with the best in class.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo], idx) => (
              <li key={idx}>
                <FadeIn className="flex h-full items-center justify-center">
                  <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt={client as string}
                    unoptimized
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function AIServices() {
  return (
    <>
      <SectionIntro
        eyebrow="Agentic AI Solutions"
        title="AI that works for you—autonomously, intelligently, 24/7"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From AI agents that handle complex multi-step tasks to copilots
          embedded in your existing tools—we build AI that actually gets work
          done.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={screenshotN8n}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem
              title="Autonomous AI Agents"
              link="/services/ai-agent-development"
            >
              Digital workers that reason, plan, and execute. Our autonomous
              agents handle complex multi-step workflows—from inbox triage and
              lead qualification to research and reporting—adapting as they
              learn, with minimal human oversight.
            </ListItem>
            <ListItem
              title="AI Workflow Orchestration"
              link="/services/ai-workflow-automation"
            >
              Connect your entire tech stack with intelligent automation.
              Multi-agent systems that coordinate across CRMs, ERPs, and
              business tools—making decisions in real-time and keeping
              everything in sync.
            </ListItem>
            <ListItem
              title="Conversational AI Assistants"
              link="/services/conversational-ai"
            >
              AI assistants that understand context, remember conversations, and
              resolve issues—not just answer FAQs. Deploy across web, mobile,
              and messaging platforms with seamless handoff to humans when
              needed.
            </ListItem>
            <ListItem
              title="Voice AI Agents"
              link="/services/ai-powered-voice-agents"
            >
              Phone agents that sound natural and handle real conversations.
              Inbound support, outbound calls, appointment booking—all with
              real-time intelligence and CRM integration.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function AIServicesTwo() {
  return (
    <div className="rounded-4xl bg-black pb-10">
      <SectionIntro
        eyebrow="Knowledge & Strategy"
        title="AI that knows your business—inside and out"
        className="mt-24 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20"
        flip
        invert
      >
        <p>
          Connect AI to your company's knowledge, data, and systems. Build
          solutions that understand your context and deliver real business
          intelligence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem
              title="RAG & Knowledge AI"
              link="/services/enterprise-consultancy"
              invert
            >
              <span className="text-neutral-400">
                AI that actually knows your business. We build RAG (Retrieval
                Augmented Generation) systems that connect to your documents,
                databases, and knowledge bases—so your AI gives accurate,
                context-aware answers grounded in your data.
              </span>
            </ListItem>
            <ListItem
              title="AI Strategy & Implementation"
              link="/services/enterprise-consultancy"
              invert
            >
              <span className="text-neutral-400">
                Cut through the AI hype. We identify high-impact opportunities,
                build business cases, and implement solutions that deliver ROI.
                From AI governance to change management—strategic guidance for
                sustainable AI adoption.
              </span>
            </ListItem>
            <ListItem
              title="Data Intelligence & Analytics"
              link="/services/ai-powered-business-analytics"
              invert
            >
              <span className="text-neutral-400">
                Transform raw data into decisions. AI-powered dashboards,
                predictive analytics, and automated reporting that surface
                insights in real-time—so you can act faster than your
                competition.
              </span>
            </ListItem>
          </List>
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'AI Solutions Brisbane & Gold Coast | Pixel & Byte',
  description:
    'Brisbane & Gold Coast AI consulting. Chatbots, automation, and AI agents for Australian businesses. Making AI simple and practical. Based on the Gold Coast.',
  keywords: [
    'AI consulting Brisbane',
    'Gold Coast AI automation',
    'Brisbane chatbot development',
    'AI agents Australia',
    'workflow automation Gold Coast',
    'voice AI Brisbane',
    'AI for small business Australia',
  ],
}

function ComingSoon() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <Image src={logoLong} alt="Studio" />
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Coming Soon
        </h2>
      </FadeIn>
    </Container>
  )
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl font-bold uppercase tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Bringing Clarity to AI: Making It Black and{' '}
            <span className="bg-black text-white">White</span>.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Gold Coast-based AI consulting for Australian businesses. We deliver
            chatbots, automation, and AI agents that are easy to implement and
            understand. No more confusion.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <AIServices />
      <AIServicesTwo />

      <ContactSection />
    </>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
