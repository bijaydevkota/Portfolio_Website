"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Bims_Art",
    description:
      "An art website for the portfolio of my client where she can showcase her arts.",
    image: "/bimsart.png",
    href: "https://bims-art.vercel.app/",
  },
 
  {
    title: "Instagram-Clone",
    description:
      "A fully cloned instagram web app which i made during my mernstack course at Zylux IT Solution",
    image: "/insta.png",
    href: "https://instagram-clone-psi-blush.vercel.app/",
  },
  {
    title: "Website For Nexa Services",
    description:
      "A Next-based landing page for Nexa Services which is a digital marketing platform.",
    image: "/nexa.png",
    href: "https://nexaservices.vercel.app/",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-blue-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-8 text-center text-blue-900">
          My Projects
        </h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
              <Link key={index}  href={project.href} target="_blank">
            <motion.div variants={itemVariants}>
              <motion.div
                className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-100">{project.description}</p>
                </div>

              
              </motion.div>
            </motion.div>
          </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
