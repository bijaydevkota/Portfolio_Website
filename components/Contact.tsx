'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Here you would typically send the form data to a server
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-gray-900 text-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-400">Contact Me</h2>
        <motion.form
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={formVariants}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-sm"
        >
          <motion.div className="mb-4" variants={formVariants}>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
              required
            />
          </motion.div>
          <motion.div className="mb-4" variants={formVariants}>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
              required
            />
          </motion.div>
          <motion.div className="mb-4" variants={formVariants}>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-300">Message</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

