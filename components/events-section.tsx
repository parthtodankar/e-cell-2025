"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import EventCard from "./event-card"

const events = [
  {
    title: "Startup Summit",
    description:
      "Join us for a day of inspiring talks from successful entrepreneurs and innovators. Learn about the latest trends in the startup ecosystem and network with like-minded individuals.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Hackathon 2024",
    description:
      "Put your coding skills to the test in our annual hackathon. Work on exciting projects, solve real-world problems, and compete for amazing prizes.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Pitch Perfect",
    description:
      "Refine your startup pitch with guidance from industry experts. Get valuable feedback and improve your chances of securing funding for your venture.",
    image: "/placeholder.svg?height=600&width=800",
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

