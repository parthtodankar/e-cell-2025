"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import EventCard from "./event-card"

const events = [
  {
    title: "Pitch Perfect Sales",
    description:
      "Refine your startup pitch with guidance from industry experts. Get valuable feedback and improve your chances of securing funding for your venture.",
    image: "/core-images/pitch_perfect_sales.jpg",
  },
  {
    title: "Eureka",
    description:
      "Join us for Eureka, a platform to showcase innovative ideas and solutions.",
    image: "/core-images/eureka.jpg",
  },
  {
    title: "Vyapar Pe Vichar",
    description:
      "Participate in Vyapar Pe Vichar, where we discuss business strategies and market trends.",
    image: "/core-images/vyapar_pe_vichar.jpg",
  },
  {
    title: "Case Chronicles",
    description:
      "Engage in Case Chronicles, a case study competition that challenges your analytical skills.",
    image: "/core-images/case_chronicles.jpg",
  },
]

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
      }, 3000) // Reduced from 5000 to 3000
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered])

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  return (
    <section id="events" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Upcoming Events</h2>
        <div
          className="relative flex justify-center items-center h-[600px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <EventCard {...events[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default EventsSection

