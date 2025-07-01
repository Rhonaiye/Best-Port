import React, { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { User, Code, Layout, GitBranch } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const skills = [
    { id: 1, name: "HTML & CSS", category: "frontend" },
    { id: 2, name: "PYTHON & FASTAPI", category: "backend" },
    { id: 3, name: "TAILWIND CSS", category: "frontend" },
    { id: 4, name: "REACT / NEXT.JS", category: "frontend" },
    { id: 5, name: "REACT NATIVE", category: "backend" },
    { id: 6, name: "NODE.JS & TYPESCRIPT", category: "backend" },
  ];

  const SkillBadge = ({ skill }) => {
    const colors = {
      frontend: "bg-gradient-to-r from-blue-950/30 to-indigo-950/30 border-l-2 border-blue-400",
      backend: "bg-gradient-to-r from-blue-950/30 to-violet-950/30 border-l-2 border-violet-400"
    };

    return (
      <div className={`px-4 py-2 ${colors[skill.category]} rounded-lg backdrop-blur-sm group hover:translate-x-1 transition-all duration-300`}>
        <span className="text-violet-100 font-prompt  font-semibold group-hover:text-blue-300 transition-colors">{skill.name}</span>
      </div>
    );
  };

  return (
    <section className="bg-[#111b21] px-6 py-16 md:pl-5 md:py-24">
      <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Title Section - Now centered */}
          <div className="text-center md:sticky md:top-24">
            <div className="flex justify-center relative mb-6">
              <div className="absolute -inset-1 bg-blue-500 opacity-20 blur-xl rounded-full"></div>
              <div className="relative overflow-hidden rounded-full bg-gradient-to-tr from-blue-700 to-blue-600 p-1">
                <div className="bg-blue-950/80 rounded-full p-4">
                  <User size={140} className="text-blue-200" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-prompt md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-violet-300">Me</span>
            </h2>
            <motion.div 
              className="flex gap-2 mt-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-violet-400"></span>
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="space-y-12">
            {/* About Text - Now centered */}
            <div className="prose prose-lg prose-invert">
              <p className="text-violet-100 font-prompt font-extralight text-lg md:text-xl leading-relaxed">
                I'm <span className="font-medium font-prompt text-blue-300">Rhonaiye Felix</span>, a passionate Software Developer skilled in building scalable and intuitive web and mobile applications. With expertise in frontend, backend, and APIs, I specialize in crafting efficient and user-centric digital solutions. Constantly exploring new technologies, I enjoy solving complex problems and contributing to open-source projects. Let’s build something great together!
              </p>
            </div>


            {/* Skills Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 ">
                <Code className="text-blue-400" size={20} />
                <h3 className="text-xl font-prompt  font-semibold text-violet-100">
                  Core Skills
                </h3>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {skills.map((skill) => (
                  <motion.div 
                    key={skill.id} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;