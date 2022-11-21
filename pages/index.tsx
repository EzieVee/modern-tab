import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Bg from "../components/Bg";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
// bg-[rgb(36,36,36)]

export default function Home() {
  return (
    <div className="">
      
      {/* <div className=" bg-teal-200 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Nav />

        <section
          id="hero"
          className="h-screen bg-gray-500 snap-start"
        ></section>

        <section
          id="About"
          className="h-screen bg-yellow-500 snap-center"
        ></section>
      </div> */}
      <section id="Hero" className="bg-teal-200">
        <Hero />
      </section>
      <section id="About" className="bg-teal-500 h-screen">
        <About />
      </section>
    </div>
  );
}
