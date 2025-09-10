import { IntroData } from "./types"
import { unstable_cache } from "next/cache"
import { client } from "@/utils/sanity.client"

const getIntroData = unstable_cache(
  async (): Promise<IntroData> => {
    const data = await client.fetch(`*[_type == "summery"][0]{title,description,_id}`)
    return data
  },
  [],
  {
    tags: ["intro-data"],
    revalidate: 60 * 60 * 24 * 2,
  },
)

const getAboutData = unstable_cache(
  async (): Promise<IntroData[]> => {
    const data = await client.fetch(`*[_type == "aboutMe"]|order(_createdAt asc) {title,description,_id}`)
    return data
  },
  [],
  {
    tags: ["about-data"],
    revalidate: 60 * 60 * 24 * 2,
  },
)

export { getIntroData, getAboutData }
