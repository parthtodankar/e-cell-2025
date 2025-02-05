"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isFloating ? "bg-zinc-950/40 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="E-cell MOTIF RAIT Logo" width={30} height={30} />
          <span className="text-lg font-bold text-white tracking-tighter">E-Cell RAIT</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-white hover:text-primary text-sm font-bold tracking-tighter">About</Link>
            <Link href="#domains" className="text-white hover:text-primary text-sm font-bold tracking-tighter">Domains</Link>
            <Link href="#events" className="text-white hover:text-primary text-sm font-bold tracking-tighter">Events</Link>
            <Link href="#team" className="text-white hover:text-primary text-sm font-bold tracking-tighter">Team</Link>
            <Link href="#contact" className="text-white hover:text-primary text-sm font-bold tracking-tighter">Contact</Link>
            <Link href="/e-summit" className="text-white hover:text-primary text-sm font-bold tracking-tighter">E-SUMMIT</Link>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-white hover:text-primary text-sm font-bold tracking-tighter">About</Link>
            <Link href="#domains" className="text-white hover:text-primary text-sm font-bold tracking-tighter">Domains</Link>
            <Link href="#events" className="text-white hover:text-primary text-sm font-bold tracking-tighter">Events</Link>
            <Link href="#team" className="text-white hover:text-primary text-sm font-bold tracking-tighter">Team</Link>
            <Link href="#contact" className="text-white hover:text-primary text-sm font-bold tracking-tighter">Contact</Link>
            <Link href="/e-summit" className="text-white hover:text-primary text-sm font-bold tracking-tighter">E-SUMMIT</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

