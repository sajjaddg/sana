import Image from "next/image"

const FirstSection = () => {
  return (
    <section className="first-breack-point:flex-row-reverse flex flex-col gap-4">
      <div className="first-breack-point:flex-1 relative h-[280px] w-full">
        <Image fill alt="sana photo" src="/images/sana-photo.jpg" className="object-cover" />
      </div>
      <div className="first-breack-point:flex-1 flex flex-col gap-4">
        <h1 className="text-8 text-gray-classic-900 font-medium">Am I designer?</h1>
        <p className="text-6 text-gray-classic-700">
          Office ipsum you must be muted. Shelf-ware hill hands unit please staircase heads-up. Job boil eager loop member request
          money best dear. Hits speed eye deck boardroom didn't sorry job squad. Define organic who's vendor expectations well.
        </p>
      </div>
    </section>
  )
}

export default FirstSection
