import Image from "next/image"
import HeaderNav from "../components/header-nav"
import FirstSection from "./sections/first-section"

export default function AboutMePage() {
  return (
    <main className="flex flex-col gap-10 px-4">
      <HeaderNav secoundRoute={{ href: "/", title: "Go to my projects" }} firstRoute={{ href: "/", title: "Back to start" }} />
      <FirstSection />
    </main>
  )
}
