import { Link } from "react-router-dom"
import netImage from "/Users/mac/Desktop/Best-Port/src/assets/net1.png"

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"



class RealProjects extends Component{
  componentDidMount(){
    Aos.init();
  }
  render(){
    
  return(
    <div className="py-6 bg-slateGray md:py-10 text-softWhite " >
        <p className="text-center font-extrabold text-3xl">Some of my projects</p>
        

         <div className="flex justify-center mt-4 gap-6 flex-col md:flex-row px-4 md:px-0 py-6">

         <div className=" p-20 rounded-xl flex flex-col items-center bg-black gap-3" data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>
           <img src={netImage} alt="net" className="w-14 "/>
           <p className="text-center font-bold ">Netflix Clone</p>
           <p className="text-sm text-slateGray"> HTML, CSS & JAVASCRIPT</p>
           <Link to="https://old-netflix-clone.vercel.app/"><p className="text-pastelBlue font-extralight">Explore &rarr;</p></Link>
        </div>

          <div className="p-20 rounded-xl flex flex-col items-center bg-black gap-3 md:gap-0 " data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
           <p>Single page application</p>
           <p className="text-sm text-slateGray"> Next.js & TailwindCss</p>
           <Link to="https://naxaaatech.vercel.app/"><p className="text-pastelBlue">Explore &rarr;</p></Link>
          </div>
  
       </div>

    </div>
  )

  }
}
 




export default RealProjects