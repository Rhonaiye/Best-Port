import { Link } from "react-router-dom"

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"



class Projects extends Component{
  componentDidMount(){
    Aos.init();
  }
  render(){
    
  return(
    <div className="py-6 bg-softWhite md:py-20" >

     <div className="text-center font-extrabold text-2xl text-pastelBlue">
      <p>Add-ons For Your Custom Website</p>
      <p className="text-sm font-extralight text-slateGray">And many more.</p>
     </div>

         <div className="flex flex-col items-center py-4 md:flex-row md:justify-center md:gap-x-20 font-bold"  >

            <div className="bg-white px-10 py-5 mb-5 md:h-64 rounded-md text-center" data-aos='fade-right' data-aos-duration='1000' data-aos-delay='300'>
            <p>RPS-game</p>
            <p className="w-28 mt-5 text-gray-500 font-extralight text-sm">Simple rock-paper-scissors game to keep customers in your web.</p>
            <Link to='/RPG-GAME' className="hover:text-pastelBlue hover:ease-in-out hover:transition hover:duration-100">here &rarr;</Link>
            </div>

            <div className="bg-white px-10 py-5 mb-5 md:h-64 rounded-md" >
              <p>Quote</p>
              <p className="w-28 mt-5 text-gray-500 font-extralight text-sm">Want your Web surfers to recieve inspirations?, this can help.</p>
               <Link to='/QuoteGenerator' className="hover:text-pastelBlue hover:ease-in-out hover:transition hover:duration-100">here &rarr;</Link>
            </div>

            <div className="bg-white px-5 py-5 mb-5 md:h-64 rounded-md" data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300'>
              <p>To-do-application</p>
              <p className="w-28 mt-5 text-gray-500 font-extralight text-sm">Simple To-do list</p>
              <Link to='/To-do-app' className="hover:text-pastelBlue hover:ease-in-out hover:transition hover:duration-100">here &rarr;</Link>
            </div>
        </div>

    </div>
  )

  }
}
 




export default Projects