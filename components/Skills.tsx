'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL",
   "REST APIs", "HTML5", "CSS3", "Sass", "Tailwind CSS", "Git", "Github", "SEO"
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black to-gray-900 text-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">My Skills</h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 rounded-lg p-4 shadow-md flex items-center justify-center backdrop-blur-sm"
              variants={itemVariants}
            >
              <p className="text-center font-semibold text-blue-300">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

