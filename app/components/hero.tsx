"use client"
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react"

import { LogoIcon } from "@/public/icons"

const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.25])
  const top = useTransform(scrollYProgress, [0, 0.3], ["50%", "-4%"])
  const left = useTransform(scrollYProgress, [0, 0.3], ["50%", "-2%"])
  return (
    <section className="sticky top-0 min-h-lvh snap-center">
      <motion.div className="text-gray-classic-900 absolute w-20 md:w-40" style={{ top, left, scale }}>
        <LogoIcon />
      </motion.div>
    </section>
  )
}

export default HeroSection
