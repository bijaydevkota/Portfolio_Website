'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-2xl font-bold text-blue-400">bijay.dev</a>
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-blue-200 hover:text-blue-400 transition duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-400 hover:text-blue-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="container mx-auto px-6 py-4">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-blue-200 hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  )
}

export default Header

