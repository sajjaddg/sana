import HeaderNav from "@/app/components/header-nav"
import ProjectCard from "./components/prject-card"
import { getProjects } from "@/services/data"

export default async function MyProjectsPage() {
  const data = await getProjects()
  console.log(data)

  return (
    <main className="container">
      <HeaderNav
        secoundRoute={{ href: "/menu", title: "Go to experiences" }}
        firstRoute={{ href: "/menu", title: "Back to start" }}
      />
      <div className="first-breack-point:columns-2 columns-1 gap-4">
        {data.map((item) => (
          <ProjectCard key={item._id} title={item.title} src={item.image} />
        ))}
      </div>
    </main>
  )
}
