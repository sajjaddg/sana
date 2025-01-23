import Link from "next/link"

export default function MenuPage() {
  return (
    <main className="flex flex-1 items-center justify-center">
      <ul className="flex flex-col gap-4 text-8 text-gray-classic-700">
        <li>
          <Link href="/about-me">About me</Link>
        </li>
        <li>My project</li>
        <li>Experiences</li>
        <li className="pt-6">Call me</li>
      </ul>
    </main>
  )
}
