import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
   <div className="md:px-3">
     <section className="grid place-content-center gap-2 bg-blue-950 px-8 py-24 text-black rounded-[20px]">
      <p>Contact me on:</p>
      <FlipLink href="https://x.com/naiye_20">Twitter</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/rhonaiye-felix-a0b579228/">Linkedin</FlipLink>
      <FlipLink href="https://wa.me/+2349131215984?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20opportunity">Whatsapp</FlipLink>
      <FlipLink href="https://www.instagram.com/_naiye/">Instagram</FlipLink>
    </section>
   </div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Contact