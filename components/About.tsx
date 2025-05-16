"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="about" className="py-12 bg-gradient-to-br from-gray-900 to-black text-blue-100">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-6 text-center text-blue-400"
        >
          About Me
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-3/5 w-full bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
            >
              <p className="text-base mb-4">
                I&apos;m a passionate Software Developer with experience in building responsive and user-friendly web
                applications. I&apos;m working as a Software Developer at{" "}
                <a
                  href="https://www.zyluxitsolution.com/"
                  target="_blank"
                  className="underline text-blue-400"
                  rel="noreferrer"
                >
                  Zylux IT Solution
                </a>
                .
              </p>
              <p className="text-base mb-4">
                I specialize in JavaScript, React, Node.js, Express.js and Next.js with experience in MongoDB and
                PostgreSQL. My goal is to create efficient, scalable code that provides great user experiences.
              </p>
              <p className="text-base">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                projects or enjoying a good book on software architecture and design patterns.
              </p>
            </motion.div>

            {/* Image Grid Section - Same layout for mobile and desktop */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-2/5 w-full relative"
              style={{ height: "350px" }} // Fixed height for mobile and adjusted for desktop with media queries
            >
              {/* First Image - Top Left */}
              <motion.div
                variants={imageVariants}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute left-0 top-0 w-[45%] h-[65%] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/photo1.jpg"
                  alt="Profile picture 1"
                  fill
                  sizes="(max-width: 768px) 45vw, (min-width: 1024px) 22vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Second Image - Top Right */}
              <motion.div
                variants={imageVariants}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute right-0 top-[7%] w-[45%] h-[65%] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/photo5.jpg"
                  alt="Profile picture 2"
                  fill
                  sizes="(max-width: 768px) 45vw, (min-width: 1024px) 22vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Third Image - Bottom Center */}
              <motion.div
                variants={imageVariants}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute left-[10%] bottom-0 w-[80%] h-[50%] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/photo3.jpg"
                  alt="Profile picture 3"
                  fill
                  sizes="(max-width: 768px) 80vw, (min-width: 1024px) 40vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
