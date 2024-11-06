import React, { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { User } from "lucide-react";

const skills = [
  ["HTML, CSS & JAVASCRIPT", "PYTHON",],
  ["TAILWIND", "REACT / NEXT.JS",],
  ["DJANGO / DRF", "NODE.JS", "FASTAPI"]
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  const SkillBadge = ({ skill }) => (
    <div className="px-4 py-2 bg-blue-950/30 rounded-lg backdrop-blur-sm">
      <span className="text-violet-100 font-medium">{skill}</span>
    </div>
  );

  return (
    <section className="bg-[#111b21] px-6 py-16 md:pl-5 md:py-24">
      <div 
        className="max-w-7xl mx-auto"
        data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Title Section */}
          <div className="text-center md:text-left md:sticky md:top-24">
            <div className="flex justify-center">
            <User size={140} className="text-blue-200 bg-blue-700 rounded-full p-5 "/>
            </div>
            <h2 className="text-4xl md:text-6xl text-center font-bold">
              <span className="text-blue-400">About</span>{" "}
              <span className="text-violet-200">Me</span>
            </h2>
          </div>

          {/* Content Section */}
          <div className="space-y-12">
            {/* About Text */}
            <div className="prose prose-lg prose-invert">
              <p className="text-violet-100 text-lg md:text-xl leading-relaxed">
                I'm Rhonaiye Felix, a passionate Fullstack Web Developer with over two years of experience 
                crafting responsive and intuitive web applications. My expertise lies in HTML, CSS, 
                JavaScript, and React & Django, where I focus on building clean, efficient, and 
                user-centric interfaces. I thrive on learning new technologies and enjoy contributing 
                to open-source projects. If you're looking for a developer who blends technical 
                proficiency with a creative mindset, let's connect!
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-center text-violet-100 pb-2 border-b-2 border-blue-400 inline-block">
                Core Skills
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.flat().map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SkillBadge skill={skill} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;