"use client"

import { motion } from "framer-motion"

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add speaker cards here */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6">
              {/* Placeholder for speaker content */}
              <div className="aspect-square bg-zinc-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-white">Coming Soon</h3>
              <p className="text-zinc-400">Stay tuned for exciting speakers!</p>
            </div>
          </div>
        </motion.div>

        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Add sponsor logos here */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg p-6">
              {/* Placeholder for sponsor content */}
              <div className="aspect-video bg-zinc-800 rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpeakerSponsors 