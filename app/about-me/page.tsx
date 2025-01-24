import HeaderNav from "../components/header-nav"
import FirstSection from "./sections/first-section"
import LibrarySection from "./sections/library-section"
import ScoundSection from "./sections/secound-section"

export default function AboutMePage() {
  return (
    <main className="first-breack-point:max-w-[776px] mx-auto flex max-w-[420px] flex-col gap-10 px-4 pb-24">
      <HeaderNav secoundRoute={{ href: "/", title: "Go to my projects" }} firstRoute={{ href: "/", title: "Back to start" }} />
      <FirstSection />
      <div className="bg-gray-classic-100 h-px w-full" />
      <ScoundSection />
      <div className="bg-gray-classic-100 h-px w-full" />
      <LibrarySection />
      <p className="text-6 text-gray-classic-600 mx-auto max-w-[380px] pt-10 text-center">
        Office ipsum you must be muted. Shelf-ware hill hands unit please staircase heads-up
      </p>
    </main>
  )
}
