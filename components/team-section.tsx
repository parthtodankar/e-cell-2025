"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"

const teamMembers = [
  { name: "Niharika Ahuja", role: "President", image: "/core-images/niharika.jpg" },
  { name: "Aryan Masali", role: "Vice President", image: "/core-images/aryan.jpg" },
  { name: "Pushkar Patil", role: "General Secretary", image: "/core-images/pushkar.jpg" },
  { name: "Niral Pillewan", role: "Chief Execution Officer", image: "/core-images/niral.jpg" },
  { name: "Aryan Joshi", role: "Chief Event Organizer", image: "/core-images/aryan_joshi.jpg" },
  { name: "Mihir Agashe", role: "Chief Marketing Officer", image: "/core-images/mihir.jpg" },
  { name: "Parth Todankar", role: "Chief Technical Officer", image: "/core-images/parth.jpg" },
  { name: "Meet Raval", role: "Public Relations Officer", image: "/core-images/meet.jpg" },
  { name: "Aarya Patil", role: "IIC Chief", image: "/core-images/aarya.jpg" },
  { name: "Vishnu Gupta", role: "Treasurer", image: "/core-images/vishnu.png" },
]

const ProfileCard = ({ name, role, image }: { name: string; role: string; image: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-zinc-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-zinc-800"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img src={image} alt={name} className="h-45 w-full object-cover" style={{ objectFit: 'cover' }} />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-zinc-400">{role}</p>
      </div>
      <motion.div
        className="flex justify-center gap-4 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="#" className="text-zinc-400 hover:text-pink-500 transition-colors">
          <Instagram size={24} />
        </a>
      </motion.div>
    </motion.div>
  )
}

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <ProfileCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

