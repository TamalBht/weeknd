import React from 'react';
import Section from './Section';
import weeknd from "../Components/weeknd-2.png"
import { ScrollParallax } from 'react-just-parallax';


const Hero = () => {
  return (
   <Section id="hero" className={"mt-[0rem] mb-[50vh]"}>
    {/* main wrapper */}
    <div className='flex    ' >
        {/* text */}
        <div className='  h-fit '>
        <ScrollParallax isAbsolutelyPositioned >
        
            <h1 className=' bg-text font-niagra text-center text-n-2  text-[20rem]  ml-[15rem] tracking-[5px] '>The Weeknd</h1>
        
        </ScrollParallax>
        </div>
        {/* image */}
        <div className=''>
            <img src = {weeknd} height={20} className=' overflow-hidden absolute max-w-[30rem] lg:max-w-[34rem] left-[35%] z-50 mt-[7rem]'/>
        </div>
    </div>

   </Section>
  )
}

export default Hero
