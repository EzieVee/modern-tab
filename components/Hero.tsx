import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img ">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="text-white z-[2] flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold nanumFont tracking-[1px]">Captur Photography</h2>
        <p className="py-5 text-xl dosisFont">I capture moments and keep them alive</p>
        <button className="slideColor2 px-8 py-2 border uppercase font-semibold tracking-[1px] ">Book</button>
      </div>
    </div>
  );
};

export default Hero;
