"use client"

import { SmoothScroll } from "./SmoothScroll"

export function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>
}
