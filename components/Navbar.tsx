import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import useDeviceSize from "../components/Hooks/UseDeviceSize";


const Navbar = () => {
  const [width, height] = useDeviceSize();
  // console.log(width, height);

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
      // console.log(`use effect is working`);
      window.addEventListener("scroll", changeColor);
    }
    return () => console.log(`use effect is working p2`);
    window.removeEventListener("scroll", changeColor);
  }, [changeColor]);

  // close menu on click

  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="h-[100px]">
        <div className="flex flex-row justify-between h-[100px] mp:flex justify-evenly">
          <div className="flex items-center ml-[400px] mp:ml-[0px]">
            <Link className="" href="/">
              <Image
                width={70}
                height={100}
                src="/randomLogo.png"
                alt=""
                className=""
              />
            </Link>
          </div>

          <div className="fs flex items-center justify-center w-[40%] font-medium text-2xl text-white">
            <button className="redBottom px-8 mulishFont tracking-[1px] cursor-pointer">
              Home
            </button>
            <button className="redBottom px-8 mulishFont tracking-[1px] cursor-pointer">
              About
            </button>
            <button className="redBottom px-8 mulishFont tracking-[1px] cursor-pointer">
              Portfolio
            </button>
            <div className="bg-orange-300">
              <button className="slideColor px-8 mulishFont tracking-[1px] cursor-pointer text-black">
                Contact
              </button>
              
            </div>
          </div>

<div className="md:hidden flex items-center" id="sidebarMenu">Hamburger</div>

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
