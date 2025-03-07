"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import App from '../App';

const EventsSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        // You can keep the interval logic if needed for other purposes
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
        <h2 className="text-4xl font-bold text-center mb-12 text-white"> Events</h2>
        <div
          className="relative flex justify-center items-center h-[600px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <App />
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default EventsSection

