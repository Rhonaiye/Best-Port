import React from 'react'
import { useState } from "react"
import web from "/src/assets/web.svg"
import back from "/src/assets/back.svg"

function ServicesComp() {
    const [Frontclicked, isFrontClicked] = useState(true)
    const [Backclicked, isBackClicked] = useState(false)
    return(
        <div className="md:px-3 bg-[#111b21] text-white md:p-10 h-[75vh] py-5">
             <p className="text-4xl text-center text-violet-200 font-bold">Services</p>
     
             <div className="services-info flex flex-col md:flex-row gap-10 mt-10 ">
                   <div className="services-select  flex flex-col md:w-1/2 md:pl-8 rounded-xl md:p-20 gap-3 p-4">
                 
                       <div className="frontend bg-red-200 text-black p-4 rounded-2xl flex justify-between hover:cursor-pointer hover:bg-red-100 active:bg-red-300 hover:p-5 ease-in-out duration-300" onClick={()=>{
                         console.log('frontclicked');
                         isFrontClicked(true)
                         isBackClicked(false)
                       }}>
                       <p>FRONT-END DEVELOPMENT</p>   <img src={web} alt="" width={20} />
                       </div>

                       <div className="bg-violet-300 text-black p-4 rounded-2xl flex justify-between hover:cursor-pointer hover:bg-violet-200 active:bg-violet-400 hover:p-5 ease-in-out duration-300" onClick={()=>{
                        console.log("backclicked")
                        isBackClicked(true)
                        isFrontClicked(false)
                       }}>
                       <p>BACK-END DEVELOPMENT</p> <img src={back} alt="" width={20} />
                       </div>
                     
                     </div>
                  <div className="services-display-info md:w-1/2  md:pl-0 p-5 ">
                   <p className="md:text-center">{Frontclicked ? <p className='font-bold text-start  text-red-200 tracking-normal md:text-xl'>Transform your ideas into engaging, user-friendly websites with my front-end development services. I specialize in crafting responsive, visually appealing, 
                    and performance-optimized websites using the latest technologies. From interactive user interfaces to seamless cross-browser compatibility, I ensure your website looks great and functions flawlessly on all devices.
                   </p> :
                    ""} 
                    {Backclicked ? <p className='font-bold text-start text-violet-300 tracking-normal md:text-xl'>Ensure your website's core functions smoothly with my back-end development expertise. I build robust server-side solutions that handle data management, user authentication, and API integrations efficiently.
                     Leveraging the latest frameworks and technologies, I create scalable and secure back-end systems that power your website’s functionality and deliver a seamless user experience.
                   </p> : ""}</p>
                   
                 </div>
             </div>
        </div>
       )
}

export default ServicesComp