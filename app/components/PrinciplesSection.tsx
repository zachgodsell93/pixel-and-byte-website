"use client"

import { useRef, useEffect } from "react"
import { HighlightText } from "./HighlightText"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    number: "01",
    titleParts: [
      { text: "AI AGENTS", highlight: true },
      { text: " THAT WORK", highlight: false },
    ],
    description: "Autonomous systems that handle real business tasks. Not demos — production-ready agents.",
    align: "left",
  },
  {
    number: "02",
    titleParts: [
      { text: "SYSTEMS", highlight: true },
      { text: " OVER SCREENS", highlight: false },
    ],
    description: "We build the logic layer, not just the interface. Workflows that scale with your business.",
    align: "right",
  },
  {
    number: "03",
    titleParts: [
      { text: "CLEAR ", highlight: false },
      { text: "COMMUNICATION", highlight: true },
    ],
    description: "No jargon, no black boxes. You'll understand exactly what your AI does and why.",
    align: "left",
  },
  {
    number: "04",
    titleParts: [
      { text: "REAL ", highlight: false },
      { text: "RESULTS", highlight: true },
    ],
    description: "Measurable impact from day one. We focus on outcomes, not buzzwords.",
    align: "right",
  },
]

export function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !principlesRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current!, {
        x: -60, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current!, start: "top 85%", toggleActions: "play none none reverse" },
      })

      const articles = principlesRef.current!.querySelectorAll("article")
      articles.forEach((article, index) => {
        const isRight = principles[index].align === "right"
        gsap.from(article, {
          x: isRight ? 80 : -80, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: article, start: "top 85%", toggleActions: "play none none reverse" },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 pl-8 md:pl-10 pr-6 md:pr-10">
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">How We Work</span>
        <h2 className="mt-4 font-[var(--font-display)] text-5xl md:text-7xl tracking-tight">OUR PRINCIPLES</h2>
      </div>

      <div ref={principlesRef} className="space-y-24 md:space-y-32">
        {principles.map((principle, index) => (
          <article
            key={index}
            className={`flex flex-col ${principle.align === "right" ? "items-end text-right" : "items-start text-left"}`}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {principle.number}
            </span>

            <h3 className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-8xl tracking-tight leading-none">
              {principle.titleParts.map((part, i) =>
                part.highlight ? (
                  <HighlightText key={i} parallaxSpeed={0.6}>{part.text}</HighlightText>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h3>

            <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
              {principle.description}
            </p>

            <div className={`mt-8 h-[1px] bg-border w-24 md:w-48`} />
          </article>
        ))}
      </div>
    </section>
  )
}
