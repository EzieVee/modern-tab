import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Bg from "../components/Bg";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
// bg-[rgb(36,36,36)]

export default function Home() {
  return (
    <div className="h-[800vh]">
      
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
      <section id="Hero" className="h-screen bg-teal-300 ">
        <Hero />
      </section>
      <section id="About" className="h-[120vh] bg-fixed bg-center bg-cover custom-img2">
        <About />
      </section>
    </div>
  );
}
