import { motion } from 'framer-motion';
import React from 'react';

type ServicesProps = {
  
};

const Services:React.FC<ServicesProps> = () => {
  
  return (
    <div className="flex items-center justify-center h-[75vh] bg-black/70">
      <motion.div className="h-[100%] w-[100%] flex items-center border border-white">
       <div className="flex justify-evenly">

        <div className=" w-[40%] my-[5] flex flex-col space-y-8  ">
          <h1 className="  mulishFont mt-10 text-orange-300 uppercase font-thin text-sm tracking-[1]">Our Service</h1>
          <h4 className="font-extrabold text-5xl text-white ">Captur Photography</h4>
          <h1 className="text-gray-400 font-thin">Let us handle the editing.</h1>
          <p className="text-gray-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium quibusdam! Quisquam nesciunt hic fugit doloribus cum unde perferendis aperiam temporibus. Quod officia expedita incidunt consectetur ex commodi nulla excepturi laudantium. Soluta voluptas consequatur mollitia laboriosam aperiam, eius at sit esse quod quo consectetur explicabo tempora maxime? Ea, ex! Neque?</p>
          <p className="text-gray-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae reprehenderit facere fugit. Accusamus corrupti animi, ipsam modi, quo enim rem magni ullam temporibus nisi laboriosam. Est sed omnis neque odio et culpa? Dolore quibusdam dolor totam ipsum tenetur accusantium.</p>
          <button className="mulishFont tracking-[1px] cursor-pointer text-black">
                Get a quote
              </button>

        </div>

        <div className="bg-red-300">
          <ul className="flex flex-row space-x-8 ">
            <li>Clean Work</li>
            <li>Quality Guaranteed</li>
            
          </ul>
          <ul className="flex flex-row space-x-8 ">
            <li>Clean Work</li>
            <li>Quality Guaranteed</li>
           
          </ul>
        </div>

       </div>
      </motion.div>
    </div>
  )
}
export default Services;