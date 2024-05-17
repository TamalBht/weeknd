import React from 'react';
import Section from './Section';
import weeknd from "../Components/weeknd-2.png"

const Hero = () => {
  return (
   <Section id="hero">
    {/* main wrapper */}
    <div >
        {/* text */}
        <div>

        </div>
        {/* image */}
        <div>
            <img src = {weeknd} height={20} className=' absolute max-w-[30rem] lg:max-w-[34rem] left-[35%] z-50'/>
        </div>
    </div>

   </Section>
  )
}

export default Hero
