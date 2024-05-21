import React from 'react';
import Section from './Section';
import weeknd from "../Components/weeknd-2.png"
import { ScrollParallax } from 'react-just-parallax';
import Sidebar from './Sidebar';


const Hero = () => {
  return (
   <Section id="hero" className={"mt-[0rem] mb-[50vh]"}>
    {/* main wrapper */}
    <div className='flex  flex-col justify-between md:flex-row  ' >
        {/* text */}
        <div className=' z-0 h-fit '>
        <ScrollParallax isAbsolutelyPositioned >
        
            <h1 className=' bg-text font-niagra text-center text-n-2 text-[8rem] md:text-[10rem] lg:text-[20rem]   md:ml-[15rem] lg:tracking-[5px] '>The Weeknd</h1>
        
        </ScrollParallax>
        </div>
        {/* image */}
        <div className=''>
            <img src = {weeknd} height={20} className=' overflow-hidden absolute max-w-[30rem] lg:max-w-[34rem] left-[35%] z-50 mt-[7rem]'/>
        </div>
        <Sidebar/>

    </div>

   </Section>
  )
}

export default Hero
