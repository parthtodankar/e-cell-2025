"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const SpeakerSponsors = () => {
  return (
    <section className="w-full min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4 py-20">
        {/* Speakers Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Speaker cards */}
            {[...Array(8)].map((_, index) => (
              <FlipCard key={index} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Sponsors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Sponsor logos */}
            {[...Array(8)].map((_, index) => (
              <motion.div 
                key={index} 
                className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-video bg-zinc-800 rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const FlipCard = ({ index }: { index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div 
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {/* Flippable card container */}
      <div className="relative h-[220px] perspective-1000 mb-4 group">
        <motion.div
          className="w-full h-full relative preserve-3d transition-all duration-500 cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-4 h-full shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full h-full bg-zinc-800 rounded-lg overflow-hidden">
                {/* You can add an image here later */}
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-700 animate-gradient" />
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
              <p className="text-zinc-300 text-sm leading-relaxed">
               Haha, Wait for the speaker to be announced!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
      </div>

      {/* Static text content below card */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
        <p className="text-zinc-400 text-sm">Stay tuned for exciting speakers!</p>
      </div>
    </motion.div>
  )
}

export default SpeakerSponsors 