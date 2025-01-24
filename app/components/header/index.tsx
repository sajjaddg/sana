import React from "react"

import { LogoIcon } from "@/public/icons"

const Header = () => {
  return (
    <header className="text-gray-classic-900 sticky top-0 z-10 w-full p-16">
      <LogoIcon className="w-10" />
    </header>
  )
}

export default Header
