"use client"

import { AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { useEffect } from "react"
import Curve from "./curve"

interface PageTransitionProps {
  children: ReactNode
  backgroundColor?: string
}

export default function PageTransition({ children, backgroundColor = "#1C1D20" }: PageTransitionProps) {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.classList.add("custom-transition-active")
    return () => {
      document.documentElement.classList.remove("custom-transition-active")
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <Curve key={pathname} backgroundColor={backgroundColor}>
        {children}
      </Curve>
    </AnimatePresence>
  )
}
