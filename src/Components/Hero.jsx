import React from 'react';
import Section from './Section';
import weeknd from "../Components/weeknd-2.png"
import { ScrollParallax } from 'react-just-parallax';
import Sidebar from './Sidebar';
import Footer from './Footer';


const Hero = () => {
  return (
    <>
   <Section id="hero" className={"mt-[0rem] mb-[40vh]"}>
    {/* main wrapper */}
    <div className='md:flex    ' >
        {/* text */}
        <div className=' z-0 h-fit '>
        <ScrollParallax isAbsolutelyPositioned >
        
            <h1 className='mt-[15vh] md:mt-[16vh] lg:mt-0 bg-text font-niagra text-center text-n-2 text-[8rem] md:text-[10rem] xl:text-[20rem]   md:ml-[15rem] lg:tracking-[5px] '>The Weeknd</h1>
        
        </ScrollParallax>
        </div>
        {/* image */}
        <div className='hero-img'>
            <img id='weeknd' src = {weeknd} height={20} className=' overflow-hidden absolute md:absolute max-w-[20rem] md:max-w-[30rem] lg:max-w-[34rem]  md:left-[35%] z-50 mt-[7rem]'/>
        </div>
        <Sidebar/>

    </div>

   </Section>
   <Footer/>
   </>
  )
}

export default Hero
