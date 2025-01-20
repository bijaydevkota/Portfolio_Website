'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projects = [
  {
    title: "Online Voting System",
    description: "A full-stack online voting system built with Next.js, Node.js, and MongoDB.",
    image: "/ovs.png",
  },
  {
    title: "Landing Page For Nexa",
    description: "A Next-based landing page for Nexa Services which is a digital marketting platform.",
    image: "/nexa.png",
  },
  {
    title: "Calculator",
    description: "A Real time calculator made using Next.js which is based on the theme of apple calculator",
    image: "/calculator.png",
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black text-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">My Projects</h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <motion.div
                className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
                  <p className="text-blue-100">{project.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

