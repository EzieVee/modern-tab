import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Accordion from "./Accordion";
import Accordion2 from "./Accordion2";

type FaqProps = {};

const Faq: React.FC<FaqProps> = () => {
  return (
    <div className="flex flex-col bg-black/70">
      <div className="h-[85vh] border flex flex-col items-center">
        <div
          id="head"
          className="flex flex-col items-center space-y-8 w-[650px] text-center"
        >
          <h4 className="mulishFont text-orange-300 uppercase font-thin text-sm tracking-[1]">
            Portfolio
          </h4>
          <h1 className="font-extrabold text-5xl text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iste
            quod eius libero esse quasi facilis. Id quo ad enim magnam
            cupiditate quae placeat veritatis?
          </p>
        </div>

        <div
          id="body"
          className="h-[65vh] w-[80vw] flex flex-col items-center"
        >
          <Accordion />
          <div className="flex  flex-col items-center py-5 space-y-1 absolute right-10">
            <h1 className="font-extrabold text-2xl text-white">Not here?</h1>
            <p className="font-thin text-gray-400 pb-2">
              Message Us and we'll get back to you ASAP
            </p>

            <span className="bg-orange-300 slideColor px-5 py-1 mulishFont cursor-pointer text-black text-xl font-bold tracking-[1px] ">
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
