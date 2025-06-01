import Link from "next/link"
import { unstable_ViewTransition as ViewTransition } from "react"
import { IconArrow } from "@/public/icons"
import { getGlobalData } from "@/services/data"

export const revalidate = 60 * 60 * 24 * 2

export default async function Home() {
  const globalData = await getGlobalData()
  return (
    <ViewTransition name="home">
      <main className="flex flex-1 items-center justify-center gap-10 p-4 md:p-0">
        <div className="m-auto flex h-fit max-w-[772px] flex-col items-center justify-center gap-4">
          <h3 className="text-6 text-gray-classic-900 md:text-8 self-start font-medium transition-all">{globalData.siteName}</h3>
          <p className="text-5 text-gray-classic-700 md:text-7 transition-all">{globalData.siteDescription}</p>
          <Link replace href="menu">
            <IconArrow className="text-gray-classic-800 w-8 animate-bounce pt-6" />
          </Link>
        </div>
      </main>
    </ViewTransition>
  )
}
