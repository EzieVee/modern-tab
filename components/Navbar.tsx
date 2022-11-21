import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import useDeviceSize from "../components/Hooks/UseDeviceSize";

const Navbar = () => {
  const [width, height] = useDeviceSize();
  console.log(width, height);

  // settings for mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(`use effect is working`);
      window.addEventListener("scroll", changeColor);
    }
    return () => console.log(`use effect is working p2`);
    window.removeEventListener("scroll", changeColor);
  }, [changeColor]);

  // close menu on click

  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="">
        
      
      <div className="flex justify-between bg-orange-00 h-[100px]">
        <Link className="pl-[15%] " href="/">

          <div className="relative h-[100px] w-[100px]">
            
          <Image width={70} height={100} src="/randomLogo.png" alt="" className="pt-3" />
          </div>
          <h1 className="px-4 pt-10">Captur</h1>
        </Link>

        <div className="flex items-center justify-center w-[40%] font-medium text-2xl text-white">
          <p className="redBottom px-8 mulishFont tracking-[1px] cursor-pointer">Home</p>
          <p className="redBottom px-8 mulishFont tracking-[1px] cursor-pointer">About</p>
          <p className="redBottom px-8 mulishFont tracking-[1px] cursor-pointer">Portfolio</p>
          <div className="bg-orange-200">
          <p className="slideColor redBottom px-8 mulishFont tracking-[1px] cursor-pointer text-black">Contact</p>
          </div>
          
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
    </div>
  );
};

export default Navbar;
