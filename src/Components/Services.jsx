

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"
import ServicesComp from "./servicesComp"



class Services extends Component{
  
  componentDidMount(){
    Aos.init();
  }
  
  render(){
//animation will be fixed soon
  return(
       <ServicesComp data-aos='fade-up' data-aos-duration='1000' data-aos-delay='200 '/>
  )
  }
}



export default Services