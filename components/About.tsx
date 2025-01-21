'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black text-blue-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">About Me</h2>
          <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <p className="text-lg mb-6">
              I&apos;m a passionate Full Stack Developer with experience in building responsive and user-friendly web applications. Im working as a Full Stack Developer at <a href="https://www.zyluxitsolution.com/" target='_blank' className='underline text-blue-400'>Zylux IT Solution</a>
            </p>
            <p className="text-lg mb-6">
              I specialize in JavaScript, React, Node.js, Express.js and Next.js. I&apos;m also experienced in working with databases like MongoDB and PostgreSQL. My goal is to create efficient, scalable, and maintainable code that provides great user experiences.
            </p>
            <p className="text-lg">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software architecture and design patterns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

