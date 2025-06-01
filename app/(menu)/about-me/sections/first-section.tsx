import Image from "next/image"

const FirstSection = ({ title, description }: { title: string; description: string }) => {
  return (
    <section className="first-breack-point:flex-row-reverse flex flex-col gap-4">
      <div className="first-breack-point:flex-1 relative h-[280px] w-full">
        <Image fill alt="sana photo" src="/images/sana-photo.jpg" className="object-cover" />
      </div>
      <div className="first-breack-point:flex-1 flex flex-col gap-4">
        <h1 className="text-8 text-gray-classic-900 font-medium">{title}</h1>
        <p className="text-6 text-gray-classic-700">{description}</p>
      </div>
    </section>
  )
}

export default FirstSection
