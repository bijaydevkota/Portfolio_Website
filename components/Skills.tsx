"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Html", logo: "/html.jpg" },
  { name: "Css", logo: "/css.png" },
  { name: "TailwindCss", logo: "/tailwind.png" },
  { name: "React", logo: "/react.png" },
  { name: "Vite", logo: "/vite.png" },
  { name: "Next", logo: "/next.jpeg" },
  { name: "MongoDB", logo: "/mongo.gif" },
  { name: "Postgresql", logo: "/postgre.png" },
  { name: "Github", logo: "/github.png" },
  { name: "NodeJs", logo: "/nodejs.png" },
  { name: "ExpressJs", logo: "/expressjs.png" },
  { name: "Seo", logo: "/seo.png" },
  
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  hover: { scale: 1.2, rotate: 10 },
};

export default function SkillsShowcase() {
  return (
    <div id="skills" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-blue-900 mb-8">
       <h2 className="mt-10 text-xl font-semibold text-blue-900">
        My Skills
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white shadow-xl rounded-2xl flex items-center justify-center"
            variants={itemVariants}
            whileHover="hover"
          >
            <img src={skill.logo} alt={skill.name} className="h-16 w-16" />
          </motion.div>
        ))}
      </motion.div>
     
    </div>
  );
}
