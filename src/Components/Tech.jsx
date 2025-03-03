import React from "react";
import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiReact, 
  SiFirebase, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiFramer, 
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiGithub,
  SiGit
} from "react-icons/si";
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

const techStack = {
  "Frontend": [
    { icon: <FaHtml5 className="text-orange-500 font-prompt" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
    { icon: <SiReact className="text-blue-600" />, name: "React & React Native" },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
    { icon: <SiFramer className="text-purple-500" />, name: "Framer Motion" },
  ],
  "Backend": [
    { icon: <SiPython className="text-blue-500" />, name: "Python" },
    { icon: <SiDjango className="text-green-700" />, name: "Django" },
    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-500" />, name: "Express" },
    { icon: <SiFastapi className="text-teal-500" />, name: "FastAPI" },
  ],
  "Database & Tools": [
    { icon: <SiFirebase className="text-yellow-600" />, name: "Firebase" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <SiGit className="text-red-500" />, name: "Git" },
    { icon: <SiGithub className="text-gray-800 dark:text-white" />, name: "GitHub" },
  ]
};

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="py-16 px-5 lg:px-16">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-prompt font-bold text-center mb-20 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent "
      >
        Technologies I Use
      </motion.h2>

      {Object.entries(techStack).map(([category, technologies]) => (
        <div key={category} className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-prompt font-semibold mb-8 text-blue-300"
          >
            {category}
          </motion.h3>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 "
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col font-prompt items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.div>
                <p className="text-md font-extralight text-blue-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Tech;