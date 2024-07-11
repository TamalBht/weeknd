import React from 'react';
import Section from './Section';
import weeknd from "../Components/weeknd-2.png"
import dawnMain from "../assets/second.webp"
import Footer from './Footer';
import afterhour from "../assets/weeknd-1.png"
import dawn from "../assets/dawnfm.jpg"
import melancholy from "../assets/melancholy.jpg"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const firstRef=useRef(null);
  useGSAP(()=>{
    gsap.to(".hText",{
      scrollTrigger:{
        trigger:".hText",
        start:'top centre',
        end:"+=300",
        scrub:true,
        markers:false,
        toggleActions:"repeat pause reverse pause",

      },
      y:200,
      letterSpacing:15,
     
        duration:2,
      
      
    })

  })
  useGSAP(()=>{
    gsap.to(firstRef.current,{
      scrollTrigger:{
        trigger:firstRef.current,
        start:'top centre',
        end:"+=300",
        scrub:true,
        markers:false,
        toggleActions:"play pause reverse pause",

      },
      y:200,
      letterSpacing:8,
     
        duration:2,
      
      
    })

  })
  return (
    <div className='flex md:block flex-col justify-evenly items-center'>
   <section id="hero" className={"mt-[0rem] mb-[40vh]"}>
    {/* main wrapper */}
    {/* side bar */}
    <div className='md:flex    ' >
    <div className=' absolute md:relative translate-y-[100vh] md:translate-y-0 h-fit md:h-[100vh]   top-[10vh] md:top[0vh] w-auto'>
        <nav className=' relative  md:top-0 md:mt-[10rem] ml-[2.5rem] h-[20vh] md:h-auto fixed'>
            <ul className=' gap-3 flex justify-between md:block'>
                <li className='w-fit mb-[3rem]  rounded-full hover:shadow-[5px_5px_5px_#ff0909] px-3'>
                   <a href="#hero"> <img src={afterhour} width={100} className='rounded-full'/></a>
                </li>
                <li className='w-fit mb-[3rem] rounded-full  hover:shadow-[5px_5px_5px#274F5F]'>
                    <a href="#second"><img src={dawn} width={100} className='rounded-full'/></a>
                </li>
                <li className='mb-[3rem] rounded-full mr-[2rem] hover:shadow-[5px_5px_5px#B1471F]'>
                    <img src={melancholy} width={90} className='rounded-full'/>
                </li>
            </ul>
        </nav>
    </div>
        {/* text */}
        <div className=' z-0 h-fit w-full'>
            <h1 className=' mt-[15vh] md:mt-[16vh] lg:mt-0 bg-text font-niagra text-center text-n-2 text-[8rem] md:text-[10rem] xl:text-[20rem]   md:ml-[15rem] lg:tracking-[5px] ' ref={firstRef}>After Hours</h1>
        </div>
        {/* image */}
        <div className='hero-img'>
            <img id='weeknd' src = {weeknd} height={20} className='overflow-hidden absolute md:absolute max-w-[20rem] md:max-w-[30rem] lg:max-w-[34rem]  md:left-[35%] z-50 mt-[7rem]'/>
        </div>
        

    </div>

   </section>
   {/*next section*/ }
   <section id="second" className={"mt-[30vh] mb-[40vh] min-h-[100vh]"}>
     {/* text */}
     <div className=' z-0 h-fit w-full'>
            <h1 className='hText mt-[25vh] md:mt-[16vh] lg:mt-0 bg-text font-niagra text-center text-n-3 text-[8rem] md:text-[10rem] xl:text-[20rem]   md:ml-[5rem] lg:tracking-[5px]  '>Dawn FM</h1>
        </div>
        <div className='hero-img1'>
            <img id='weeknd2' src = {dawnMain} height={1020} className=' relative md:absolute max-w-[50rem] md:max-w-[30rem] lg:max-w-[60rem]  md:left-[15%] z-50 md:mt-[-15rem] mt-[0rem] '/>
        </div>
   </section>
   <section className='mt-[0rem] mb-[40vh] min-h-[100vh]"'></section>
   
   </div>
  )
}

export default Hero
