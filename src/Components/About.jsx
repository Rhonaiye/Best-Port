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
        <div className="">
          <div className="bg-[#111b21] px-10 py-10 md:py-20 text-white ">
        
        <div className="flex flex-col items-center  text-slateGray md:flex-row"  data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200 '>
            
              <div className="md:w-1/2 md:pb-44 "> 
                <p className="md:text-6xl text-4xl font-bold text-[#FFFFFF] text-center">About <span className="text-violet-200"> Me</span> </p>
                </div>
 
              <div className="about-body md:w-1/2 my-16">
              <div className="mt-5 text-violet-100 font-extrabold">
               <p className="tracking-normal md:text-xl">I'm Rhonaiye Felix, a passionate Frontend Developer with over two years of experience crafting responsive and intuitive web applications. My expertise lies in HTML, CSS, JavaScript, and React, where I focus on building clean, efficient, and user-centric interfaces. I thrive on learning new technologies and enjoy contributing to open-source projects. If you're looking for a developer who blends technical proficiency with a creative mindset, let's connect!</p>
              </div>
 
 
              <div className="skills flex flex-col md:items-center text-violet-100">
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