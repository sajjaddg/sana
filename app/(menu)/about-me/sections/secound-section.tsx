"use client"

import type { QuoteBlock } from "@/services/types"
import { cn } from "@/utils/cn"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface CustomObserver {
  isEnabled: boolean
  scrollY: (value?: number) => number
  enable: () => void
  kill: () => void
  _restoreScroll?: () => void
}

const ScoundSection = ({ data }: { data: QuoteBlock[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const allowScroll = useRef(true)
  const scrollTimeout = useRef<gsap.core.Tween>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Initialize scroll timeout
    scrollTimeout.current = gsap
      .delayedCall(1, function () {
        allowScroll.current = true
      })
      .pause()

    const intentObserver = ScrollTrigger.observe({
      target: window,
      type: "wheel,touch",
      onUp: () => {
        if (allowScroll.current) {
          allowScroll.current = false
          scrollTimeout.current?.restart(true)
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0))
        }
      },
      onDown: () => {
        if (allowScroll.current) {
          allowScroll.current = activeIndex === data.length - 1
          scrollTimeout.current?.restart(true)
          setActiveIndex((prev) => (prev < data.length - 1 ? prev + 1 : data.length - 1))
        }
      },
      tolerance: 10,
      preventDefault: true,
      onEnable(self) {
        allowScroll.current = false
        scrollTimeout.current?.restart(true)
        // Save scroll position and prevent native scroll
        const savedScroll = self.scrollY()
        const observer = self as CustomObserver
        observer._restoreScroll = () => self.scrollY(savedScroll)
        document.addEventListener("scroll", observer._restoreScroll, { passive: false })
      },
      onDisable(self) {
        const observer = self as CustomObserver
        if (observer._restoreScroll) {
          document.removeEventListener("scroll", observer._restoreScroll)
        }
      },
    })

    // Create pin trigger
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      pin: true,
      start: "top top",
      end: "+=200",
      onEnter: (self) => {
        if (intentObserver.isEnabled) return
        self.scroll(self.start + 1)
        intentObserver.enable()
      },
      onEnterBack: (self) => {
        if (intentObserver.isEnabled) return
        self.scroll(self.end - 1)
        intentObserver.enable()
      },
    })

    return () => {
      intentObserver.kill()
      pinTrigger.kill()
      scrollTimeout.current?.kill()
    }
  }, [data.length])

  return (
    <motion.section ref={sectionRef} className="flex flex-col gap-4 md:flex-row">
      <div className="hidden flex-[1] flex-col gap-4 md:flex">
        {data.map((item, index) => (
          <motion.h1
            key={item.id}
            className={cn("text-5 text-gray-classic-900", activeIndex === index && "text-7 font-medium")}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0.5,
              scale: activeIndex === index ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {item.title}
          </motion.h1>
        ))}
      </div>
      <motion.h1 className={cn("text-gray-classic-900 text-7 font-medium md:hidden")} transition={{ duration: 0.3 }}>
        {data[activeIndex].title}
      </motion.h1>
      <div className="flex flex-[1] flex-col gap-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-6 text-gray-classic-700"
          >
            {data[activeIndex].body}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default ScoundSection
