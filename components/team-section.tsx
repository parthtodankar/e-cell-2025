"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"

const teamMembers = [
  { name: "John Doe", role: "CEO / Co-Founder" },
  { name: "Jane Smith", role: "CTO" },
  { name: "Alice Johnson", role: "Marketing Director" },
  { name: "Bob Williams", role: "Lead Developer" },
  { name: "Charlie Brown", role: "UX Designer" },
  { name: "Diana Davis", role: "Content Strategist" },
  { name: "Ethan Evans", role: "Business Analyst" },
  { name: "Fiona Foster", role: "Product Manager" },
  { name: "George Green", role: "Financial Advisor" },
  { name: "Hannah Hill", role: "HR Manager" },
]

const ProfileCard = ({ name, role }: { name: string; role: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-zinc-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-zinc-800"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-64 bg-zinc-800"></div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <ProfileCard key={index} name={member.name} role={member.role} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

