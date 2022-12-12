import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
type PortfolioProps = {};

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className="flex flex-col justify-center bg-black/70">
      <div className="h-[50vh] flex flex-col items-center justify-center text-center text-white px-[30rem] space-y-8">
        <h4 className="mulishFont mt-10 text-orange-300 uppercase font-thin text-sm tracking-[1]">
          Portfolio
        </h4>
        <h1 className="font-extrabold text-5xl text-white">
          Take A Look At Some of The Work We've Done.
        </h1>
        <p className="text-gray-400 font-thin">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          obcaecati illum, ab omnis asperiores provident id maiores neque
          suscipit deleniti eum? Nihil aliquam facere atque soluta, nemo
          perspiciatis exercitationem repellendus adipisci commodi animi, quis
          aspernatur cumque necessitatibus dolore nesciunt harum.
        </p>
      </div>

      <div className="h-[110vh] flex flex-col items-center content-center">
        <div className=" w-[80%] height-[100%] grid grid-cols-2 gap-5">
        <motion.div
            whileTap={{
              scale: 0.9,
            }}
            initial={{
              
              opacity: 0,
              scale: 0.2,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: .7,
              scale: 1.0,
            }}
            whileHover={{
              opacity: 1
            }}
            transition={{
              duration: .4
            }}
            className="h-[400px] w-[100%] relative bg-slate-500"
          >
            <Image
              alt=""
              src="/Image5.avif"
              layout= "fill"
              objectFit="cover"
              className=""
            />
          </motion.div>
           <motion.div
            whileTap={{
              scale: 0.9,
            }}
            initial={{
              
              opacity: 0,
              scale: 0.2,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: .7,
              scale: 1.0,
            }}
            whileHover={{
              opacity: 1
            }}
            transition={{
              duration: .4
            }}
            className="h-[400px] w-[100%] relative bg-slate-500"
          >
            <Image
              alt=""
              src="/Image3.avif"
              layout= "fill"
              objectFit="cover"
              className=""
            />
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            initial={{
              
              opacity: 0,
              scale: 0.2,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: .7,
              scale: 1.0,
            }}
            whileHover={{
              opacity: 1
            }}
            transition={{
              duration: .4
            }}
            className="h-[400px] w-[100%] relative bg-slate-500"
          >
            <Image
              alt=""
              src="/Imagee.jpg"
              layout= "fill"
              objectFit="cover"
              className=""
            />
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            initial={{
              
              opacity: 0,
              scale: 0.2,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: .7,
              scale: 1.0,
            }}
            whileHover={{
              opacity: 1
            }}
            transition={{
              duration: .4
            }}
            className="h-[400px] w-[100%] relative bg-slate-500"
          >
            <Image
              alt=""
              src="/Image01.jpg"
              layout= "fill"
              objectFit="cover"
              className=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
