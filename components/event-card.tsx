"use client"

import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface EventCardProps {
  title: string
  description: string
  image: string
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image }) => {
  return (
    <motion.div
      className="relative w-full h-full bg-gradient-to-br from-[#f89b29] to-[#ff0f7b] rounded-xl flex items-center justify-center overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <motion.div
        className="absolute inset-0 bg-black/50 z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative z-20 text-white p-8 md:p-12"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
        <p className="text-lg md:text-xl leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  )
}

export default EventCard

