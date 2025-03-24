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
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

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

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  if (!mounted) {
    return null; // or a loading skeleton
  }

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
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
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-between py-10 px-4">
        {/* E-Summit Logo Section - Top */}
        <div className="w-full">
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto">
            <Image
              src="/esummit-logo.png"
              alt="E-Summit Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mt-6 mb-2">
            E-Summit&apos;24
          </h1>
          <p className="text-xl md:text-2xl text-white/80 text-center">
            Coming Soon
          </p>
        </div>

        {/* Countdown timer - Bottom */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex flex-nowrap justify-center gap-4 md:gap-8 min-w-max px-4">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <>
                <div key={unit} className="timer">
                  <div className="rounded-xl bg-black/40 backdrop-blur-md p-6 md:p-8 lg:p-10
                                min-w-[140px] md:min-w-[180px] lg:min-w-[200px] 
                                flex items-center justify-center flex-col gap-4
                                shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]
                                border border-white/5">
                    <h3 className="font-bold text-4xl md:text-7xl lg:text-8xl text-white text-center
                                 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                      {value.toString().padStart(2, '0')}
                    </h3>
                    <p className="text-lg md:text-2xl lg:text-3xl uppercase font-medium text-white/80 text-center 
                                tracking-wider [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                      {unit}
                    </p>
                  </div>
                </div>
                {index < Object.entries(timeLeft).length - 1 && (
                  <div className="flex items-center justify-center">
                    <span className="text-4xl md:text-7xl lg:text-8xl font-bold text-white/90
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

