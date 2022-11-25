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
          <div className=" items-center justify-center flex w-[40%] h-[100%] relative border border-yellow">
           {/* <Image 
           src="/Image5.avif"
           alt=""
           objectFit="cover"
          fill
           
            /> */}
            <Gallery />
          </div>
          <div className="border border-yellow flex flex-col w-[40%] h-[100%] space-y-8">
            <h4 className="mulishFont mt-10 text-orange-300 uppercase font-thin text-sm tracking-[1]">Captur Photography</h4>
            {/* <ImageEffect /> */}
            <h1 className="font-extrabold text-5xl text-white text-center">Coachella Valley's Finest Photographers</h1>
            <p className="text-gray-400 font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab esse eligendi mollitia distinctio, dolore tempora in alias quo! Fugit atque sequi incidunt hic possimus! Aperiam soluta, delectus ex, quas cumque iste laboriosam, excepturi illo ducimus dolorum saepe earum quidem vel natus placeat dignissimos. Voluptatem voluptas porro natus animi dolor aliquid quibusdam sint. Eaque laboriosam, facilis soluta sequi nihil totam ab magni. Asperiores maxime ea dolorum!</p>
            <p className="text-gray-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ad atque blanditiis impedit, asperiores exercitationem necessitatibus iusto explicabo recusandae! Neque deleniti itaque enim quasi, distinctio exercitationem expedita provident! Laborum beatae officia quasi omnis est vero enim! Quisquam praesentium beatae nisi veritatis enim? Ratione corrupti eligendi porro aspernatur repellat soluta quos.</p>
            <p className="text-gray-400 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eligendi reiciendis, mollitia illo voluptas inventore necessitatibus tempora vitae enim eum incidunt ea vel aliquam repellat praesentium quaerat aliquid sint dolor.</p>
           
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
