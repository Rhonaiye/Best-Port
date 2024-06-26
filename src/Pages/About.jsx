import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"




class About extends Component{
  componentDidMount(){
    Aos.init();
  }
  render(){
    
      return(
        <div   className="bg-pastelBlue px-10 py-10 ">
           <p className="text-4xl font-bold text-black text-center" data-aos='fade-left' data-aos-duration='1000' data-aos-delay='200'>About Me</p>
           <div className="flex flex-col items-center  text-slateGray md:flex-row"  data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200'>
               
                 <div className="md:w-1/2"></div>
    
                 <div className="about-body md:w-1/2">
                 <div className="mt-5 ">
                  <p>Hello! I'm Rhonaiye Felix, a passionate frontend developer with a keen eye for design and a knack for creating seamless user experiences. I have 2 years of experience in the industry, specializing in modern web development technologies such as HTML, CSS, JavaScript, and React. My journey into the world of coding began with a curiosity for how websites work, which quickly turned into a full-blown passion for building elegant, efficient, and responsive web applications.
    
                  When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or indulging in my hobbies like Gaming. I believe in continuous learning and staying updated with the latest advancements in web development to deliver the best results for my clients.
    
                I'm excited to share my work with you and look forward to connecting and collaborating on innovative projects that push the boundaries of what's possible on the web.</p>
                 </div>
    
    
                 <div className="skills flex flex-col md:items-center md:text-black">
                     <p className="text-center font-bold m-5 border-b-slateGray border-b-2">Skills</p>
                    
                    <div className="flex gap-x-8 ">
                      <p className="">HTML |</p>
                      <p>CSS |</p>
                      <p>JAVASCRIPT |</p>
                    </div>
    
                    <div className="flex gap-x-5">
                      <p>TAILWIND |</p>
                      <p>REACT.JS |</p>
                      <p>FIREBASE |</p>
                    </div>
                     
    
                    <div className="flex gap-x-5">
                      <p>MERN |</p>
                      <p>PHP |</p>
                      <p>VITE.</p>
                    </div>
                 </div>
                 </div>
           </div>
        </div>
      )
    }
    
  }

export default About