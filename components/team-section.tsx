"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"
import Image from 'next/image'

const teamMembers = [
  { name: "Niharika Ahuja", role: "President", image: "/core-images/niharika.jpg", instagram: "https://www.instagram.com/niharikaahujaa/?utm_source=ig_web_button_share_sheet", linkedin: "https://www.linkedin.com/in/niharika-ahuja-6bb42725b/" },
  { name: "Aryan Masali", role: "Vice President", image: "/core-images/aryan.jpg", instagram: "https://www.instagram.com/aryanmasali_3108/?utm_source=ig_web_button_share_sheet", linkedin: "https://www.linkedin.com/in/aryan-masali-13b823254/" },
  { name: "Pushkar Patil", role: "General Secretary", image: "/core-images/pushkar.jpg", instagram: "https://www.instagram.com/pushkarpatil._/?utm_source=ig_web_button_share_sheet", linkedin: "https://www.linkedin.com/in/patil-pushkar/" },
  { name: "Niral Pillewan", role: "Chief Execution Officer", image: "/core-images/niral.jpg", instagram: "https://www.instagram.com/niralpillewan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "" },
  { name: "Aryan Joshi", role: "Chief Event Organizer", image: "/core-images/aryan_joshi.jpg", instagram: "https://www.instagram.com/aryxnjoshi/?utm_source=ig_web_button_share_sheet", linkedin: "" },
  { name: "Mihir Agashe", role: "Chief Marketing Officer", image: "/core-images/mihir.jpg", instagram: "https://www.instagram.com/comm3mihir?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/mihir-agashe-92597b249/" },
  { name: "Parth Todankar", role: "Chief Technical Officer", image: "/core-images/parth.jpg", instagram: "https://www.instagram.com/parth_tdnkr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/parth-todankar-986146184/" },
  { name: "Meet Raval", role: "Public Relations Officer", image: "/core-images/meet.jpg", instagram: "https://www.instagram.com/meet_raval_27?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://www.linkedin.com/in/meet-raval-35b021253/" },
  { name: "Aarya Patil", role: "IIC Chief", image: "/core-images/aarya.jpg", instagram: "https://www.instagram.com/aaryapatiill/?utm_source=ig_web_button_share_sheet", linkedin: "https://www.linkedin.com/in/aarya-patil-98166625a/" },
  { name: "Vishnu Gupta", role: "Treasurer", image: "/core-images/vishnu.jpg", instagram: "https://www.instagram.com/vishnu_gupta_10?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "" },
]

const ProfileCard = ({ name, role, image, instagram, linkedin }: { name: string; role: string; image: string; instagram: string; linkedin: string }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-zinc-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-zinc-800"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image 
        src={image} 
        alt={name}
        width={300}
        height={300}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-zinc-400">{role}</p>
      </div>
      <motion.div
        className="flex justify-center gap-4 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        {linkedin && (
          <a href={linkedin} className="text-zinc-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
        )}
        {instagram && (
          <a href={instagram} className="text-zinc-400 hover:text-pink-500 transition-colors" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
        )}
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
            <ProfileCard key={index} name={member.name} role={member.role} image={member.image} instagram={member.instagram} linkedin={member.linkedin} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

