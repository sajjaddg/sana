import "./globals.css"

import type { Metadata } from "next"
import localFont from "next/font/local"

const ClashGrotesk = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff2",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ClashGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
