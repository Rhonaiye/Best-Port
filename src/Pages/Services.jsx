import web from "/src/assets/web.svg"
import back from "/src/assets/back.svg"

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"


class Services extends Component{
  componentDidMount(){
    Aos.init();
  }
  render(){
   
  return(
    <div className="bg-softWhite py-20">
         <p className="font-extrabold text-4xl mb-5 text-center">Services</p>
       <div  className="flex flex-col items-center text-center md:justify-center  px-3 text-slateGray gap-y-5 md:flex-row md:gap-x-5 w-full">
        
         
         <div className="p-5 border-2 rounded-xl border-pastelBlue py-10 md:w-1/4" data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200' >
          <div className="flex justify-center mb-2"><img className="w-10 " src={web} alt="" /></div>
          <p className="font-bold text-2xl ">Front-end Development</p>
          <p>I craft responsive and user-friendly websites using modern web development technologies and frameworks such as React, Vite and Tailwind css</p>
         </div>

         <div className="p-5 border-2 rounded-xl border-pastelBlue py-10  md:w-1/4" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' >
         <div className="flex justify-center mb-2"><img className="w-10 " src={back} alt="" /></div>
          <p className="font-bold text-2xl ">Back-end Development</p>
          <p>I make the website functional, interactive and so easy to run with strong database management system as well as help documentation, and API guides, that simplify complex concepts, educate your users, and enhance your products.</p>
         </div>
         

       </div>
    </div>
  )


  }
}



export default Services