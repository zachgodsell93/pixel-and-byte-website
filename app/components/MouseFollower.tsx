"use client"

import { useRef, useState, useEffect } from "react"
import gsap from "gsap"

export function MouseFollower({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !cursorRef.current) return
    const section = sectionRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      gsap.to(cursor, { x: e.clientX - rect.left, y: e.clientY - rect.top, duration: 0.5, ease: "power3.out" })
    }

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mouseenter", () => setIsHovering(true))
    section.addEventListener("mouseleave", () => setIsHovering(false))

    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mouseenter", () => setIsHovering(true))
      section.removeEventListener("mouseleave", () => setIsHovering(false))
    }
  }, [])

  return (
    <div ref={sectionRef} className={`relative ${className}`}>
      <div
        ref={cursorRef}
        className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50 w-12 h-12 border-2 transition-opacity duration-300"
        style={{
          borderColor: "oklch(0.6 0.15 240)",
          backgroundColor: "oklch(0.6 0.15 240 / 0.15)",
          opacity: isHovering ? 1 : 0,
          borderRadius: "9999px",
        }}
      />
      {children}
    </div>
  )
}
