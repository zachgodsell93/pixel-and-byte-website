"use client"

import { SplitFlapText, SplitFlapAudioProvider } from "../components/SplitFlapText"

export default function About() {
  return (
    <SplitFlapAudioProvider>
      <div className="pt-16">
        <section className="relative bg-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
          <div className="relative pl-8 md:pl-10 pr-6 md:pr-10 py-32">
            <SplitFlapText text="ABOUT US" speed={50} size="clamp(2rem, 6vw, 5rem)" />
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mt-6">
              We exist to make AI accessible, practical, and genuinely useful for Australian businesses.
            </p>
          </div>
        </section>

        <section className="pl-8 md:pl-10 pr-6 md:pr-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-[var(--font-display)] text-4xl tracking-tight mb-8">OUR STORY</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>Pixel &amp; Byte was founded with a simple conviction: AI shouldn&apos;t be a black box. Too many businesses are sold complex, opaque solutions they can&apos;t understand, maintain, or trust.</p>
                <p>We take a different approach. Every solution we build is designed to be transparent, explainable, and genuinely useful. We don&apos;t chase hype — we solve real problems.</p>
                <p>Based on the Gold Coast, we work with businesses across Australia — from local startups to established enterprises — helping them harness AI in ways that make sense for their teams, their customers, and their bottom line.</p>
              </div>
            </div>

            <div className="bg-card border border-border p-10">
              <span className="font-[var(--font-mono)] text-accent text-sm uppercase tracking-widest">Founder</span>
              <h3 className="font-[var(--font-display)] text-4xl mt-4 mb-6">ZACH GODSELL</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>Zach brings deep expertise in AI engineering, automation, and strategic consulting. With a background spanning software development, data engineering, and AI agent architecture, he&apos;s built systems that range from conversational assistants to fully autonomous AI workflows.</p>
                <p>His philosophy is simple: technology should serve people, not the other way around. Every engagement starts with understanding the business first — then applying the right AI tools to amplify what&apos;s already working.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pl-8 md:pl-10 pr-6 md:pr-10 py-24">
          <h2 className="font-[var(--font-display)] text-4xl tracking-tight mb-12">OUR VALUES</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "CLARITY", desc: "We explain everything. No jargon, no hand-waving. You'll understand what we build and why." },
              { title: "PRACTICALITY", desc: "We build what works, not what's trendy. Every solution is grounded in real business value." },
              { title: "PARTNERSHIP", desc: "We work alongside your team, not above them. Your success is our success." },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border p-8 hover:border-accent transition-colors">
                <h3 className="font-[var(--font-display)] text-2xl text-accent mb-4">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SplitFlapAudioProvider>
  );
}
