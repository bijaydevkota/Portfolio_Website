"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.2,
      },
    },
  }

  const socialItemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const glowVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "linear" },
    },
  }

  return (
    <section className="min-h-screen flex items-center py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left side - Image */}
          <motion.div className="lg:w-5/12 relative" variants={imageVariants}>
            <motion.div
              className="absolute -inset-0.5 rounded-2xl blur-xl opacity-75 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            ></motion.div>
            <motion.div
              className="relative bg-gray-900 rounded-2xl p-2 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/hero1.jpg"
                width={500}
                height={600}
                alt="Portfolio Image"
                className="rounded-xl w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div className="lg:w-7/12 text-center lg:text-left" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
              variants={itemVariants}
            >
              Hello, I&apos;m <span className="text-white">Bijay Devkota</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              I build exceptional and accessible digital experiences for the web. Focused on creating responsive,
              user-friendly applications with modern technologies.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8" variants={itemVariants}>
              <Link href="#projects">
              <motion.button
                className="px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects <ArrowRight size={18} />
              </motion.button>
              </Link>

              <motion.button
                className="px-6 py-3 bg-transparent hover:bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="flex gap-5 justify-center lg:justify-start" variants={socialVariants}>
              <motion.a
                href="https://github.com/bijaydevkota"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                variants={socialItemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/bijay-devkota-43195227a/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                variants={socialItemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                href="mailto:dbijay2058@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                variants={socialItemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
