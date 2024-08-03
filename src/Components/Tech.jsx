import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiJavascript, SiTailwindcss, SiReact, SiFirebase, SiMongodb, SiExpress,  SiNextdotjs, SiFramer, SiNodedotjs } from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

const Tech = () => {
  return (
    <div className="py-24">
         <p className="text-black font-extrabold text-3xl text-center">TECHNOLOGIES I USE</p>
    <section className="flex md:h-72 flex-col items-center justify-center gap-12 py-24 md:flex-row ">
    
       
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            <FaHtml5/>
          </LogoItem>,

          <LogoItem key={2} className="bg-green-300 text-neutral-900">
            <FaCss3Alt/>
          </LogoItem>,
          
        ]}
      />

     <LogoRolodex
        items={[
            <LogoItem key={3} className="bg-blue-300 text-neutral-900">
            <SiJavascript/>
          </LogoItem>,

          <LogoItem key={4} className="bg-white text-black">
           <SiTailwindcss/>
          </LogoItem>,
        ]}
      />

    <LogoRolodex
        items={[
          <LogoItem key={3} className="bg-blue-300 text-neutral-900">
            <SiReact/>
          </LogoItem>,

          <LogoItem key={4} className="bg-white text-black">
            <SiFirebase/>
          </LogoItem>,

          <LogoItem key={5} className="bg-purple-300 text-neutral-900">
            <SiFirebase/>
          </LogoItem>,
        ]}
      />

    <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            < SiNextdotjs/>
          </LogoItem>,

          <LogoItem key={2} className="bg-green-300 text-neutral-900">
            <SiMongodb />
          </LogoItem>,

          <LogoItem key={3} className="bg-blue-300 text-neutral-900">
            <SiExpress/>
          </LogoItem>,

          <LogoItem key={3} className="bg-blue-300 text-neutral-900">
          <SiNodedotjs/>
        </LogoItem>,
         
        ]}
      />
    </section>
    </div>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-[0.3px] border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tech