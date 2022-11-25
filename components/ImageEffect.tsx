import React, { useState } from 'react';

type ImageEffectProps = {
  
};

const ImageEffect:React.FC<ImageEffectProps> = () => {
  const [isHovering, setIsHovering ] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
<>
<div>
  <div className="cursor-pointer"style={{
    backgroundColor: isHovering ? 'teal' : '',
    color: isHovering ? 'blue' : ''
  }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  >
Hover me
  </div>
</div>
</>
  )
}
export default ImageEffect;