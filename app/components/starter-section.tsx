import { IconArrow } from "@/public/icons"
import Link from "next/link"

const StarterSection = () => {
  return (
    <section className="flex min-h-lvh items-center justify-center gap-10 p-4 md:p-0">
      <div className="m-auto flex h-fit max-w-[772px] flex-col items-center justify-center gap-4">
        <h3 className="self-start text-6 font-medium text-gray-classic-900 transition-all md:text-8">Hi there, this is Sana</h3>
        <p className="text-5 text-gray-classic-700 transition-all md:text-7">
          Office ipsum you must be muted. Shelf-ware hill hands unit please staircase heads-up. Job boil eager loop member request
          money best dear. Hits speed eye deck boardroom didn't sorry job squad. Define organic who's vendor expectations well.
          Previous game cob customer out follow. Procrastinating floor cross win ballpark engagement later adoption hands wanted.
          While creep ditching problem barn. Keep comes yet quick opportunity. Move get unlock barn left left wheel expectations.
        </p>
        <Link href="#id">
          <IconArrow className="w-8 animate-bounce pt-6 text-gray-classic-800" />
        </Link>
      </div>
    </section>
  )
}

export default StarterSection
