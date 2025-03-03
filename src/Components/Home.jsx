import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Info from "./Info"
import Journey from "./Journey"

import ServicesComp from "./servicesComp"
import Tech from "./Tech"
import RealProjects from "./RealProjects"


const Home = ()=>{
  return(
    <>
    <Header/>
     <Info/>
    <About/>
    <Journey/>
    <Tech/>
    <ServicesComp/>
    <RealProjects/>
    <Contact/>
    <Footer/>
    
    
    
    </>
  )
}

export default Home