"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const sponsors = [
  {
    name: "Alpha8",
    image: "/sponsors_ECell/alphalogo.png"
  },
  {
    name: "CeraVE",
    image: "/sponsors_ECell/cerave.png"
  },
  {
    name: "DYPUShop",
    image: "/sponsors_ECell/DYPUSHOP.png"
  },
  {
    name: "NI",
    image: "/sponsors_ECell/ni.jpg"
  },
  {
    name: "RanuCreations",
    image: "/sponsors_ECell/ranu.png"
  },
  {
    name: "RuskaLUXURY",
    image: "/sponsors_ECell/Ruska.jpg"
  },
  {
    name: "Ukiyo Stays",
    image: "/sponsors_ECell/Ukiyo.png"
  },
  {
    name: "Union Bank",
    image: "/sponsors_ECell/unionbank.png"
  },
  {
    name: "Nutribs",
    image: "/sponsors_ECell/nutribs.png"
  }
]

const speakers = [
  {
    name: "Vishal Aditya Singh",
    image: "/speakers/speaker1.png",
    designation: "Coming Soon"
  },
  {
    name: "Speaker 2",
    image: "/speakers/speaker2.jpg",
    designation: "Coming Soon"
  },
  {
    name: "Ria Mehta",
    image: "/speakers/speaker3.jpg",
    designation: "Coming Soon"
  },
  {
    name: "Sanjay Gagnani",
    image: "/speakers/speaker4.jpg",
    designation: "Coming Soon"
  }
]

const SponsorCard = ({ sponsor, index }: { sponsor: { name: string; image: string }; index: number }) => {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <motion.div 
        className="bg-zinc-900/70 backdrop-blur-md rounded-lg p-4 flex flex-col items-center justify-center
                   border border-transparent transition-all duration-300
                   group-hover:border-gradient-to-r group-hover:from-[#ffd319] group-hover:to-[#ff2975]
                   relative overflow-hidden"
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        {/* Animated background gradient with increased opacity */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300
                      bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff]
                      animate-gradient-slow" />

        {/* Glowing effect with increased opacity and blur */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-300
                      bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff]" />

        {/* Image container with stronger shadow */}
        <div className="relative w-full h-[150px] rounded-lg overflow-hidden z-10 mb-3
                      shadow-lg group-hover:shadow-2xl transition-shadow">
          <Image
            src={sponsor.image}
            alt={sponsor.name}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Sponsor name with increased contrast */}
        <p className="text-white text-sm font-semibold z-10 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 drop-shadow-lg">
          {sponsor.name}
        </p>
      </motion.div>
    </motion.div>
  )
}

const FlipCard = ({ index, speaker }: { index: number; speaker: { name: string; image: string; designation: string } }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div 
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="relative h-[400px] md:h-[450px] perspective-1000 mb-4 group">
        <motion.div
          className="w-full h-full relative preserve-3d transition-all duration-500 cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="bg-zinc-900/70 backdrop-blur-md rounded-lg p-2 h-full shadow-lg 
                          border border-transparent transition-all duration-300
                          group-hover:border-gradient-to-r group-hover:from-[#ffd319] group-hover:to-[#ff2975]
                          relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300
                            bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff]
                            animate-gradient-slow" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-300
                            bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff]" />
              <div className="w-full h-full rounded-lg overflow-hidden z-10 relative
                            shadow-lg group-hover:shadow-2xl transition-shadow">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="bg-zinc-900/70 backdrop-blur-md rounded-lg p-6 h-full 
                          flex flex-col justify-center items-center text-center 
                          bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900
                          shadow-lg group-hover:shadow-2xl transition-shadow">
              <p className="text-white text-sm font-semibold leading-relaxed drop-shadow-lg">
                Stay tuned for the speaker announcement!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Speaker name and designation */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-2">{speaker.name}</h3>
        <p className="text-zinc-400 text-sm">{speaker.designation}</p>
      </div>
    </motion.div>
  )
}

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {speakers.map((speaker, index) => (
              <FlipCard key={index} index={index} speaker={speaker} />
            ))}
          </div>
        </motion.div>

        {/* Enhanced Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Amazing Sponsors
          </h2>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#ffd319] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2975] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-[#8c1eff] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />

          {/* Modified grid layout for 3x3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpeakerSponsors 