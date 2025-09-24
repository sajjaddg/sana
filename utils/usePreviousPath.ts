"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function usePreviousPath(initialPath = "") {
  const pathname = usePathname()
  const previousPathRef = useRef<string>(initialPath)

  useEffect(() => {
    previousPathRef.current = pathname
  }, [pathname])

  return previousPathRef.current
}
