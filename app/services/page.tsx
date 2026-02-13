"use client"

import { SplitFlapText, SplitFlapAudioProvider } from "../components/SplitFlapText"

const services = [
  {
    num: "01", title: "AUTONOMOUS AI AGENTS",
    desc: "Self-directed AI systems that handle complex, multi-step tasks without constant human oversight. From research and data processing to customer onboarding and internal operations.",
    features: ["Goal-oriented task execution", "Multi-tool integration", "Self-correcting workflows", "Human-in-the-loop safeguards"],
    useCases: ["Automated lead qualification", "Document processing pipelines", "Intelligent scheduling systems"],
  },
  {
    num: "02", title: "AI WORKFLOW ORCHESTRATION",
    desc: "Connect your existing tools and processes into intelligent, automated workflows. We design systems where AI coordinates between apps, databases, and teams seamlessly.",
    features: ["Cross-platform automation", "Conditional logic & branching", "Error handling & retry logic", "Real-time monitoring dashboards"],
    useCases: ["CRM-to-onboarding automation", "Multi-channel marketing workflows", "Supply chain coordination"],
  },
  {
    num: "03", title: "CONVERSATIONAL AI ASSISTANTS",
    desc: "Smart chatbots and virtual assistants that go beyond scripted responses. Built with contextual understanding, memory, and the ability to take real actions on behalf of users.",
    features: ["Natural language understanding", "Context retention across sessions", "Action-capable (booking, ordering, etc.)", "Multi-channel deployment"],
    useCases: ["Customer support automation", "Internal knowledge assistants", "E-commerce shopping guides"],
  },
  {
    num: "04", title: "VOICE AI AGENTS",
    desc: "Natural-sounding AI voice interfaces for phone calls, appointments, and customer interactions. Available 24/7, indistinguishable from human operators in many scenarios.",
    features: ["Natural speech synthesis", "Real-time transcription", "Intent recognition", "Handoff to human agents"],
    useCases: ["Appointment booking by phone", "After-hours call handling", "Outbound survey calls"],
  },
  {
    num: "05", title: "RAG & KNOWLEDGE AI",
    desc: "Unlock your organisation's tribal knowledge with retrieval-augmented generation. We build systems that let your team query documents, wikis, and databases in plain English.",
    features: ["Document ingestion & indexing", "Semantic search", "Source attribution & citations", "Access control integration"],
    useCases: ["Internal knowledge bases", "Policy & compliance lookup", "Technical documentation search"],
  },
  {
    num: "06", title: "AI STRATEGY & IMPLEMENTATION",
    desc: "Not sure where to start? We'll assess your business, identify high-impact AI opportunities, and build a practical roadmap from proof-of-concept to production.",
    features: ["AI readiness assessment", "Use-case prioritisation", "Technology selection", "Phased implementation plans"],
    useCases: ["Digital transformation planning", "AI pilot programs", "Team training & upskilling"],
  },
  {
    num: "07", title: "DATA INTELLIGENCE & ANALYTICS",
    desc: "Transform raw data into strategic decisions. We build AI-powered analytics, dashboards, and reporting systems that surface the insights that matter most to your business.",
    features: ["Predictive analytics", "Automated reporting", "Anomaly detection", "Natural language querying"],
    useCases: ["Sales forecasting", "Customer behaviour analysis", "Operational efficiency tracking"],
  },
];

export default function Services() {
  return (
    <SplitFlapAudioProvider>
      <div className="pt-16">
        <section className="relative bg-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
          <div className="relative pl-8 md:pl-10 pr-6 md:pr-10 py-32">
            <SplitFlapText text="OUR SERVICES" speed={50} size="clamp(2rem, 6vw, 5rem)" />
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mt-6">
              Seven core capabilities, one goal: making AI work for your business.
            </p>
          </div>
        </section>

        <section className="pl-8 md:pl-10 pr-6 md:pr-10 py-16">
          <div className="space-y-6">
            {services.map((s) => (
              <div key={s.num} className="bg-card border border-border p-10 lg:p-14 hover:border-accent transition-colors">
                <div className="flex items-start gap-6 mb-8">
                  <span className="font-[var(--font-mono)] text-accent text-3xl font-bold">{s.num}</span>
                  <div>
                    <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl">{s.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">{s.desc}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-10 ml-0 lg:ml-16">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">—</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-accent mb-4">Use Cases</h3>
                    <ul className="space-y-2">
                      {s.useCases.map((u) => (
                        <li key={u} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">—</span> {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SplitFlapAudioProvider>
  );
}
