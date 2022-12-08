import { motion } from 'framer-motion';
import React from 'react';
// import { FcCheckmark } from 'react-icons/fa';
import Image from "next/image";

import { MdThumbUpOffAlt } from "react-icons/md";
type ServicesProps = {
  
};

const Services:React.FC<ServicesProps> = () => {
  
  return (
    <div className="flex items-center justify-center h-[75vh] bg-black/70">
      
      <motion.div className="h-[100%] w-[100%] flex items-center border border-white">
       <div className="flex justify-evenly">
        

        <div className=" w-[40%] my-[5] flex flex-col space-y-8   ">
          <h1 className="  mulishFont mt-10 text-orange-300 uppercase font-thin text-sm tracking-[1]">Our Service</h1>
          <h4 className="font-extrabold text-5xl text-white ">Captur Photography</h4>
          <h1 className="text-gray-400 font-thin">Let us handle the editing.</h1>
          <p className="text-gray-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium quibusdam! Quisquam nesciunt hic fugit doloribus cum unde perferendis aperiam temporibus. Quod officia expedita incidunt consectetur ex commodi nulla excepturi laudantium. Soluta voluptas consequatur mollitia laboriosam aperiam, eius at sit esse quod quo consectetur explicabo tempora maxime? Ea, ex! Neque?</p>
          <p className="text-gray-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae reprehenderit facere fugit. Accusamus corrupti animi, ipsam modi, quo enim rem magni ullam temporibus nisi laboriosam. Est sed omnis neque odio et culpa? Dolore quibusdam dolor totam ipsum tenetur accusantium.</p>
          <button className="">
                <span className="border mulishFont tracking-[1px] cursor-pointer text-white  uppercase ">Get a Quote</span>
              </button>

        </div>

        <div className=" flex flex-col  w-[25%] items-center justify-center">
          <Image />
          <div className="w-[90%] grid grid-cols-2 gap-[60px] mt-[300px]">

          
          <ul className="flex flex-col space-y-5">
            <li className="mulishFont text-white flex items-center text-lg tracking-[1px]">
             Clean Work <span className='pl-[50px]'><MdThumbUpOffAlt color="orange"/> </span> </li>
            <li className="mulishFont text-white flex items-center text-lg tracking-[1px]">Premium Quality<span className='pl-3'><MdThumbUpOffAlt color="orange"/> </span> </li>
            
          </ul>
          <ul className="flex flex-col space-y-5">
            <li className="mulishFont text-white flex items-center text-lg tracking-[1px]">
             Detailed <span className='pl-3 '><MdThumbUpOffAlt color="orange"/> </span> </li>
            <li className="mulishFont text-white flex items-center text-lg tracking-[1px]">Punctual<span className='pl-3'><MdThumbUpOffAlt color="orange"/> </span> </li>
            
          </ul>
          </div>
        </div>

       </div>
      </motion.div>
    </div>
  )
}
export default Services;