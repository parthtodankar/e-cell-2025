"use client"

import type React from "react"
import { motion } from "framer-motion"

interface TextAnimateProps {
  children: string
  animation: "blurInUp" | "fadeIn" // Add more animation types as needed
  by: "character" | "word"
  className?: string
}

export const TextAnimate: React.FC<TextAnimateProps> = ({ children, animation, by, className = "" }) => {
  const items = by === "character" ? children.split("") : children.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const childVariants = {
    blurInUp: {
      hidden: {
        y: 20,
        opacity: 0,
        filter: "blur(10px)",
      },
      visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    },
    fadeIn: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", marginRight: by === "character" ? "0" : "0.25em" }}
          variants={childVariants[animation]}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  )
}

