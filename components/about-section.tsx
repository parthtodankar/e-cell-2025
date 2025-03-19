"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { TextReveal } from "@/components/magicui/text-reveal"
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <DotLottieReact
            src="https://lottie.host/87b75287-a2ec-4e48-9057-f41e8929bee4/Os71NouWgN.lottie"
            loop
            autoplay
          />
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TextReveal text="About Us" className="text-3xl font-bold mb-4 text-white" />
          <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
            E-Cell, RAIT aims to induce an Entrepreneurial mindset into the students and air an innovative streak in
            them. We are here to water the {'Ideas'} in the bud and help them bloom into impactful endeavors through
            networking student enterprises from campus to incubators, seeding funds and angel investors to transform the
            newly proposed ideas into successful start-ups.
          </p>
          <p>It&apos;s a great day!</p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

