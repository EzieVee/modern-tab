import { motion } from "framer-motion";
import React from "react";

type BgProps = {};

const Bg: React.FC<BgProps> = () => {
  return (
    <motion.div
      initial={{
        y: 300,
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="bg-green-300 h-screen"
    ></motion.div>
  );
};
export default Bg;
