import React from "react";
import Image from 'next/image'
import ImageEffect from "./ImageEffect";
import Gallery from "./Gallery";
function about() {
  return (
    <>
      <div className="flex items-center justify-center h-[120vh] bg-black/70">
{/* add border-black to see container dimensions */}
        <div className="flex border border-green-500 h-[85vh] w-[80vw] justify-evenly">
          <div className=" items-center justify-center flex w-[40%] h-[100%] relative">
           {/* <Image 
           src="/Image5.avif"
           alt=""
           objectFit="cover"
          fill
           
            /> */}
            <Gallery />
          </div>
          <div className="border border-yellow flex flex-col w-[40%] h-[100%] justify-evenly">
            <h4 className="text-white uppercase font-semibold text-center">Captur Photography</h4>
            <ImageEffect />
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque.</p>
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
