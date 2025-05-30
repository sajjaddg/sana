"use client"

import { ReactNode, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"

export const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "47.5%" },
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
}

export const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  }
}

export const translate = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: "-100vh",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: "100vh",
    },
  },
  exit: {
    top: "-300px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
}

export const content = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.45,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -800,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

const routes = {
  "/": "Home",
  "/menu": "Menu",
  "/about-me": "About Me",
}

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  }
}

interface CurveProps {
  backgroundColor: string
  children: ReactNode
}

export default function Curve({ backgroundColor, children }: CurveProps) {
  const pathname = usePathname()

  const [dimensions, setDimensions] = useState<{
    width: number | undefined
    height: number | undefined
  }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <>
      <motion.div {...anim(content)}>{children}</motion.div>
      <div className="transition-overlay">
        <div
          className="transition-background"
          style={{
            backgroundColor,
            opacity: dimensions.width === undefined ? 1 : 0,
          }}
        />
        <motion.p className="transition-route-text" {...anim(text)}>
          {routes[pathname as keyof typeof routes]}
        </motion.p>
        {dimensions.width !== undefined && dimensions.height !== undefined && (
          <SVG width={dimensions.width} height={dimensions.height} backgroundColor={backgroundColor} />
        )}
      </div>
    </>
  )
}

interface SVGProps {
  height: number
  width: number
  backgroundColor: string
}

const SVG = ({ height, width, backgroundColor }: SVGProps) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `

  return (
    <motion.svg className="transition-curve-svg" {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} fill={backgroundColor} />
    </motion.svg>
  )
}
