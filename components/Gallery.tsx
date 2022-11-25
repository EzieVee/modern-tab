import React, { useState } from 'react';
import { motion } from "framer-motion"

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
      scale: 1.5,
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
    
    className="h-[15vh] w-[15vh] bg-teal-400">

    </motion.div>
  )
}
export default Gallery;