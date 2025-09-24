"use client"

import { usePathname } from "next/navigation"
import PageTransition from "../components/Curve/page-transition"
import { usePreviousPath } from "@/utils/usePreviousPath"

export default function MenuTemplate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prevPath = usePreviousPath()

  const isProjectList = pathname === "/project"
  const isDetailPath = pathname.startsWith("/project/") && !isProjectList
  const isBackFromDetail = isProjectList && prevPath?.startsWith("/project/") && prevPath !== "/project"

  if (isDetailPath || isBackFromDetail) {
    return children
  }

  return <PageTransition>{children}</PageTransition>
}
