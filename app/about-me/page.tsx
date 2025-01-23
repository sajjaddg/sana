import HeaderNav from "../components/header-nav"
import FirstSection from "./sections/first-section"
import ScoundSection from "./sections/secound-section"
import LibrarySection from "./sections/library-section"

export default function AboutMePage() {
  return (
    <main className="first-breack-point:max-w-[776px] pb-24 mx-auto flex max-w-[420px] flex-col gap-10 px-4">
      <HeaderNav secoundRoute={{ href: "/", title: "Go to my projects" }} firstRoute={{ href: "/", title: "Back to start" }} />
      <FirstSection />
      <div className="bg-gray-classic-100 h-px w-full" />
      <ScoundSection />
      <div className="bg-gray-classic-100 h-px w-full" />
      <LibrarySection />
      <p className="text-6 text-gray-classic-600 text-center max-w-[380px] mx-auto pt-10">
        Office ipsum you must be muted. Shelf-ware hill hands unit please staircase heads-up
      </p>
    </main>
  )
}
