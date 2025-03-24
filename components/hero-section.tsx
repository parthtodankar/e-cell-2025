"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { RetroGrid } from "@/components/magicui/retro-grid"   
import { TextAnimate } from "@/components/magicui/text-animate"

const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <motion.div
        className="flex flex-col items-center z-10 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src="/logo.png" alt="E-cell MOTIF RAIT Logo" width={200} height={200} className="mb-4" />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl md:text-7xl lg:text-9xl font-bold leading-none tracking-[.03em] text-transparent px-4 font-bungee-shade">
          E-CELL RAIT
        </span>
      </motion.div>
      <TextAnimate
        animation="blurInUp"
        by="word"
        className="text-xl md:text-2xl text-white z-10 tracking-wide px-4 text-center"
      >
        Think. Explore. Innovate.
      </TextAnimate>
      <RetroGrid />
    </div>
  )
}

export default HeroSection

