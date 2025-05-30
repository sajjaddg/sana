import Link from "next/link"
import { unstable_ViewTransition as ViewTransition } from "react"

export default function MenuPage() {
  return (
    <ViewTransition name="home">
      <main className="flex flex-1 items-center justify-center">
        <ul className="text-8 text-gray-classic-700 flex flex-col gap-4">
          <li>
            <Link href="/about-me">About me</Link>
          </li>
          <li>
            <Link href="/my-projects">My project</Link>
          </li>
          <li>Experiences</li>
          <li className="pt-6">Call me</li>
        </ul>
      </main>
    </ViewTransition>
  )
}
