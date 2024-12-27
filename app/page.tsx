import { LogoIcon } from "@/public/icons"

export default function Home() {
  return (
    <div className="home h-screen snap-y snap-mandatory overflow-y-scroll bg-white">
      <header className="sticky h-screen top-0">
        <LogoIcon className="text-gray-classic-900 logo w-40" />
      </header>
      <div className="h-screen bg-red-600"></div>
      <div className="bg-black-600 h-screen"></div>
      <div className="h-screen bg-blue-400"></div>
    </div>
  )
}
