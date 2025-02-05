"use client"

import { useRef, useEffect } from "react"

export const RetroGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0
    const drawGrid = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 50
      const perspectiveOriginX = canvas.width / 2
      const perspectiveOriginY = canvas.height / 2

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = 1

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        const targetX = perspectiveOriginX + (x - perspectiveOriginX) * 2
        const targetY = canvas.height
        const progress = Math.sin(time + x * 0.01) * 0.1 + 0.9
        ctx.lineTo(x + (targetX - x) * progress, targetY * progress)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        const targetX = canvas.width
        const targetY = perspectiveOriginY + (y - perspectiveOriginY) * 2
        const progress = Math.sin(time + y * 0.01) * 0.1 + 0.9
        ctx.lineTo(targetX * progress, y + (targetY - y) * progress)
        ctx.stroke()
      }

      time += 0.03
    }

    const animate = () => {
      drawGrid()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ background: "linear-gradient(to bottom, #000000, #1a1a1a)" }}
    />
  )
}

