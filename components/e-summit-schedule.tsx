"use client"

import { motion } from "framer-motion"

const ESummitSchedule = () => {
  return (
    <section className="w-full min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4 py-20">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          E-Summit Schedule
        </motion.h2>
        <div className="flex items-center justify-center">
          {/* Add your schedule content here */}
        </div>
      </div>
    </section>
  )
}

export default ESummitSchedule 