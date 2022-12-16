import React, {useState} from 'react';

type Accordion2Props = {
  
};

const Accordion2:React.FC<Accordion2Props> = () => {
  
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion flex flex-col items-center justify-center text-center mx-[10vw] text-yellow-500">
     
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div className="content">Some content</div>}
    </div>
  );
}
export default Accordion2;