"use client"
import { LogoIcon } from "@/public/icons"
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react"

const Header = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.25])
  const top = useTransform(scrollYProgress, [0, 0.3], ["50%", "4%"])
  const left = useTransform(scrollYProgress, [0, 0.3], ["50%", "3%"])
  const transform = useMotionTemplate`translate(-50%, -50%) scale(${scale})`
  return (
    <motion.header style={{ top, left, transform }} className="sticky w-20 text-gray-classic-900 md:w-40">
      <LogoIcon />
    </motion.header>
  )
}

export default Header
