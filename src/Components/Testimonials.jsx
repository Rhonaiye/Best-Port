import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"


class Testimoniials extends Component{
   componentDidMount(){
     Aos.init();
   }
   render(){
   
  return(
   <div className="bg-blue-950 text-blue-900 py-10 ">
      
      <div className="flex justify-center " >
        <p className=" border-x-blue-300 border-x-2 p-2 font-bold mb-5 text-white" >WHY CHOOSE ME?</p>
        </div>

      <div className="flex flex-col items-center md:flex-row md:gap-x-5 md:justify-center "  >
            <div className="bg-[whitesmoke] px-10 text-center text-slateGray py-2 mt-5 rounded-md" data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='300'>
               <p className="font-bold text-2xl">95%</p>
               <p className="font-extralight">Satisfied Clients</p>
            </div>

            <div className="bg-[whitesmoke] px-10 text-center text-slateGray py-2 mt-5 rounded-md">
               <p className="font-bold text-2xl">99%</p>
               <p className="font-extralight">Job Completion</p>
            </div>

            <div className="bg-[whitesmoke] px-10 text-center text-slateGray py-2 mt-5 rounded-md" data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='100'>
               <p className="font-bold text-2xl">98%</p>
               <p className="">On Time</p>
            </div> 
      </div>

   </div>
 )

   }
}




export default Testimoniials