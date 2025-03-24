"use client"

import { motion } from "framer-motion"
import CelebrationIcon from '@mui/icons-material/Celebration'
import GroupsIcon from '@mui/icons-material/Groups'
import ForumIcon from '@mui/icons-material/Forum'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import PodcastsIcon from '@mui/icons-material/Podcasts'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

const events = [
  { 
    time: '10:30 AM - 11:00 AM', 
    title: 'Inauguration of the Event', 
    color: 'bg-[#ff2975]',
    icon: CelebrationIcon
  },
  { 
    time: '11:00 AM - 11:30 AM', 
    title: 'Welcome by the Team', 
    color: 'bg-[#ffd319]', 
    icon: GroupsIcon
  },
  { 
    time: '11:30 AM - 1:00 PM', 
    title: 'Panel Discussion', 
    subtitle: 'RIA MEHTA & RAMNEK CHHIPA, CO-FOUNDERS OF NISHORAMA', 
    color: 'bg-[#8c1eff]',
    icon: ForumIcon
  },
  { 
    time: '1:00 PM - 2:00 PM', 
    title: 'Break', 
    color: 'bg-[#ff2975]',
    icon: RestaurantIcon
  },
  { 
    time: '2:00 PM - 3:15 PM', 
    title: 'Podcast', 
    subtitle: 'MR SANJAY GAGANI, ACTOR & CO-FOUNDER OF RUSKA LUXURY', 
    color: 'bg-[#ffd319]',
    icon: PodcastsIcon
  },
  { 
    time: '3:15 PM - 4:30 PM', 
    title: 'Podcast', 
    subtitle: 'MR VISHAL ADITYA SINGH, ACTOR', 
    color: 'bg-[#8c1eff]',
    icon: PodcastsIcon
  },
  { 
    time: '4:30 PM - 5:00 PM', 
    title: 'Vote of Thanks', 
    color: 'bg-[#ff2975]',
    icon: ThumbUpIcon
  },
];

const ESummitSchedule = () => {
  return (
    <section className="w-full min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4 py-20">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          E-Summit Schedule
        </motion.h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>
            
            <div className="flex flex-col items-center space-y-20">
              {events.map((event, index) => (
                <div key={index} className="relative flex items-center w-full">
                  {/* Left Side - Time */}
                  <div className="w-1/3 text-right">
                    <p className="text-white font-semibold text-2xl">{event.time}</p>
                  </div>

                  {/* Timeline Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-16 h-16 rounded-full ${event.color} flex items-center justify-center`}>
                      {event.icon && (
                        <event.icon sx={{ 
                          fontSize: '2rem',
                          color: 'white'
                        }} />
                      )}
                    </div>
                  </div>

                  {/* Content (Right Side) */}
                  <div className="w-2/3 pl-56">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-white font-bold text-3xl mb-2">{event.title}</h3>
                      {event.subtitle && (
                        <p className="text-zinc-400 text-xl">{event.subtitle}</p>
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESummitSchedule; 