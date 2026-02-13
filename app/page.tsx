"use client"

import Link from "next/link"
import { SplitFlapText, SplitFlapAudioProvider, SplitFlapMuteToggle } from "./components/SplitFlapText"
import { ScrambleTextOnHover } from "./components/ScrambleText"
import { PrinciplesSection } from "./components/PrinciplesSection"
import { MouseFollower } from "./components/MouseFollower"

const agenticServices = [
  { num: "01", title: "Autonomous AI Agents", desc: "Self-directed AI systems that handle complex tasks end-to-end, freeing your team to focus on strategy." },
  { num: "02", title: "AI Workflow Orchestration", desc: "Seamlessly connect and automate multi-step business processes with intelligent workflow engines." },
  { num: "03", title: "Conversational AI Assistants", desc: "Smart chatbots that understand context, hold natural conversations, and drive real business outcomes." },
  { num: "04", title: "Voice AI Agents", desc: "Natural-sounding voice interfaces that handle calls, appointments, and customer interactions 24/7." },
]

const knowledgeServices = [
  { num: "05", title: "RAG & Knowledge AI", desc: "Unlock your organisation's knowledge with retrieval-augmented generation and intelligent search." },
  { num: "06", title: "AI Strategy & Implementation", desc: "From roadmap to rollout — practical AI strategies tailored to your business goals and budget." },
  { num: "07", title: "Data Intelligence & Analytics", desc: "Transform raw data into actionable insights with AI-powered analytics and reporting dashboards." },
]

export default function Home() {
  return (
    <SplitFlapAudioProvider>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background" />
        <div className="relative w-full pl-8 md:pl-10 pr-6 py-32 text-left">
          <div className="flex flex-col items-start gap-2">
            <SplitFlapText text="BRINGING" speed={45} />
            <SplitFlapText text="CLARITY" speed={55} />
            <SplitFlapText text="TO AI" speed={65} />
          </div>

          <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mt-8 mb-10">
            Gold Coast-based AI consulting for Australian businesses. We deliver chatbots, automation, and AI agents that are easy to implement and understand.
          </p>

          <Link href="/contact">
            <ScrambleTextOnHover
              text="GET STARTED"
              as="span"
              className="inline-block bg-foreground text-background font-semibold px-10 py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors cursor-pointer"
            />
          </Link>

          <div className="mt-8">
            <SplitFlapMuteToggle />
          </div>
        </div>
      </section>

      {/* Principles / How We Work */}
      <PrinciplesSection />

      {/* Services */}
      <MouseFollower>
        <section className="pl-8 md:pl-10 pr-6 md:pr-10 py-32">
          <div className="mb-24">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight mb-12">
              AGENTIC AI SOLUTIONS
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {agenticServices.map((s) => (
                <div key={s.num} className="bg-card border border-border p-8 hover:border-accent transition-colors group hover:-translate-y-1 transition-transform duration-300">
                  <span className="font-[var(--font-mono)] text-accent text-sm">{s.num}</span>
                  <h3 className="font-[var(--font-display)] text-2xl mt-3 mb-3 group-hover:text-accent transition-colors">{s.title.toUpperCase()}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight mb-12">
              KNOWLEDGE &amp; STRATEGY
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {knowledgeServices.map((s) => (
                <div key={s.num} className="bg-card border border-border p-8 hover:border-accent transition-colors group hover:-translate-y-1 transition-transform duration-300">
                  <span className="font-[var(--font-mono)] text-accent text-sm">{s.num}</span>
                  <h3 className="font-[var(--font-display)] text-2xl mt-3 mb-3 group-hover:text-accent transition-colors">{s.title.toUpperCase()}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MouseFollower>
    </SplitFlapAudioProvider>
  )
}
