"use client"
import React from "react"

import { LogoIcon } from "@/public/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const path = usePathname()
  return (
    <header className="text-gray-classic-900 sticky top-0 z-10 w-full p-16">
      <Link href="/menu" className={path === "/menu" ? "pointer-events-none" : ""}>
        <LogoIcon className="w-10" />
      </Link>
    </header>
  )
}

export default Header
