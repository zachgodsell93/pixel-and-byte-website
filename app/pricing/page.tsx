import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Border } from '@/components/Border'

const packages = [
  {
    name: 'AI Starter',
    price: 'From $2,000',
    description: 'Perfect for businesses wanting to test the waters with AI.',
    features: [
      'Simple chatbot for website or Facebook',
      'Pre-built templates customised to your brand',
      'Basic FAQ automation',
      'Up to 100 conversations/month included',
      '1 week delivery',
      '30 days support included',
    ],
    ideal: 'Small businesses, solo operators, testing AI fit',
  },
  {
    name: 'AI Automation',
    price: 'From $5,000',
    description: 'Automate your workflows and save hours every week.',
    features: [
      'Custom workflow automation design',
      'Integration with 2-3 existing systems',
      'AI-powered data processing',
      'Email/notification automation',
      '2-3 week delivery',
      '60 days support included',
    ],
    ideal: 'Growing businesses, teams spending hours on repetitive tasks',
  },
  {
    name: 'AI Agent',
    price: 'From $10,000',
    description: 'Autonomous AI agents that handle complex tasks end-to-end.',
    features: [
      'Custom AI agent development',
      'Advanced conversation capabilities',
      'Multi-system integration',
      'Voice AI options available',
      'Human handoff workflows',
      '3-4 week delivery',
      '90 days support included',
    ],
    ideal: 'Businesses ready to seriously automate customer service or operations',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Comprehensive AI transformation for larger organisations.',
    features: [
      'Full AI strategy and roadmap',
      'Multiple AI solutions and agents',
      'Enterprise system integrations',
      'Custom model training',
      'Dedicated project manager',
      'On-premise options available',
      'Ongoing strategic partnership',
    ],
    ideal: 'Mid-market companies, complex requirements, multiple use cases',
  },
]

const addOns = [
  {
    name: 'Monthly Support Retainer',
    price: 'From $500/month',
    description:
      'Ongoing maintenance, updates, and priority support. Includes monitoring, minor changes, and quarterly reviews.',
  },
  {
    name: 'Voice AI Add-on',
    price: 'From $3,000',
    description:
      'Add phone-based AI agents to any package. Handle inbound calls, make outbound calls, or both.',
  },
  {
    name: 'Additional Integrations',
    price: 'From $1,000 each',
    description:
      "Connect additional systems beyond what's included in your package.",
  },
  {
    name: 'Training Workshop',
    price: '$500',
    description:
      'Half-day hands-on training session for your team on using and getting the most from your AI tools.',
  },
]

export const metadata: Metadata = {
  title: 'Pricing | AI Solutions for Every Budget',
  description:
    'Transparent pricing for AI chatbots, automation, and agents. Solutions starting from $2,000. Brisbane and Gold Coast AI consulting.',
}

export default function Pricing() {
  return (
    <>
      <PageIntro eyebrow="Pricing" title="Clear pricing, no surprises">
        <p>
          We believe in transparency. Here's what AI solutions typically cost.
          Every business is different, so we'll confirm exact pricing after
          understanding your specific needs.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Solution Packages
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Choose a starting point, then we'll customise to your exact needs.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-10">
          <Border as={FadeIn} />
          <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <FadeIn key={pkg.name}>
                <div className="flex h-full flex-col rounded-3xl bg-neutral-50 p-8">
                  <h3 className="font-display text-xl font-semibold text-neutral-950">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-2xl font-bold text-neutral-950">
                    {pkg.price}
                  </p>
                  <p className="mt-4 text-sm text-neutral-600">
                    {pkg.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm text-neutral-600">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="mr-2 text-neutral-950">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-neutral-200 pt-4">
                    <p className="text-xs text-neutral-500">
                      <strong>Ideal for:</strong> {pkg.ideal}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Add-ons & Ongoing Support
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Enhance your solution with these optional extras.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {addOns.map((addon) => (
              <FadeIn key={addon.name}>
                <div className="rounded-2xl border border-neutral-200 p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-lg font-semibold text-neutral-950">
                      {addon.name}
                    </h3>
                    <span className="text-sm font-medium text-neutral-950">
                      {addon.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">
                    {addon.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 p-12 text-center">
            <h2 className="font-display text-2xl font-semibold text-white">
              Not sure which package is right for you?
            </h2>
            <p className="mt-4 text-neutral-400">
              Book a free 30-minute consultation. We'll assess your needs and
              recommend the best approach—no pressure, no obligation.
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
