import Image from "next/image"
import { FC } from "react"

type IProjectCard = {
  src: string
  title: string
}

const ProjectCard: FC<IProjectCard> = ({ src, title }) => {
  return (
    <div className="group relative flex cursor-pointer break-inside-avoid flex-col">
      <div className="first-breack-point:p-0 first-breack-point:translate-y-9 relative z-0 bg-white p-2 transition-all ease-in-out group-hover:translate-y-0 group-hover:p-2">
        <h6 className="text-6 text-gray-classic-700">{title}</h6>
      </div>
      <Image width={0} height={0} sizes="100vw" alt="Project Image" className="z-[1] w-full object-cover" {...{ src }} />
    </div>
  )
}

export default ProjectCard
