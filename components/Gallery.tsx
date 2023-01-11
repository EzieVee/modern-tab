import React, { useState } from 'react';
import { motion } from "framer-motion"
import Image from 'next/image'

type GalleryProps = {
  
};

const Gallery:React.FC<GalleryProps> = () => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  };

  const handleMouseLeave = () => {
    setIsHovering(false)
  };





  return (
    <motion.div
    whileHover={{
      scale: 1.15,
      transition: {duration: 1},
    }} 
    whileTap={{
      scale: 0.9
    }}
    initial={{
      x: -300,
      opacity: 0,
      scale: 0.2
    }}
    whileInView={{
      x: 0,
      opacity: 1,
      scale: 1,
      
    }}
    
    className="">
      <div className="adjust3 adjust2 adjust h-[60vh] w-[50vh] relative ml-11">
      <Image 
           src="/Image9.avif"
           alt=""
           objectFit="cover"
          fill
           
            />
      </div>

    </motion.div>
  )
}
export default Gallery;