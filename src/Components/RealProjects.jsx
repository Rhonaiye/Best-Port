import { Link } from "react-router-dom"



import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"
import net from "/src/assets/net1.png"

const RealProjects = () => {
  return (
    <div className="bg-blue-950 my-10">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-white text-3xl">
          RECENT PROJECTS
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-white">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-blue-950 rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <Link to={card.link} className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase text-white backdrop-blur-lg text-center">
          <p className="text-violet-300">{card.title}</p>
        </Link>
        
      </div> 

      
    </div>
  );
};

export default RealProjects

const cards = [
  {
    url: "",
    title: "Netflix Clone",
    id: 1,
    link: "https://old-netflix-clone.vercel.app/",
  },
  {
    url: "",
    title: "Company SPA",
    id: 2,
    link: "https://naxtech-h6pid19p6-rhonaiyes-projects.vercel.app/"
  },
  {
    url: "",
    title: "Currency Converter",
    id: 3,
    link: "https://currency-converter-bice-tau.vercel.app/"
  },

  {
    url: "",
    title: "My next project can be yours!",
    id: 3,
    
  },
  
   
 
];
 




