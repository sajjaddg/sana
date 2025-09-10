"use client"

import { cn } from "@/utils/cn"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { IntroData } from "@/services/types"
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

const ScoundSection = ({ data }: { data: IntroData[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const allowScroll = useRef(true)
  const scrollTimeout = useRef<gsap.core.Tween>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Initialize scroll timeout with a shorter delay
    scrollTimeout.current = gsap
      .delayedCall(0.2, function () {
        allowScroll.current = true
      })
      .pause()

    const intentObserver = ScrollTrigger.observe({
      // eslint-disable-next-line unicorn/prefer-global-this
      target: window,
      type: "wheel,touch,pointer,keyboard",
      onUp: () => {
        if (activeIndex > 0) {
          allowScroll.current = false
          scrollTimeout.current?.restart(true)
          setActiveIndex((previous) => previous - 1)
        } else {
          // Allow scrolling up when at first item
          allowScroll.current = true
          intentObserver.disable()
        }
      },
      onDown: () => {
        if (activeIndex < data.length - 1) {
          allowScroll.current = false
          scrollTimeout.current?.restart(true)
          setActiveIndex((previous) => previous + 1)
        } else {
          // Allow scrolling down when at last item
          allowScroll.current = true
          intentObserver.disable()
        }
      },
      preventDefault: true,
      onEnable(self) {
        allowScroll.current = true
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

    // Add scroll trigger to detect when section enters viewport
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        intentObserver.enable()
      },
      onLeaveBack: () => {
        intentObserver.disable()
      },
      onLeave: () => {
        intentObserver.disable()
      },
      onEnterBack: () => {
        intentObserver.enable()
      },
    })

    return () => {
      intentObserver.kill()
      scrollTimeout.current?.kill()
      scrollTrigger.kill()
    }
  }, [data.length, activeIndex])

  return (
    <motion.section ref={sectionRef} className="flex flex-col gap-4 md:flex-row">
      <div className="hidden flex-[1] flex-col gap-4 md:flex">
        {data.map((item, index) => (
          <motion.h1
            key={item._id}
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
            {data[activeIndex].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default ScoundSection
