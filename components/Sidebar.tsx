import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="fixed  z-30 flex items-center cursor-pointer right-5 top-6"
            fill="rgb(251 146 60)"
            viewBox="0 0 100 80"
            width="30"
            height="40"
          >
            <rect width="100" height="8"></rect>
            <rect y="30" width="70" height="8"></rect>
            <rect y="60" width="100" height="8"></rect>
          </svg>
        </button>
      ) : (
        <motion.div
          initial={{
            x: 180,
            opacity: 0.5
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
          }}
          className="fixed top-0 right-0 h-screen w-[60vw]  
      flex flex-col bg-black/[.81]"
        >

<div>



          <button
            className="fixed top-5 right-4 bg-red-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            
            <svg
              className="fixed  z-30 flex items-center cursor-pointer right-5 top-6"
              fill="rgb(251 146 60)"
              viewBox="0 0 100 80"
              width="30"
              height="40"
            >
              <rect width="100" height="8"></rect>
              <rect y="30" width="70" height="8"></rect>
              <rect y="60" width="100" height="8"></rect>
            </svg>
          </button>
          <div className="flex flex-col mt-[100px] mr-5 text-right space-y-2">
          <h2 className="font-extrabold text-2xl text-white ">Home</h2>
          <h2 className="font-extrabold text-2xl text-white">About</h2>
          <h2 className="font-extrabold text-2xl text-white">Portfolio</h2>
          <h2 className="font-extrabold text-2xl text-white">Contact</h2>

          </div>
          </div>
        </motion.div>
        
      )}
    </>
  );
}

export default Sidebar;
