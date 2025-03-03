

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"



 
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Info = () => {
  return (
    
      <section className="w-full  py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto  bg-blue-[#080F22] rounded-xl md:px-10 px-5">
      <div className="order-last md:order-first">
        <span className="block mb-4 font-prompt text-xs md:text-sm text-blue-400  font-bold">
          Hi, I'm
        </span>
        <h3 className="text-4xl font-prompt md:text-6xl font-semibold text-white">
          Rhonaiye Felix
        </h3>
        <p className="text-base font-prompt md:text-lg text-white my-4 md:my-6">
         A software engineer skilled in <span className="text-blue-400">web and mobile app development</span>, with expertise in both frontend and <span className="text-blue-400">backend</span>. I build scalable & efficient solutions.
        </p>


        <a href="/naiyes.pdf" download="naiyes.pdf">
        <button className="bg-blue-600 font-prompt text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Download cv
        </button></a>
        
      </div>
      <div className="order-first md:order-last">
        <ShuffleGrid />
      </div>
    </section>
    
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};




const squareData = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_vector-1682310922955-ea5e6f791471?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3184455/pexels-photo-3184455.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    src: "https://plus.unsplash.com/premium_photo-1670958553973-58e2ef388f91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVuY2lsfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/file-1719664968387-83d5a3f4d758image?dpr=2&w=416&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    src: "https://plus.unsplash.com/premium_vector-1682269498466-be10e63aaa8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_vector-1712161707724-52d6d007b608?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    src: "https://plus.unsplash.com/premium_vector-1682310920702-50669014da8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  
  
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Info;


