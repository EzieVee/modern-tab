import React from "react";
import Image from "next/image";
import ImageEffect from "./ImageEffect";
import Gallery from "./Gallery";
import { motion } from "framer-motion";

function about() {
  return (
    <>
      <div className="flex items-center justify-center h-[120vh] bg-black/70">
        {/* add border-black to see container dimensions */}
        <div className="overflow-hidden orangeTransitionB flex border h-[85vh] w-[85vw] combo3:flex-col combo3:items-center combo3">
          <div className=" items-center justify-center flex h-[100%] relative">
            {/* <Image 
           src="/Image5.avif"
           alt=""
           objectFit="cover"
          fill
           
            /> */}

            <div className="flex items-center justify-center combo3:mt-10">
              <Gallery />
            </div>
          </div>



{/* Double scrollable */}

<div className=" flex justify-center " id="window">
          <div id="window-content" className=" flex flex-col w-[75%]  h-[100%] space-y-8 overflow-hidden combo2:w-[75%] combo2:items-center">
            <h4 className="mulishFont mt-10 text-orange-300 uppercase font-thin text-sm tracking-[1]">
              Captur Photography
            </h4>
            {/* <ImageEffect /> */}
            <motion.h1
              whileHover={{}}
              className="font-extrabold text-5xl text-white text-center combo:text-4xl"
            >
              Coachella Valley's Finest
            </motion.h1>

            <div id="dialog-window">

<div id="scrollable-content" className="">
<p className="text-gray-400 font-thin orangeTransition">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab esse
              eligendi mollitia distinctio, dolore tempora in alias quo! Fugit
              atque sequi incidunt hic possimus! Aperiam soluta, delectus ex,
              quas cumque iste laboriosam, excepturi illo ducimus dolorum saepe
              earum quidem vel natus placeat dignissimos. Voluptatem voluptas
              porro natus animi dolor aliquid quibusdam sint. Eaque laboriosam,
              facilis soluta sequi nihil totam ab magni. Asperiores maxime ea
              dolorum!
            </p>
            <br></br>
            
            <p className="text-gray-400 font-thin orangeTransition">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempore blanditiis mollitia labore ab molestias. Tenetur aspernatur perferendis eveniet consectetur mollitia vero modi molestias recusandae repellendus sequi. Repudiandae quisquam voluptate tenetur nisi omnis eaque consequuntur saepe non ex officia quas commodi, aperiam impedit, dolor amet illum nostrum sit nobis. Eos dignissimos harum nihil, adipisci aut excepturi odit cum nemo optio? Accusamus numquam explicabo dolorem quia eius beatae quis atque doloribus dolore cupiditate voluptates voluptate deserunt odio hic, commodi incidunt veniam modi aperiam aut eos repellat doloremque! Laudantium recusandae qui ipsum alias quo asperiores autem! Sapiente error officiis dolor recusandae fuga.
            </p>
            <br />
        
            <p className="text-gray-400 font-thin orangeTransition">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim ipsa architecto tempora quas. Ratione reiciendis sapiente a iste veritatis rem doloribus, minus, vel voluptate doloremque nesciunt, iure blanditiis impedit cupiditate vitae sunt deleniti quos quaerat minima? Inventore at fugiat repudiandae ratione quam in deleniti iste 
            </p>

</div>



</div>


           


          </div>
          </div>


</div>
</div>
 
      

      {/* <div className="absolute h-[120vh] top-[100vh] left-0 right-0 bottom-0 bg-black/70 z-[2]"></div>

      <div className="text-cyan-400 bg-purple-200 h-[120vh]">
        <div className="z-[3]">1</div>

        <div>2</div>
      </div> */}
    </>
  );
}

export default about;
