"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import Aurora from "./aurora"
import Image from "next/image"

interface CountdownProps {
  targetDate: string
  colorStops?: string[]
  amplitude?: number
  blend?: number
  speed?: number
}

const CountdownWithAurora: React.FC<CountdownProps> = ({
  targetDate,
  colorStops = ["#ffd319", "#ff2975", "#8c1eff"],
  amplitude = 1.0,
  blend = 0.5,
  speed = 0.5,
}) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <Aurora 
          colorStops={colorStops} 
          amplitude={amplitude} 
          blend={blend} 
          speed={speed}
          className="w-full h-full"
        />
      </div>

      {/* Content overlay with flex column */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* E-Summit Logo Section - Top */}
        <div className="mb-auto mt-20 md:mt-32">
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto">
            <Image
              src="/esummit-logo.png"
              alt="E-Summit Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Countdown timer - Bottom */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-wrap items-start justify-center gap-4 md:gap-8">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <>
                <div key={unit} className="timer">
                  <div className="rounded-xl bg-black/40 backdrop-blur-md p-8 md:p-10
                                min-w-[160px] md:min-w-[200px] 
                                flex items-center justify-center flex-col gap-4
                                shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]
                                border border-white/5">
                    <h3 className="font-bold text-5xl md:text-8xl lg:text-9xl text-white text-center
                                 transition-all duration-300 ease-in-out
                                 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                      {value.toString().padStart(2, '0')}
                    </h3>
                    <p className="text-xl md:text-3xl uppercase font-medium text-white/80 text-center 
                                w-full tracking-wider
                                [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                      {unit}
                    </p>
                  </div>
                </div>
                {index < Object.entries(timeLeft).length - 1 && (
                  <div className="flex items-center justify-center mt-8">
                    <span className="text-5xl md:text-8xl lg:text-9xl font-bold text-white/90
                                   [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">:</span>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownWithAurora

