import { unstable_ViewTransition as ViewTransition } from "react"
import FirstSection from "./sections/first-section"
import LibrarySection from "./sections/library-section"
import ScoundSection from "./sections/secound-section"
import HeaderNav from "@/app/components/header-nav"
import { getAboutData } from "@/services/data"

export const revalidate = 60 * 60 * 24 * 2

export default async function AboutMePage() {
  const { blocks } = await getAboutData()
  const firstBlock = blocks[0]
  const secondBlocks = blocks.slice(1)
  return (
    <ViewTransition name="about">
      <main className="first-breack-point:max-w-[776px] mx-auto flex max-w-[420px] flex-col gap-10 px-4 pb-24">
        <HeaderNav
          secoundRoute={{ href: "/my-projects", title: "Go to my projects" }}
          firstRoute={{ href: "/menu", title: "Back to start" }}
        />
        <FirstSection title={firstBlock.title} description={firstBlock.body} />
        <div className="bg-gray-classic-100 h-px w-full" />
        <ScoundSection data={secondBlocks} />
        <div className="bg-gray-classic-100 h-px w-full" />
        <LibrarySection />
        <p className="text-6 text-gray-classic-600 mx-auto max-w-[380px] pt-10 text-center">
          Office ipsum you must be muted. Shelf-ware hill hands unit please staircase heads-up
        </p>
      </main>
    </ViewTransition>
  )
}
