import Image from "next/image"

const LibrarySection = () => {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-8 text-gray-classic-900 font-medium">My library</h1>
      <div className="first-breack-point:grid-cols-4 grid grid-cols-2 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="relative h-[280px] w-[182px] overflow-hidden">
            <Image fill src="/images/library-photo.jpg" alt="library photo" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default LibrarySection
