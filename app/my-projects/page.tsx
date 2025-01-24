import HeaderNav from "../components/header-nav"
import ProjectCard from "./components/prject-card"

export default function MyProjectsPage() {
  return (
    <main className="container">
      <HeaderNav secoundRoute={{ href: "/", title: "Go to experiences" }} firstRoute={{ href: "/", title: "Back to start" }} />
      <div className="first-breack-point:columns-2 columns-1 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCard key={index} src={`/images/project-${index + 1}.png`} />
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCard key={index} src={`/images/project-${6 - index}.png`} />
        ))}
      </div>
    </main>
  )
}
