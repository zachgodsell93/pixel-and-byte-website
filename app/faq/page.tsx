import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

const faqs = [
  {
    question: 'Do I need technical knowledge to use AI solutions?',
    answer:
      "Not at all. We design our AI solutions to be user-friendly and intuitive. You don't need any technical background—if you can use email and basic software, you can use our AI tools. We handle all the technical complexity behind the scenes and provide thorough training to ensure your team is comfortable with every solution we deliver.",
  },
  {
    question: 'Will AI replace my staff?',
    answer:
      "AI augments your team—it doesn't replace them. Think of it as giving your staff superpowers. AI handles the repetitive, time-consuming tasks (data entry, answering common questions, scheduling) so your team can focus on what humans do best: building relationships, creative problem-solving, and strategic thinking. Most of our clients find their staff are happier and more productive after AI implementation.",
  },
  {
    question: 'Is my data safe with AI?',
    answer:
      'Absolutely. Data security is our top priority. We implement enterprise-grade security protocols, use encrypted connections, and follow Australian privacy regulations. Your data stays yours—we never share it with third parties or use it to train models for other clients. We can also work with on-premise solutions if your industry requires it.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most projects are delivered in 2-4 weeks. Simple chatbots can be live in under a week. More complex workflow automation or custom AI agents typically take 3-4 weeks. We use an agile approach, so you see progress throughout—not just at the end.',
  },
  {
    question: 'What does AI implementation cost?',
    answer:
      "It depends on complexity, but we offer solutions for every budget. Simple chatbots start from $2,000. Workflow automation projects typically range from $5,000-$15,000. Custom AI agents and enterprise solutions are quoted based on requirements. We also offer monthly retainer options for ongoing support and continuous improvement.",
  },
  {
    question: "What if my business is too small for AI?",
    answer:
      "There's no such thing as \"too small\" for AI anymore. Some of our most impactful projects have been with businesses of 5-20 employees. A well-placed chatbot or automation can save a small business 20+ hours per week—that's massive for a small team. We'll be honest with you in our initial consultation if we don't think AI is the right fit yet.",
  },
  {
    question: 'Which industries do you work with?',
    answer:
      "We work across many industries including trades and services, healthcare, hospitality, professional services, real estate, retail, and more. AI applications are surprisingly universal—every business has repetitive tasks, customer inquiries, and data that could work harder for them. We'll help you identify the highest-impact opportunities for your specific industry.",
  },
  {
    question: 'What happens after the project is delivered?',
    answer:
      "We don't just deliver and disappear. Every project includes training, documentation, and a support period. We offer ongoing maintenance and support packages to keep your AI solutions running smoothly, updated, and continuously improving. Many clients choose a monthly retainer for peace of mind and ongoing optimisation.",
  },
  {
    question: 'Can AI integrate with my existing software?',
    answer:
      "Yes! We specialise in integrating AI with your existing tools—CRMs, email systems, accounting software, booking systems, and more. We work with platforms like Salesforce, HubSpot, Xero, ServiceM8, Calendly, and hundreds of others. If it has an API (most modern software does), we can connect it.",
  },
  {
    question: "What if the AI makes mistakes?",
    answer:
      "AI isn't perfect—but neither are humans. We design solutions with appropriate guardrails and human oversight for critical decisions. For customer-facing AI, we implement escalation paths so complex queries reach your team. We also continuously monitor and improve AI performance, reducing errors over time. Transparency is key—we'll always be upfront about what AI can and can't do reliably.",
  },
]

export const metadata: Metadata = {
  title: 'FAQ | AI Questions Answered',
  description:
    'Common questions about AI implementation for Australian businesses. Learn about costs, timelines, data security, and how AI can help your business.',
}

export default function FAQ() {
  return (
    <>
      <PageIntro eyebrow="FAQ" title="AI questions, answered plainly">
        <p>
          No jargon, no hype—just straight answers about how AI can work for
          your business. If you don't find your question here, get in touch and
          we'll give you an honest answer.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <dl className="space-y-10 divide-y divide-neutral-200">
            {faqs.map((faq, index) => (
              <div key={index} className={index === 0 ? '' : 'pt-10'}>
                <dt className="font-display text-xl font-semibold text-neutral-950">
                  {faq.question}
                </dt>
                <dd className="mt-4 text-base text-neutral-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
