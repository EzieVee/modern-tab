import Head from 'next/head'
import Image from 'next/image'
import Bg from '../components/Bg'
import Nav from '../components/Nav'
// bg-[rgb(36,36,36)]



export default function Home() {
  return (
    
    <div className=" bg-teal-200 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* <Bg /> */}
      <Nav />
      
    <section id="hero" className='h-screen bg-gray-500 snap-start'>
      {/* <Hero /> */}
    </section>

    <section id="About" className='h-screen bg-yellow-500 snap-center'>
      {/* <Hero /> */}
    </section>



    </div>

  )
}
