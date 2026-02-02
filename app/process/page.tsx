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
    image: imageWhiteboard,
    title: 'Discovery & Consultation',
    p1: "Our discovery and consultation process begins with a comprehensive evaluation of your business ecosystem. We dive deep into understanding your goals, challenges, and current technological landscape, while assessing your organization's AI readiness and data infrastructure.",
    p2: 'Following the initial assessment, we conduct a detailed analysis of potential AI applications and use cases specific to your business needs. We examine your existing systems, data quality, and integration requirements while considering industry-specific challenges and opportunities.',
    p3: 'Finally, we develop a strategic roadmap that outlines clear implementation steps and expected outcomes. This includes defining success metrics, establishing project timelines, and creating a detailed resource allocation plan to ensure smooth execution of your AI integration journey.',
    tags: [
      'In-depth questionnaire',
      'Stakeholder interviews',
      'Data infrastructure assessment',
      'Tech stack evaluation',
      'Opportunity mapping workshop',
    ],
  },
  {
    image: imageLaptop,
    title: 'Strategic Planning',
    p1: 'Following our in-depth discovery, we craft a customized strategy that perfectly aligns with your business objectives and industry requirements. We take into account your current technological infrastructure, business processes, and future growth plans to ensure our strategy is both practical and forward-thinking.',
    p2: 'Our strategic planning phase involves a thorough analysis of your existing systems and the identification of KPIs that will measure success. We carefully select the most appropriate technology stack for your needs, considering factors such as scalability, integration capabilities, and long-term maintenance requirements.',
    p3: 'The final step of our strategic planning involves creating a comprehensive project roadmap that outlines clear milestones and deliverables. This roadmap includes detailed timelines, resource allocation plans, and risk mitigation strategies to ensure smooth implementation and maximum return on investment.',
    tags: [
      'Business value assessment',
      'ROI projection model',
      'Technology stack selection',
      'Risk assessment matrix',
      'Phased implementation plan',
    ],
  },
  {
    image: imageWhiteboard,
    title: 'Solution Design & Architecture',
    p1: 'Our solution design phase begins with creating detailed technical specifications and solution architecture that serve as the blueprint for your AI implementation. We develop custom AI models and algorithms tailored to your specific business challenges, ensuring they align perfectly with your operational needs and goals.',
    p2: 'During this phase, our experts design intuitive user interfaces and seamless user experiences that make the AI solution accessible to all stakeholders. We focus on creating interfaces that are not only functional but also engaging, ensuring high adoption rates across your organization.',
    p3: 'We conclude the design phase by developing comprehensive integration plans for connecting the AI solution with your existing systems. This includes detailed API mapping, data flow diagrams, and security considerations to ensure a harmonious integration with your current technology ecosystem.',
    tags: [
      'Technical specification document',
      'Solution architecture diagrams',
      'UI/UX wireframes',
      'API integration blueprint',
      'Data flow modeling',
    ],
  },
  {
    image: imageLaptop,
    title: 'Development & Prototyping',
    p1: 'Our development process follows agile methodologies, with regular sprints and iterative development cycles to ensure flexibility and continuous improvement. We create functional prototypes early in the process, allowing you to experience and provide feedback on core functionalities before full-scale implementation.',
    p2: 'During development, our team implements rigorous code quality standards and conducts thorough testing at every stage. We employ advanced testing methodologies including unit testing, integration testing, and performance testing to ensure robust and reliable solutions.',
    p3: 'Throughout the development phase, we maintain transparent communication, providing regular progress updates and demonstrations of new features. This collaborative approach ensures that the solution evolves in alignment with your expectations and that any necessary adjustments can be made promptly.',
    tags: [
      'Interactive prototypes',
      'Sprint planning & reviews',
      'Code repositories',
      'CI/CD pipeline setup',
      'Milestone demonstrations',
    ],
  },
  {
    image: imageLaptop,
    title: 'Data Integration & Model Training',
    p1: 'Our data specialists begin by implementing robust data pipelines that efficiently collect, process, and transform data from various sources. We establish secure connections to your existing databases, CRMs, ERPs, and other systems, ensuring seamless data flow while maintaining the highest standards of data security and compliance.',
    p2: "Once the data infrastructure is in place, we proceed with training and fine-tuning AI models using your organization's data. This customization process ensures that the AI solutions deliver accurate, relevant, and context-aware results specific to your business environment and industry nuances.",
    p3: 'The final phase involves implementing continuous learning mechanisms that allow the AI systems to evolve over time. We establish automated feedback loops and monitoring systems that capture performance metrics, enabling the models to adapt to changing business conditions and improving accuracy with ongoing use.',
    tags: [
      'ETL pipeline development',
      'Data cleaning & preprocessing',
      'Model selection & training',
      'Performance benchmarking',
      'Feedback loop implementation',
    ],
  },
  {
    image: imageLaptop,
    title: 'Testing & Quality Assurance',
    p1: 'Our rigorous testing process begins with comprehensive functionality testing to ensure all features work as intended across different scenarios and edge cases. We subject the solution to stress tests, simulating peak usage conditions to verify system stability, responsiveness, and scalability under varying loads.',
    p2: 'Security testing is a critical component of our QA process, where we conduct thorough vulnerability assessments and penetration testing. We implement industry-standard security protocols and best practices to safeguard your data and ensure compliance with relevant regulations like GDPR, HIPAA, or industry-specific standards.',
    p3: 'Prior to deployment, we conduct user acceptance testing (UAT) with key stakeholders from your organization to validate that the solution meets business requirements and user expectations. This collaborative testing phase allows us to gather valuable feedback and make final refinements to enhance user experience and adoption.',
    tags: [
      'Automated test suite',
      'Performance & load testing',
      'Security vulnerability assessment',
      'User acceptance testing',
      'Compliance verification',
    ],
  },
  {
    image: imageLaptop,
    title: 'Deployment & Integration',
    p1: 'Our deployment strategy is carefully planned to minimize disruption to your existing operations while ensuring a smooth transition to the new AI solution. We implement a phased rollout approach, gradually introducing new capabilities and allowing users to adapt at a comfortable pace.',
    p2: 'During the integration phase, we provide comprehensive system documentation, including technical specifications, user manuals, and administrator guides. We ensure that your IT team has all the necessary resources to support and maintain the system effectively after the handover.',
    p3: 'Post-deployment, we conduct thorough validation checks to confirm that all integrations are functioning correctly and that data is flowing seamlessly between systems. Our experts remain on standby during the initial operational period to address any issues promptly and ensure a successful launch.',
    tags: [
      'Deployment checklist',
      'System documentation',
      'User training sessions',
      'Integration validation',
      'Go-live support',
    ],
  },
  {
    image: imageLaptop,
    title: 'Ongoing Support & Optimization',
    p1: 'Following successful deployment, we provide dedicated ongoing support through multiple channels including email, phone, and our client portal. Our support team is available to address technical issues, answer questions, and provide guidance to ensure optimal system performance and user satisfaction.',
    p2: 'Beyond technical support, we offer regular performance reviews and optimization services to continuously enhance your AI solution. We analyze usage patterns, system performance metrics, and business outcomes to identify opportunities for improvement and implement refinements that increase ROI.',
    p3: 'Finally, we provide strategic consultations to help you leverage your AI investment for future growth. This includes roadmap discussions for potential expansions, integration with new technologies, and scaling strategies to ensure your AI solutions evolve alongside your business needs and technological advancements.',
    tags: [
      '24/7 technical support',
      'Quarterly performance reviews',
      'Model retraining & updates',
      'System health monitoring',
      'Strategic roadmap consultations',
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
            <p>{item.p1}</p>
            <p>{item.p2}</p>
            <p>{item.p3}</p>
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
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          From discovery to deployment in 2-4 weeks. Our streamlined process
          ensures you get working AI solutions quickly, without the typical
          enterprise complexity. Most projects are live within a month.
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
