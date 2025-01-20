'use client'

import { motion } from 'framer-motion'
import { Github,  Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <footer className="bg-black text-blue-100 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400">Bijay Devkota</h3>
            <p>Full Stack Developer</p>
          </motion.div>
          <motion.div variants={itemVariants} className="mb-4 md:mb-0">
            <p>Email: dbijay2058.com</p>
            <p>Phone: 9866338344</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex space-x-4">
            <motion.a
              href="https://github.com/bijaydevkota"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6e5494" }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/bijay-devkota-43195227a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0077b5" }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/bijay_devkota/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#1da1f2" }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={itemVariants} 
          className="mt-8 text-center"
        >
          <p>&copy; 2025 Bijay Devkota. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

