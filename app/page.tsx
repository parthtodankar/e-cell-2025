import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import DomainsSection from "@/components/domains-section"
import EventsSection from "@/components/events-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <EventsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

