import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="E-cell MOTIF RAIT Logo" width={40} height={40} />
              <span className="text-xl font-bold tracking-tighter">E-Cell RAIT</span>
            </Link>
            <p className="text-zinc-400 text-sm">
              Empowering the next generation of entrepreneurs through innovation, education, and collaboration.
            </p>
          </div>
 {/* added footer  */}
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-primary text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#domains" className="text-zinc-400 hover:text-primary text-sm transition-colors">
                  Domains
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-zinc-400 hover:text-primary text-sm transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-zinc-400 hover:text-primary text-sm transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/e-summit" className="text-zinc-400 hover:text-primary text-sm transition-colors">
                  E-SUMMIT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-zinc-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">RAIT, Nerul, Navi Mumbai</span>
              </li>
              <li className="flex items-center space-x-2 text-zinc-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:ecell@rait.ac.in" className="text-sm hover:text-primary transition-colors">
                  ecell@rait.ac.in
                </a>
              </li>
              <li className="flex items-center space-x-2 text-zinc-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+919876543210" className="text-sm hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ecell_rait/"
                className="text-zinc-400 hover:text-[#e4405f] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/e-cell-rait-motif"
                className="text-zinc-400 hover:text-[#0077b5] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div> 
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} E-Cell RAIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 