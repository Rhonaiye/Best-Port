import { Link } from "react-router-dom"

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"
import { FiMousePointer,  } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


class Projects extends Component{
  componentDidMount(){
    Aos.init();
  }
  
  render(){
    
    
    
  return(
   <div className="md:px-3">
     <div className="py-6 bg-[#111b21] rounded-[20px] md:py-20" >

     <div className="text-center font-extrabold text-2xl  text-violet-300">
       <p className="text-violet-300 text-3xl">Add-ons For Your Custom Website</p>
       <p className="text-sm font-extralight text-violet-100">And many more.</p>
     </div>

    <div className="flex flex-col items-center py-4 md:flex-row md:justify-center md:gap-x-20 font-bold"  >

       <div className="bg-violet-300 px-10 py-5 mb-5 md:h-64 rounded-xl h-1/2 md:w-1/4 " data-aos='zoom-in' data-aos-duration='2000' data-aos-delay='300'>
       <p>RPS-game</p>
       <p className="w-28 mt-5 text-gray-500 font-extralight text-sm">Simple rock-paper-scissors game to keep customers in your web.</p>
       <Link to='/RPG-GAME' className="hover:text-pastelBlue hover:ease-in-out hover:transition hover:duration-100"> <FaArrowRight className="mt-5"/> </Link>
       </div>

       <div className="bg-red-200 px-10 py-5 mb-5 md:h-64 rounded-xl md:w-1/4" >
         <p>Quote</p>
         <p className="w-28 mt-5 text-gray-500 font-extralight text-sm">Want your Web surfers to recieve inspirations?, this can help.</p>
          <Link to='/QuoteGenerator' className="hover:text-pastelBlue hover:ease-in-out hover:transition hover:duration-100"> <FaArrowRight className="mt-5"/> </Link>
       </div>

       <div className="bg-violet-300 px-5 py-5 mb-5 md:h-64 rounded-xl md:w-1/4" data-aos='zoom-in' data-aos-duration='2000' data-aos-delay='300'>
         <p>To-do-application</p>
         <p className="w-28 mt-5 text-gray-500 font-extralight text-sm">Simple To-do list</p>
         <Link to='/To-do-app' className="hover:text-pastelBlue hover:ease-in-out hover:transition hover:duration-100"> <FaArrowRight/> </Link>
       </div>
   </div>

</div>
   </div>
  )

  }
}
 




export default Projects