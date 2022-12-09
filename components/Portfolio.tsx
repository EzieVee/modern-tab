import React from 'react';

type PortfolioProps = {
  
};

const Portfolio:React.FC<PortfolioProps> = () => {
  
  return (
    <div className="flex flex-col justify-center bg-black/70">

<div className="h-[50vh] flex flex-col items-center justify-center text-center text-white px-[30rem] space-y-8">
  <h4 className="mulishFont mt-10 text-orange-300 uppercase font-thin text-sm tracking-[1]">Portfolio</h4>
  <h1 className="font-extrabold text-5xl text-white">Take A Look At Some of The Work We've Done.</h1>
  <p className="text-gray-400 font-thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati illum, ab omnis asperiores provident id maiores neque suscipit deleniti eum? Nihil aliquam facere atque soluta, nemo perspiciatis exercitationem repellendus adipisci commodi animi, quis aspernatur cumque necessitatibus dolore nesciunt harum.</p>
</div>

<div className="h-[100vh] bg-green-500"> 
1
</div>

    </div>
  )
}
export default Portfolio;