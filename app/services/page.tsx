import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { Values } from '@/components/Values'

const content = [
  {
    title: 'Enterprise Consulting',
    link: '/services/enterprise-consultancy',
    description:
      'We provide expert guidance and recommendations to help you navigate the complex landscape of AI and machine learning. Our team of consultants will help you identify the right AI solutions for your business and develop a strategy to implement them effectively.',
    image: imageWhiteboard,
    tags: [
      'AI Readiness Assessment',
      'Technology Roadmapping',
      'Process Optimization',
      'Legacy System Integration',
      'AI Strategy Development',
    ],
  },
  {
    title: 'Autonomous Agent Development',
    link: '/services/ai-agent-development',
    description:
      'We specialize in developing sophisticated autonomous AI agents designed to automate and streamline complex tasks. Our agents are built to learn, adapt, and execute processes, including tasks such as automated inbox management, meeting scheduling, and customized workflow operations.',
    image: imageLaptop,
    tags: [
      'Lead Enrichment Agent',
      'Email Inbox Agent',
      'Short Form Content Agent',
      'Meeting Scheduler',
      'Data Processing Agent',
    ],
  },
  {
    title: 'AI Workflow Automation',
    link: '/services/ai-workflow-automation',
    description:
      'Our team excels in creating intelligent workflow automation solutions. We leverage the latest AI frameworks and develop custom logic to automate key business processes, allowing your team to focus on strategic initiatives and core business functions.',
    image: imageMeeting,
    tags: [
      'Document Processing',
      'Approval Workflows',
      'Customer Onboarding',
      'Invoice Processing',
      'Data Migration',
    ],
  },
  {
    title: 'Conversational AI (Chatbots)',
    link: '/services/conversational-ai',
    description:
      'We build AI-driven customer service systems that provide personalized and efficient support. Our solutions include intelligent chatbots capable of resolving complex customer inquiries and sentiment analysis tools that provide valuable insights into customer feedback.',
    image: imageWhiteboard,
    tags: [
      'Customer Support Chatbot',
      'Lead Generation Bot',
      'FAQ Assistant',
      'Product Recommendation Bot',
      'Appointment Scheduler',
    ],
  },
  {
    title: 'Voice AI Agents',
    link: '/services/ai-powered-voice-agents',
    description:
      'We build AI-powered voice assistants that can handle complex tasks, such as scheduling, customer support, and data entry. Our solutions leverage natural language processing and machine learning to provide personalized and efficient interactions.',
    image: imageWhiteboard,
    tags: [
      'Virtual Receptionist',
      'Voice Order Processing',
      'Automated Call Center',
      'Voice Surveys',
      'Meeting Transcription',
    ],
  },

  {
    title: 'Data Analytics & BI with AI',
    link: '/services/ai-powered-business-analytics',
    description:
      'We transform raw data into actionable insights with our AI-powered business analytics services. Our team develops custom dashboards and reporting systems that deliver clear, comprehensive visualizations of your business data, enabling informed and strategic decision-making.',
    image: imageWhiteboard,
    tags: [
      'Predictive Analytics',
      'Real-time Dashboards',
      'Customer Segmentation',
      'Sales Forecasting',
      'Performance Metrics',
    ],
  },
]

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
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

function Content() {
  return (
    <>
      {content.map((item) => (
        <Section key={item.title} title={item.title} image={item.image}>
          <div className="space-y-6 text-base text-neutral-600">
            <p>{item.description}</p>
          </div>

          <h3>Included in this phase</h3>
          <TagList className="mt-4">
            {item.tags.map((tag) => (
              <TagListItem key={tag}>{tag}</TagListItem>
            ))}
          </TagList>
        </Section>
      ))}
    </>
  )
}

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="Our services" title="What we do">
        <p>
          We believe in delivering exceptional value through proven expertise
          and innovative solutions. Our comprehensive suite of services is built
          on a foundation of deep industry knowledge and refined methodologies
          that we continue to evolve and perfect.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Content />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
