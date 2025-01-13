import Header from "./components/header"
import StarterSection from "./components/starter-section"

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="min-h-lvh" />
      <StarterSection />
      <section className="flex min-h-lvh flex-col items-center justify-center text-8 text-gray-classic-800">
        <ul className="flex flex-col gap-4">
          <li>About me</li>
          <li>My project</li>
          <li>Experiences</li>
          <li className="pt-6">Call me</li>
        </ul>
      </section>
      <div className="h-screen snap-start bg-blue-400"></div>
    </main>
  )
}
