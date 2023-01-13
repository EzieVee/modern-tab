import { motion } from "framer-motion";
import React from "react";
// import { FcCheckmark } from 'react-icons/fa';
import Image from "next/image";

import { MdThumbUpOffAlt } from "react-icons/md";
type ServicesProps = {};

const Services: React.FC<ServicesProps> = () => {
  return (
    <div className="flex items-center justify-center h-[75vh] bg-black/70">
      <motion.div className="h-[100%] w-[100%] flex items-center  ">
        <div className="flex justify-evenly">
          <div className=" w-[40%] my-[5] flex flex-col space-y-8   ">
            <h1 className="  mulishFont mt-10 text-orange-300 uppercase font-thin text-sm tracking-[1]">
              Our Service
            </h1>
            <h4 className="font-extrabold text-5xl text-white ">
              Captur Photography
            </h4>
            <h1 className="text-gray-400 font-thin">
              Let us handle the editing.
            </h1>
            <p className="text-gray-400 font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              praesentium quibusdam! Quisquam nesciunt hic fugit doloribus cum
              unde perferendis aperiam temporibus. Quod officia expedita
              incidunt consectetur ex commodi nulla excepturi laudantium. Soluta
              voluptas consequatur mollitia laboriosam aperiam, eius at sit esse
              quod quo consectetur explicabo tempora maxime? Ea, ex! Neque?
            </p>
            <p className="text-gray-400 font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              repudiandae reprehenderit facere fugit. Accusamus corrupti animi,
              ipsam modi, quo enim rem magni ullam temporibus nisi laboriosam.
              Est sed omnis neque odio et culpa? Dolore quibusdam dolor totam
              ipsum tenetur accusantium.
            </p>
            <button className="">
              <span className="bg-[#fb923c] slideColor px-5 py-1 mulishFont cursor-pointer text-black text-xl font-bold tracking-[1px]">
                Get a Quote
              </span>
            </button>
          </div>

          <div className="flex flex-col  w-[25%] items-center justify-center">
            <motion.div

whileTap={{
  scale: 0.9
}}
initial={{
  y: 100,
  x: 50,
  opacity: 0,
  scale: 0.2
}}
whileInView={{
  x: 0,
  y: 0,
  opacity: 0.6,
  scale: 1.2,
}}
            className="h-[200px] w-[250px] relative ml-[30rem]">
              <Image
              alt=""
               src="/randomLogo.png"
               width={100}
               height={100}
               objectFit="cover"
               className="" />
            </motion.div>
            <div className="w-[90%] flex flex-col gap-[60px] mt-[215px]">


              <ul className="flex flex-col space-y-5 ">
                <li className=" mulishFont text-white flex justify-between text-lg tracking-[1px]">
                  <div id="parent" className="flex space-x-5">
                  


               
                 
                    <span>Clean Work</span>
                  {" "}
                  <span className="flex items-center">
                    <MdThumbUpOffAlt color="orange" />{" "}
                  </span>{" "}
                 

                  </div>


                  <div>
                  Premium Quality

                  </div>
                  <span className="flex items-center">
                    <MdThumbUpOffAlt color="orange" />{" "}
                  </span>{" "}
                </li>
                
                <li className=" mulishFont text-white flex justify-between text-lg tracking-[1px]">
                  <div id="parent" className="flex space-x-12  w-[50%]">
                  


               
                 
                    <span>Detailed</span>
                  {" "}
                  <span className="flex items-center">
                    <MdThumbUpOffAlt color="orange" />{" "}
                  </span>{" "}
                 

                  </div>


                  <div id="parent" className="flex space-x-12  w-[50%] justify-between">
                  


               
                 
                  <span>Punctual</span>
                {" "}
                <span className="flex items-center">
                  <MdThumbUpOffAlt color="orange" />{" "}
                </span>{" "}
               

                </div>
                </li>
                
              </ul>
             
            </div>
          </div>





        </div>
      </motion.div>
    </div>
  );
};
export default Services;
