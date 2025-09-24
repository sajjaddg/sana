import { FC } from "react"
import Image from "next/image"
import { IProject } from "@/services/types"
import Link from "next/link"

const ProjectCard: FC<Pick<IProject, "slug" | "image" | "title">> = ({ image, title, slug }) => {
  return (
    <Link href={`project/${slug.current}`}>
      <div className="group relative flex cursor-pointer break-inside-avoid flex-col">
        <div className="first-breack-point:p-0 first-breack-point:translate-y-9 relative z-0 bg-white p-2 transition-all ease-in-out group-hover:translate-y-0 group-hover:p-2">
          <h6 className="text-6 text-gray-classic-700">{title}</h6>
        </div>
        <Image src={image} width={0} height={0} sizes="100vw" alt="Project Image" className="z-[1] w-full object-cover" />
      </div>
    </Link>
  )
}

export default ProjectCard
