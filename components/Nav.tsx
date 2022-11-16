import { motion } from "framer-motion";
import React, {useState} from "react";
import { SocialIcon } from "react-social-icons";
import {useScrollPosition} from "../components/Hooks/useScrollPosition"
type NavProps = {};

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ');
}

const Nav: React.FC<NavProps> = () => {
  const scrollPosition = useScrollPosition()
/* sticky top-0 p-5 flex items-start w-screen mx-auto z-20
    xl:items-center justify-evenly #93c5fd h-24 shadow-lg */

    console.log(scrollPosition)



  return (
    <header
      className={classNames(
        scrollPosition > 0 ? 'bg-red-500' : 'bg-yellow-500',
        'sticky top-0 <z-5></z-5> bg-white transition-shadow',
      )}
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>


      
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};
export default Nav;
