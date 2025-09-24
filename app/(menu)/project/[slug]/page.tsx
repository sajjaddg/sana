import { unstable_ViewTransition as ViewTransition } from "react"
import HeaderNav from "@/app/components/header-nav"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/services/data"

interface Props {
  params: { slug: string }
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="container min-h-screen">
      <HeaderNav
        firstRoute={{ href: "/project", title: "Back to Projects" }}
        secoundRoute={{ href: "/about", title: "Go to About me" }}
      />
      <section className="relative z-10 mt-20">
        <ViewTransition name={`project-image-${params.slug}`}>
          <Image
            src={project.image}
            width={0}
            height={0}
            sizes="100vw"
            alt={project.title}
            className="h-[70vh] w-full object-cover"
          />
        </ViewTransition>
        <div className="bg-white p-8">
          <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Duration</h3>
              <p>{project.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold">Industry</h3>
              <p>{project.industry}</p>
            </div>
            <div>
              <h3 className="font-semibold">My Role</h3>
              <p>{project.myRole}</p>
            </div>
          </div>
          <div className="prose max-w-none">
            <h3>Description</h3>
            <p>{project.description}</p>
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        </div>
      </section>
    </main>
  )
}
