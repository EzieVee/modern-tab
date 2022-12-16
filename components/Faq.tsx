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
          className="flex flex-col items-center border space-y-8 w-[650px] text-center"
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

        <div id="body" className="h-[65vh] border w-[80vw] flex flex-col items-center">

    <Accordion />

        </div>
      </div>
    </div>
  );
};
export default Faq;
