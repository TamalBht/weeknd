import React from 'react';
import Section from './Section';
import weeknd from "../Components/weeknd-2.png"
import { ScrollParallax } from 'react-just-parallax';


const Hero = () => {
  return (
   <Section id="hero">
    {/* main wrapper */}
    <div className='flex column overflow-hidden' >
        {/* text */}
        <ScrollParallax isAbsolutelyPositioned>
        <div className=''>
            <h1 className='absolute font-niagra text-center text-n-2  text-[17rem] overflow-hidden ml-[35rem] overflow-hidden'>The Weeknd</h1>
        </div>
        </ScrollParallax>
        {/* image */}
        <div className=''>
            <img src = {weeknd} height={20} className=' absolute max-w-[30rem] lg:max-w-[34rem] left-[35%] z-50 mt-[6rem]'/>
        </div>
    </div>

   </Section>
  )
}

export default Hero
