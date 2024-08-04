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
        <div className="md:px-4">
          <div   className="bg-blue-900 px-10 py-10 md:py-20 text-white rounded-[20px]">
        
        <div className="flex flex-col items-center  text-slateGray md:flex-row"  data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200'>
            
              <div className="md:w-1/2 md:pb-44 "> 
                <p className="md:text-6xl text-4xl font-bold text-black text-center">About Me</p>
                </div>
 
              <div className="about-body md:w-1/2">
              <div className="mt-5 text-black font-extrabold">
               <p>Hello! I'm Rhonaiye Felix, a dedicated frontend developer with a strong passion for design and creating seamless user experiences. With 2 years of experience in the industry, I specialize in modern web development technologies such as HTML, CSS, JavaScript, and React. My journey into coding began with a curiosity about how websites function, which quickly evolved into a deep passion for building elegant, efficient, and responsive web applications.

When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and indulging in my hobbies like gaming. I believe in continuous learning and staying updated with the latest advancements in web development to provide the best results for my clients. I'm eager to share my work and look forward to connecting and collaborating on innovative projects that push the boundaries of what's possible on the web.</p>
              </div>
 
 
              <div className="skills flex flex-col md:items-center text-black">
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
                   <p>NODE.JS|</p>
                   <p>NEXT.JS</p>
                 </div>
              </div>
              </div>
        </div>
     </div>
        </div>
      )
    }
    
  }

export default About