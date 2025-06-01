export type GlobalData = {
  id: number
  documentId: string
  siteName: string
  siteDescription: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type QuoteBlock = {
  __component: "shared.quote"
  id: number
  title: string
  body: string
}

export type AboutData = {
  id: number
  documentId: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  blocks: QuoteBlock[]
}
