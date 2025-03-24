"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

// Custom throttle function
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsFloating(window.scrollY > 10)
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (path: string) => {
    if (path.startsWith('#') && pathname === '/') {
      const element = document.querySelector(path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (path.startsWith('#') && pathname !== '/') {
      router.push(`/${path}`)
    } else {
      router.push(path)
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isFloating ? "bg-zinc-950/40 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="E-cell MOTIF RAIT Logo" width={30} height={30} />
          <span className="text-lg font-bold text-white tracking-tighter">E-Cell RAIT</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => handleNavigation('#about')} 
            className="text-white hover:text-primary text-sm font-bold tracking-tighter">
            About
          </button>
          <button onClick={() => handleNavigation('#domains')}
            className="text-white hover:text-primary text-sm font-bold tracking-tighter">
            Domains
          </button>
          <button onClick={() => handleNavigation('#events')}
            className="text-white hover:text-primary text-sm font-bold tracking-tighter">
            Events
          </button>
          <div className="relative">
            <button 
              onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter">
              Teams
              <ChevronDown className="inline ml-1" />
            </button>
            {isTeamDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg z-10">
                <button onClick={() => handleNavigation('#team')}
                  className="block text-white hover:text-primary text-sm font-bold tracking-tighter px-4 py-2">
                  Core Team
                </button>
                <button onClick={() => handleNavigation('/faculty-coordinators')}
                  className="block text-white hover:text-primary text-sm font-bold tracking-tighter px-4 py-2">
                  Faculty Coordinators
                </button>
              </div>
            )}
          </div>
          <button onClick={() => handleNavigation('#contact')}
            className="text-white hover:text-primary text-sm font-bold tracking-tighter">
            Contact
          </button>
          <button onClick={() => handleNavigation('/e-summit')}
            className="text-white hover:text-primary text-sm font-bold tracking-tighter">
            E-SUMMIT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-zinc-800/50 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => handleNavigation('#about')} 
              className="text-white hover:text-primary text-sm font-bold tracking-tighter text-left">
              About
            </button>
            <button onClick={() => handleNavigation('#domains')}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter text-left">
              Domains
            </button>
            <button onClick={() => handleNavigation('#events')}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter text-left">
              Events
            </button>
            <button onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter text-left">
              Teams
            </button>
            {isTeamDropdownOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <button onClick={() => handleNavigation('#team')}
                  className="text-white hover:text-primary text-sm font-bold tracking-tighter text-left">
                  Core Team
                </button>
                <button onClick={() => handleNavigation('/faculty-coordinators')}
                  className="text-white hover:text-primary text-sm font-bold tracking-tighter text-left">
                  Faculty Coordinators
                </button>
              </div>
            )}
            <button onClick={() => handleNavigation('#contact')}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter text-left">
              Contact
            </button>
            <button onClick={() => handleNavigation('/e-summit')}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter text-left">
              E-SUMMIT
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
