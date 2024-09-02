import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Info from "./Info"
import Journey from "./Journey"


import Projects from "./Projects"
import RealProjects from "./RealProjects"
import Services from "./Services"
import Tech from "./Tech"
import Testimoniials from "./Testimonials"


const Home = ()=>{
  return(
    <>
    <Header/>
     <Info/>
    <About/>
    <Journey/>
    <Tech/>
    <Services/>
    <Testimoniials/>
    <Projects/>
    <RealProjects/>
    <Contact/>
    <Footer/>
    
    
    
    </>
  )
}

export default Home