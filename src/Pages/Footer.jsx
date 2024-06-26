import { Link } from "react-router-dom"




const Footer = ()=>{
  return(
    <div>
       
       <div className="bg-slateGray text-pastelBlue p-5 py-10 flex flex-col">
          <div className="flex flex-col font-extralight">
           <p>Say Hello</p>
           <hr className="w-[20vh] mb-4"/>
           
           <a href="https://wa.me/+2349131215984?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20opportunity" target="_blank">Contact Me on WhatsApp</a>

           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=itsrodivine@example.com&su=subject&body=message">itsrodivine@gmail.com</a>
          </div>

          <div className="flex gap-x-3">
            <a href="https://www.instagram.com/_naiye/">
            <p>Instagram</p>
            </a>
            <a href="https://twitter.com/naiye_20" target="_blank">
            <p>Contact Me on X</p>
            </a>

          </div>
             
             <div>
                 <Link to='Blogs'>
                 <p className=" font-bold mt-6">Blogs</p>
                 </Link>
                 <a href="https://rhonaiye-felix-portfolio.vercel.app/">Link to old portfolio</a>
             </div>
          <div className="flex justify-center mt-10">
          © Rhonaiye Felix 2024. All rights reserved
          </div>
       </div>
    </div>
  )
}

export default Footer