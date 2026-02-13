"use client"

import { useState, useRef, useEffect } from "react"
import { SplitFlapText, SplitFlapAudioProvider } from "../components/SplitFlapText"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "AI Customer Service Agent",
    medium: "Conversational AI",
    description: "24/7 intelligent customer support handling inquiries, bookings, and escalations.",
    span: "col-span-2 row-span-2",
  },
  {
    title: "Workflow Automation",
    medium: "Process Automation",
    description: "End-to-end business process automation reducing manual work by 80%.",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Voice AI Assistant",
    medium: "Voice Technology",
    description: "Natural language voice agents for phone systems and smart devices.",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Knowledge Base AI",
    medium: "RAG Systems",
    description: "Intelligent document retrieval and question answering from your business data.",
    span: "col-span-1 row-span-1",
  },
  {
    title: "AI Strategy Consulting",
    medium: "Strategy",
    description: "Roadmaps and implementation plans for AI adoption across your organization.",
    span: "col-span-2 row-span-1",
  },
  {
    title: "Data Analytics Pipeline",
    medium: "Data Intelligence",
    description: "Automated reporting and insights from your business data.",
    span: "col-span-1 row-span-1",
  },
]

function WorkCard({ project, index, persistHover = false }: { project: typeof projects[0]; index: number; persistHover?: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const [isScrollActive, setIsScrollActive] = useState(false)

  useEffect(() => {
    if (!persistHover || !cardRef.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 80%",
        onEnter: () => setIsScrollActive(true),
      })
    }, cardRef)
    return () => ctx.revert()
  }, [persistHover])

  const isActive = isHovered || isScrollActive

  return (
    <article
      ref={cardRef}
      className={`group relative border border-border p-5 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden ${project.span} ${isActive ? "border-accent" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} style={{ backgroundColor: "oklch(0.6 0.15 240 / 0.05)" }} />

      <div className="relative z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{project.medium}</span>
        <h3 className={`mt-3 font-[var(--font-display)] text-2xl md:text-4xl tracking-tight transition-colors duration-300 ${isActive ? "text-accent" : "text-foreground"}`}>
          {project.title}
        </h3>
      </div>

      <div className="relative z-10">
        <p className={`font-mono text-xs text-muted-foreground leading-relaxed transition-all duration-500 max-w-[280px] ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          {project.description}
        </p>
      </div>

      <span className={`absolute bottom-4 right-4 font-mono text-[10px] transition-colors duration-300 ${isActive ? "text-accent" : "text-muted-foreground/40"}`}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className={`absolute top-0 right-0 w-12 h-12 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>

      <div className={`absolute bottom-0 left-0 w-12 h-12 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  )
}

export default function Work() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headerRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current!, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current!, start: "top 90%", toggleActions: "play none none reverse" },
      })

      const cards = gridRef.current!.querySelectorAll("article")
      if (cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current!, start: "top 90%", toggleActions: "play none none reverse" },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <SplitFlapAudioProvider>
      <div className="pt-16">
        <section className="relative bg-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background" />
          <div className="relative pl-8 md:pl-10 pr-6 md:pr-10 py-32">
            <SplitFlapText text="OUR WORK" speed={50} size="clamp(2rem, 6vw, 5rem)" />
            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mt-6">
              Selected projects and case studies across AI agents, automation, and strategy.
            </p>
          </div>
        </section>

        <section className="pl-8 md:pl-10 pr-6 md:pr-10 py-16">
          <div ref={headerRef} className="mb-16 flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Case Studies</span>
              <h2 className="mt-4 font-[var(--font-display)] text-5xl md:text-7xl tracking-tight">SELECTED WORK</h2>
            </div>
            <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
              Real solutions built for Australian businesses.
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]">
            {projects.map((project, index) => (
              <WorkCard key={index} project={project} index={index} persistHover={index === 0} />
            ))}
          </div>
        </section>
      </div>
    </SplitFlapAudioProvider>
  )
}
