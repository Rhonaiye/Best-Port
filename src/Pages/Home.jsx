import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Herosection from "./HeroSection"
import Projects from "./Projects"
import Services from "./Services"
import Testimoniials from "./Testimonials"


const Home = ()=>{
  return(
    <>
    <Header/>
    <Herosection/>
    <About/>
    <Services/>
    <Testimoniials/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    
    </>
  )
}

export default Home