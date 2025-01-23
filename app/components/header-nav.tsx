import { FC } from "react"
import Link from "next/link"
import { IconArrow } from "@/public/icons"

type INav = {
  title: string
  href: string
}

type IHeaderNav = {
  firstRoute: INav
  secoundRoute: INav
}
const HeaderNav: FC<IHeaderNav> = ({ firstRoute, secoundRoute }) => {
  return (
    <nav className="flex items-center justify-between text-6 text-gray-classic-500">
      <Link href={firstRoute.href} className="flex items-center gap-2">
        <IconArrow className="w-6 rotate-90" />
        {firstRoute.title}
      </Link>
      <Link href={secoundRoute.href} className="flex items-center gap-2">
        {secoundRoute.title}
        <IconArrow className="w-6 -rotate-90" />
      </Link>
    </nav>
  )
}

export default HeaderNav
