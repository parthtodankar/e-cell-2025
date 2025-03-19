"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

const Navbar = () => {
  const [isFloating, setIsFloating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 50)
    }

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
          <Image src="/logo.svg" alt="E-cell MOTIF RAIT Logo" width={30} height={30} />
          <span className="text-lg font-bold text-white tracking-tighter">E-Cell RAIT</span>
        </Link>
        <div className="flex items-center space-x-4">
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
                className="text-white hover:text-primary text-sm font-bold tracking-tighter flex items-center"
                onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
              >
                Team <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isTeamDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-zinc-950/95 backdrop-blur-md rounded-md py-2 min-w-[160px]">
                  <button onClick={() => handleNavigation('#team')}
                    className="block w-full text-left px-4 py-2 text-white hover:text-primary text-sm font-bold tracking-tighter">
                    Core Team
                  </button>
                  <button onClick={() => handleNavigation('/faculty-coordinators')}
                    className="block w-full text-left px-4 py-2 text-white hover:text-primary text-sm font-bold tracking-tighter">
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
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
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
            <button onClick={() => handleNavigation('#team')}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter">
              Core Team
            </button>
            <button onClick={() => handleNavigation('/faculty-coordinators')}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter">
              Faculty Coordinators
            </button>
            <button onClick={() => handleNavigation('#contact')}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter">
              Contact
            </button>
            <button onClick={() => handleNavigation('/e-summit')}
              className="text-white hover:text-primary text-sm font-bold tracking-tighter">
              E-SUMMIT
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
