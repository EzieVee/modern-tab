import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type FaqProps = {};

const Faq: React.FC<FaqProps> = () => {
  return (
    <div className="flex flex-col bg-black/70">
      <div className="h-[85vh] border flex flex-col items-center">

        <div id="head" className="flex flex-col items-center border space-y-8 w-[650px] text-center">
          <h4 className="mulishFont text-orange-300 uppercase font-thin text-sm tracking-[1]">
            Portfolio
          </h4>
          <h1 className="font-extrabold text-5xl text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste quod eius libero esse quasi facilis. Id quo ad enim magnam cupiditate quae placeat veritatis?</p>
        </div>

        <div id="body" className="h-[65vh] border w-[80vw]">
      
 <ul className="accordion">
  <li className="text-white flex flex-col justify-center items-center mx-[15vw] border">
    <input type="radio" name="accordion" id="first" checked />
    <label htmlFor="first" className="cursor-pointer">Question 1</label>
    <div className="content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab hic repellendus maxime nihil facilis in, suscipit reiciendis itaque eligendi accusamus enim, et laborum dolore expedita doloremque dignissimos quas blanditiis, id ex asperiores consequuntur fugiat doloribus. Porro officiis blanditiis optio!
    </p>
    </div>
  </li>

  <li className="text-white flex flex-col justify-center items-center mx-[15vw] border">
    <input type="radio" name="accordion" id="second" />
    <label htmlFor="second" className="cursor-pointer">Question 2</label>
    <div className="content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab hic repellendus maxime nihil facilis in, suscipit reiciendis itaque eligendi accusamus enim, et laborum dolore expedita doloremque dignissimos quas blanditiis, id ex asperiores consequuntur fugiat doloribus. Porro officiis blanditiis optio!
    </p>
    </div>
  </li>

  <li className="text-white flex flex-col justify-center items-center mx-[15vw] border">
    <input type="radio" name="accordion" id="third" />
    <label htmlFor="third" className="cursor-pointer">Question 3</label>
    <div className="content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab hic repellendus maxime nihil facilis in, suscipit reiciendis itaque eligendi accusamus enim, et laborum dolore expedita doloremque dignissimos quas blanditiis, id ex asperiores consequuntur fugiat doloribus. Porro officiis blanditiis optio!
    </p>
    </div>
  </li>

  <li className="text-white flex flex-col justify-center items-center mx-[15vw] border">
    <input type="radio" name="accordion" id="fourth" />
    <label htmlFor="fourth" className="cursor-pointer">Question 4</label>
    <div className="content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ab hic repellendus maxime nihil facilis in, suscipit reiciendis itaque eligendi accusamus enim, et laborum dolore expedita doloremque dignissimos quas blanditiis, id ex asperiores consequuntur fugiat doloribus. Porro officiis blanditiis optio!
    </p>
    </div>
  </li>



 </ul>

        </div>


      </div>
    </div>
  );
};
export default Faq;
