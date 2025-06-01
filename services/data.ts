import { fetchApi } from "@/utils/fetch-api"
import { AboutData, GlobalData } from "./types"
import { unstable_cache } from "next/cache"

const getGlobalData = unstable_cache(
  async (): Promise<GlobalData> => {
    const data = await fetchApi<{ data: GlobalData }>("/global")
    return data.data
  },
  [],
  {
    tags: ["global-data"],
    revalidate: 60 * 60 * 24 * 2,
  },
)

const getAboutData = unstable_cache(
  async (): Promise<AboutData> => {
    const data = await fetchApi<{ data: AboutData }>("/about?populate=blocks")
    return data.data
  },
  [],
  {
    tags: ["about-data"],
    // revalidate: 60 * 60 * 24 * 2,
  },
)

export { getGlobalData, getAboutData }
