"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { TextReveal } from "@/components/magicui/text-reveal"
import { RetroGrid } from "@/components/magicui/retro-grid"
import { TextAnimate } from "@/components/magicui/text-animate"
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <DotLottieReact
            src="https://lottie.host/87b75287-a2ec-4e48-9057-f41e8929bee4/Os71NouWgN.lottie"
            loop
            autoplay
          />
        </div>
        <div className="md:w-1/2">
          <TextReveal text="About Us" className="text-3xl font-bold mb-4 text-white" />
          <p className="mt-4 text-lg text-zinc-400">
            E-Cell, RAIT aims to induce an Entrepreneurial mindset into the students and air an innovative streak in
            them. We are here to water the 'Ideas' in the bud and help them bloom into impactful endeavors through
            networking student enterprises from campus to incubators, seeding funds and angel investors to transform the
            newly proposed ideas into successful start-ups.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

