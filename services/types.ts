type IntroData = {
  title: string
  description: string
  _id: string
}

type IProjectsData = {
  _id: string
  title: string
  image: string
  slug: {
    _type: "slug"
    current: string
  }
}

type IProject = {
  description: string
  duration: string
  industry: string
  myRole: string
  content: string
} & IProjectsData

export type { IntroData, IProjectsData, IProject }
