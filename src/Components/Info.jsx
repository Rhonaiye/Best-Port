import web from "/src/assets/web.svg"
import globe from "/src/assets/globe.svg"
import react from "/src/assets/react.svg"
import rocket from "/src/assets/rocket.svg"

import React, {Component} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { render } from "react-dom"


 
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Info = () => {
  return (
    <section className="w-full px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div className="order-last md:order-first">
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Hi, I'm
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Rhonaiye Felix
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          My approach to Web development is simple: Create with purpose,{" "}
          <span className="text-indigo-500">Visually appealing</span> and
          attention to detail.
        </p>

        <a href="public/naiye.pdf" download="Rhonaiye_cv.pdf">
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
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
    src: "src/assets/codes.png",
  },
  {
    id: 2,
    src: "src/assets/codes2.jpg",
  },
  {
    id: 3,
    src: "src/assets/pen.jpg",
  },
  {
    id: 4,
    src: "public/design.jpg",
  },
  {
    id: 5,
    src: "src/assets/design.avif",
  },
  {
    id: 6,
    src: "src/assets/design2.webp",
  },
  {
    id: 7,
    src: "src/assets/secure.avif",
  },
  {
    id: 8,
    src: "src/assets/growth.avif",
  },
  {
    id: 9,
    src: "src/assets/code3.avif",
  },
  {
    id: 10,
    src: "src/assets/metrics.avif",
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


