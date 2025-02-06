"use client"

import { MagicCard } from "@/components/magicui/magic-card"
import { Palette, BarChart2, Code, Megaphone, PenTool, Film } from "lucide-react"

const domains = [
  {
    name: "Design",
    icon: <Palette className="w-10 h-10" />,
    description: "Enhance our online presence with a design that reflects our spirit and values.",
  },
  {
    name: "Management",
    icon: <BarChart2 className="w-10 h-10" />,
    description:
      "Efficiently manage and promote committee events with our support for scheduling, registration, and online promotion, ensuring every event runs smoothly.",
  },
  {
    name: "Technical",
    icon: <Code className="w-10 h-10" />,
    description:
      "Handle website creation, technical interactions, and ongoing support to ensure everything functions seamlessly and efficiently.",
  },
  {
    name: "Publicity",
    icon: <Megaphone className="w-10 h-10" />,
    description:
      "Raise awareness of committee events and activities through targeted campaigns, social media interaction, and strategies.",
  },
  {
    name: "Content",
    icon: <PenTool className="w-10 h-10" />,
    description:
      "Provide clear and engaging content about our activities, announcements, and resources to keep the community informed and connected.",
  },
  {
    name: "Post Production",
    icon: <Film className="w-10 h-10" />,
    description: "Refine your media with expert video editing and social media post creation.",
  },
]

const DomainsSection = () => {
  return (
    <section id="domains" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Domains</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <MagicCard
              key={domain.name}
              className="cursor-pointer flex flex-col items-center justify-center h-[350px] text-white"
              icon={
                <div className="bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] p-2 rounded-full">
                  {domain.icon}
                </div>
              }
              description={domain.description}
            >
              {domain.name}
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DomainsSection

