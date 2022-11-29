import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img ">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="text-white z-[2] flex flex-col items-center justify-center">
        <motion.h2
        initial={{

        }}
        whileHover={{
          scale: 1.2
        }}
        transition={{
          duration: 1
        }}
        // animate={{ x: [0,15,50,150,20,0]}}
        className="text-5xl font-bold nanumFont tracking-[1px]"><span className="colorChange">
          Captur</span><span className=""> Photography</span></motion.h2>
        <p className="py-5 text-xl dosisFont">I capture moments and keep them alive</p>
        <button className="slideColor3 px-8 py-2 border uppercase font-semibold tracking-[1px] text-xs">Book</button>
      </div>
    </div>
  );
};

export default Hero;
