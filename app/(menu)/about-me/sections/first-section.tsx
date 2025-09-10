"use client"
import Image from "next/image"
import { useState } from "react"

const FirstSection = ({ title, description }: { title: string; description: string }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <section className="first-breack-point:flex-row-reverse flex flex-col gap-4">
      <div className="first-breack-point:flex-1 relative h-[280px] w-full">
        <Image fill alt="sana photo" src="/images/sana-photo.jpg" className="object-cover" />
      </div>
      <div className="first-breack-point:flex-1 flex flex-col gap-4">
        <h1 className="text-8 text-gray-classic-900 font-medium">{title}</h1>
        <div className="relative">
          <p
            data-open={open}
            className="text-6 text-gray-classic-700 max-h-44 overflow-hidden transition-all duration-500 data-[open='true']:max-h-[340px]"
          >
            {description}
          </p>
          <div
            data-open={open}
            className="pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-white to-transparent transition-transform duration-500 ease-in-out data-[open='true']:translate-y-20"
          />
        </div>
        <button className="text-6 cursor-pointer self-start text-[#999999]" onClick={() => setOpen((pre) => !pre)}>
          {open ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  )
}

export default FirstSection
