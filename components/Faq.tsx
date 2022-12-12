import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type FaqProps = {};

const Faq: React.FC<FaqProps> = () => {
  return (
    <div className="flex flex-col bg-black/70">
      <div className="h-[85vh] border flex flex-col items-center">

        <div id="head" className="flex flex-col items-center border ">
          <h4 className="mulishFont text-orange-300 uppercase font-thin text-sm tracking-[1]">
            Portfolio
          </h4>
          <h1 className="font-extrabold text-5xl text-white">
            Frequently Asked Questions
          </h1>
        </div>


      </div>
    </div>
  );
};
export default Faq;
