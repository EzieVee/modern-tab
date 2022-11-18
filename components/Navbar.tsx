import Link from "next/link";
import React, {useState, useEffect} from "react";
import useDeviceSize from "../components/Hooks/UseDeviceSize"



const Navbar = () => {
  
  const [width, height] = useDeviceSize();
  console.log(width, height)

 
  
  
  // settings for mobile nav
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

// change nav color when scrolling
const [color, setColor] = useState(false)
const changeColor = () => {
  if(window.scrollY >= 10) {
    setColor(true)
  } else {
    setColor(false)
  }
}



useEffect(() => {
  if (typeof window !== "undefined") {
    console.log(`use effect is working`)
    window.addEventListener('scroll', changeColor)
  }
  return () => 
  console.log(`use effect is working p2`)
  window.removeEventListener('scroll', changeColor)
}, [changeColor])



// close menu on click


const closeMenu = () => setClick(false)




  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="flex justify-between bg-orange-00 h-[100px]">
        <Link className="bg-green-300 pl-[15%]" href="/">
          <h1 className="px-4 pt-10">Captur</h1>
        </Link>

        <div className="flex bg-pink-300 px-10 pr-[20%]">
          <p className="px-4 pt-10">Home</p>
          <p className="px-4 pt-10">About</p>
          <p className="px-4 pt-10">Portfolio</p>
          <p className="px-4 pt-10">Contact</p>
        </div>
        {/* <ul className="bg-blue-300 flex justify-center">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};


export default Navbar;
