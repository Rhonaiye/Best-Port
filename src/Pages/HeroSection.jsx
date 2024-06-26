import web from "/src/assets/web.svg"
import globe from "/src/assets/globe.svg"
import react from "/src/assets/react.svg"
import rocket from "/src/assets/rocket.svg"

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"

class Herosection extends Component{
  componentDidMount(){
    Aos.init();
  }
  render(){
 
    return(
      <div  data-aos='fade-left' data-aos-duration='1000' data-aos-delay='200'  className="bg-softWhite py-[30vh] px-3 pt-[26vh] border-b-slateGray border-[0.5px] lg:py-[34vh]">
        
        <div    className="flex justify-around absolute top-[10vh] right-0 left-0 md:top-[12vh] ">
          <img src={rocket} className="w-9 mr-28 motion-safe:animate-bounce lg:mr-[75vh]" />
          <img src={react} className="motion-safe:animate-bounce" />
        </div>
          <div className="flex flex-col text-center bg-darkBlue text-slateGray ">
          
          <div className="md:flex md:justify-center ">
          <p className="text-slateGray text-5xl font-extrabold mb-5 md:text-[6em] md:mr-7"> Rhonaiye  </p>
          <p className="text-slateGray text-5xl font-extrabold mb-12 md:text-[6em]"> Felix</p>
          </div>
  
        <div className="md:flex md:flex-col">
        <p className="">
          My approach to Web development is simple: <span className="font-extrabold text-black">Create with purpose, <span className="text-pastelBlue">Visually appealing</span> and attention to detail.</span>
         </p>
        </div>
  
         <div>
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=itsrodivine@gmail.com&su=subject&body=message">
         <button className="border mt-6 px-6 py-3 bg-pastelBlue rounded-xl">Contact me</button>
         </a>
         </div>
  
        
          
          </div>
          <div className="flex justify-around absolute bottom-[10vh] right-0 left-0 md:bottom-[20vh] lg:bottom-[12vh]">
          <img src={globe} className="w-9 mr-28  lg:mr-[95vh] animate-pulse" />
          <img src={web} className="w-9 animate-ping" />
        </div>
  
      </div>
    )
  }
}




export default Herosection