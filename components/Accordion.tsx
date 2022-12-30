import { motion } from "framer-motion";
import React, { useState } from "react";

type AccordionProps = {};

const Accordion: React.FC<AccordionProps> = () => {
  return (
    <div className="accordion flex flex-col items-center justify-center text-center mx-[10vw]">
      {data.map((item, i) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <div className="item">
            <div className="title font-extrabold text-2xl text-white  flex flex-col">
              <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                {item.question}
              </button>
              {/* <span className="">+</span> */}
            </div>

            <div className={isOpen ? "content-parent show" : "content-parent"}>
              
              <div className="content">
                
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque quos dolorem autem libero. Minima molestiae, totam corrupti voluptatem modi dolor id sunt veritatis sit repellat animi! Neque, ratione alias!",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque quos dolorem autem libero. Minima molestiae, totam corrupti voluptatem modi dolor id sunt veritatis sit repellat animi! Neque, ratione alias!",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque quos dolorem autem libero. Minima molestiae, totam corrupti voluptatem modi dolor id sunt veritatis sit repellat animi! Neque, ratione alias!",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque quos dolorem autem libero. Minima molestiae, totam corrupti voluptatem modi dolor id sunt veritatis sit repellat animi! Neque, ratione alias!",
  },
  {
    question: "Question 5",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque quos dolorem autem libero. Minima molestiae, totam corrupti voluptatem modi dolor id sunt veritatis sit repellat animi! Neque, ratione alias!",
  },
  {
    question: "Question 6",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque quos dolorem autem libero. Minima molestiae, totam corrupti voluptatem modi dolor id sunt veritatis sit repellat animi! Neque, ratione alias!",
  },
];

export default Accordion;
