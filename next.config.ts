import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
    unoptimized: true,
  },
  experimental: {
    viewTransition: true,
  },
}

export default nextConfig
