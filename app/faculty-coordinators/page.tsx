"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FacultyCoordinatorCard from "@/components/FacultyCoordinatorCard"

export default function FacultyCoordinators() {
  return (
    <motion.main 
      className="min-h-screen bg-zinc-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <motion.div 
        className="container mx-auto px-4 pt-32 pb-20"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-16 text-white">Faculty Coordinators</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <FacultyCoordinatorCard 
            name="Dr. Gautam Borkar"
            role="(Faculty Coordinator)"
          />
          <FacultyCoordinatorCard 
            name="Dr. Mukesh D Patil"
            role="(Principal, RAIT)"
          />
        </div>
      </motion.div>
      <Footer />
    </motion.main>
  )
}