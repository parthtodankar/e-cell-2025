"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface Props {
  text: string
  el?: keyof JSX.IntrinsicElements
  className?: string
  once?: boolean
  repeatDelay?: number
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const TextReveal: React.FC<Props> = ({ text, el: Wrapper = "p", className, once = true, repeatDelay }) => {
  const controls = useAnimation()
  const textArray = text.split(" ")
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once })

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const show = () => {
      controls.start("visible")
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden")
          controls.start("visible")
        }, repeatDelay)
      }
    }

    if (isInView) {
      show()
    } else {
      controls.start("hidden")
    }

    return () => clearTimeout(timeout)
  }, [isInView, controls, repeatDelay])

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((word, index) => (
          <motion.span key={index} className="inline-block" variants={defaultAnimations}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  )
}

