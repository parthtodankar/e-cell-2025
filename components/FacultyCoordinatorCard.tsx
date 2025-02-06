"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FacultyCoordinatorCardProps {
  name: string;
  role: string;
  imageSrc?: string;
}

const FacultyCoordinatorCard: React.FC<FacultyCoordinatorCardProps> = ({ name, role, imageSrc }) => {
  const defaultImage = name === "Dr. Gautam Borkar" 
    ? "/faculty/Borkar Sir.jpg"
    : name === "Dr. Mukesh D Patil" 
      ? "/faculty/Principal Sir Imgs.jpeg"
      : imageSrc || "/path/to/default/image.jpg";

  return (
    <motion.div 
      className="text-center p-4 bg-zinc-800 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-[250px] h-[250px] mb-4">
        <Image
          src={defaultImage}
          alt={name}
          width={250}
          height={250}
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <h2 className="text-xl font-semibold text-white">{name}</h2>
      <p className="text-xl text-zinc-300">{role}</p>
    </motion.div>
  )
}

export default FacultyCoordinatorCard 