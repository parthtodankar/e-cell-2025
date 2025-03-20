"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type React from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4434.385185155991!2d73.02297847577358!3d19.044504402959447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db00160053%3A0x95e9ca007676b993!2sDr.%20D%20Y%20Patil&#39;s%20Ramrao%20Adik%20Institute%20Of%20Technology!5e1!3m2!1sen!2sin!4v1742497169368!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <motion.div
            className="bg-zinc-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-zinc-800 border border-zinc-700 p-4 text-lg rounded-lg w-full text-white"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-zinc-800 border border-zinc-700 p-4 text-lg rounded-lg w-full text-white"
                  required
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-zinc-800 border border-zinc-700 p-4 text-lg rounded-lg w-full text-white"
                required
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="bg-zinc-800 border border-zinc-700 p-4 text-lg rounded-lg w-full text-white"
                rows={5}
                required
                onChange={handleChange}
              ></textarea>
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] text-white p-4 text-lg rounded-lg w-full font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 