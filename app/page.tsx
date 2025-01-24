import Link from "next/link"

import { IconArrow } from "@/public/icons"

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center gap-10 p-4 md:p-0">
      <div className="m-auto flex h-fit max-w-[772px] flex-col items-center justify-center gap-4">
        <h3 className="text-6 text-gray-classic-900 md:text-8 self-start font-medium transition-all">Hi there, this is Sana</h3>
        <p className="text-5 text-gray-classic-700 md:text-7 transition-all">
          Office ipsum you must be muted. Shelf-ware hill hands unit please staircase heads-up. Job boil eager loop member request
          money best dear. Hits speed eye deck boardroom didn't sorry job squad. Define organic who's vendor expectations well.
          Previous game cob customer out follow. Procrastinating floor cross win ballpark engagement later adoption hands wanted.
          While creep ditching problem barn. Keep comes yet quick opportunity. Move get unlock barn left left wheel expectations.
        </p>
        <Link href="menu">
          <IconArrow className="text-gray-classic-800 w-8 animate-bounce pt-6" />
        </Link>
      </div>
    </main>
  )
}
