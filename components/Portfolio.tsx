import React from 'react';

type PortfolioProps = {
  
};

const Portfolio:React.FC<PortfolioProps> = () => {
  
  return (
    <div className="flex flex-col justify-center bg-black/70">

<div className="h-[50vh] flex flex-col items-center justify-center text-center text-white">
  <h4>1</h4>
  <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, repellendus?</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati illum, ab omnis asperiores provident id maiores neque suscipit deleniti eum? Nihil aliquam facere atque soluta, nemo perspiciatis exercitationem repellendus adipisci commodi animi, quis aspernatur cumque necessitatibus dolore nesciunt harum.</p>
</div>

<div className="h-[100vh] bg-green-500"> 
1
</div>

    </div>
  )
}
export default Portfolio;