

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
import { useRef,useEffect } from 'react';
import Sidescroll from './Sidescroll';
import thirdmain from '../assets/third-main.png'

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const firstRef=useRef(null);
  const contRef=useRef(null);

  useEffect(()=>{
    gsap.to(".hText",{
      scrollTrigger:{
        trigger:".hText",
        start:"top center",
        end:"bottom bottom",
        scrub:2,
        
        
        
      },
      y:400,
      letterSpacing:15,
      duration:2,
      
    })

  },[])
  useEffect(()=>{
    gsap.to(".hTextt",{
      scrollTrigger:{
        trigger:".hTextt",
        start:"top center",
        end:"bottom bottom",
        scrub:2,
        markers:true,
        
        
      },
      y:400,
      letterSpacing:15,
      duration:2,
      
    })

  },[])
  useEffect(()=>{
    gsap.to(firstRef.current,{
      scrollTrigger:{
        trigger:firstRef.current,
        start:"20% top",
        end:"bottom bottom",
        scrub:2,        
      },
      y:400,
      letterSpacing:8,
     
        duration:2,
 
    })

  },[])

  return (
    <>
    <div className='  md:block overflow-x-hidden'>
       <div className='navv   md:fixed  md:translate-y-0 h-fit md:h-[100vh]    md:top[-5vh] w-full md:w-fit z-[99]  '>
        <nav className='    md:top-0  md:ml-[2.5rem]  md:h-auto '>
            <ul className='  md:gap-[0] flex justify-evenly align-center md:block'>
                <li className='w-fit md:mb-[3rem] h-fit rounded-full shadow-[2px_2px_5px_#ff0909] active:scale-[0.75]'>
                   <a href="#hero"> <img src={afterhour} width={80} className='rounded-full md:w-[130px]' /></a>
                </li>
                <li className='w-fit mb-[3rem] h-fit rounded-full  shadow-[2px_2px_5px#274F5F] active:scale-[0.75]'>
                    <a href="#second"><img src={dawn} width={80} className='rounded-full md:w-[130px]'/></a>
                </li>
                <li className='w-fit md:mb-[3rem] h-fit rounded-full  shadow-[2px_2px_5px#B1471F] active:scale-[0.75]'>
                    <a href="#third"><img src={melancholy} width={80} className='rounded-full md:w-[130px]'/></a>
                </li>
            </ul>
        </nav>
    </div>
  {/*xsection container*/ }
  <div className="sec-cont ">
  <section id="hero" className={"relative  md:top-0 mt-[0rem] mb-0 md:mb-[50vh] w-full md:w-fit "}>
    {/* main wrapper */}
    {/* side bar */}
    <div className='md:flex    ' >
   
        {/* text */}
        <div className=' z-0 h-fit w-full'>
            <h1 className='relative md:left-[10vw] md:mt-[25vh]  lg:mt-0 bg-text font-niagra text-center text-n-2 text-[8rem] md:text-[10rem] xl:text-[20rem]   md:ml-[15rem] lg:tracking-[5px] ' ref={firstRef}>After Hours</h1>
        </div>
        {/* image */}
        <div className='hero-img'>
            <img id='weeknd' src = {weeknd} height={20} className='overflow-hidden relative  left-[10%] md:absolute max-w-[20rem] md:max-w-[30rem] lg:max-w-[34rem]  md:left-[35%] z-50 md:mt-[7rem] -mt-[5rem]'/>
        </div>
        

    </div>

   </section>
   <div className="h-[5vh] md:h-[25vh]"></div>
   {/*next section*/ }
   <section id="second" className={"md:mt-[0vh]  md:mb-[40vh] min-h-[100vh]"}>
     {/* text */}
     <div className=' z-0 h-fit w-full'>
            <h1 className='hText relative  md:left-[0vw] mt-[25vh] md:mt-[16vh] lg:mt-0 bg-text font-niagra text-center text-n-3 text-[8rem] md:text-[10rem] xl:text-[20rem]   md:ml-[5rem] lg:tracking-[5px]  '>Dawn FM</h1>
        </div>
        <div className='hero-img1'>
            <img id='weeknd2' src = {dawnMain} height={1020} className=' relative md:absolute max-w-[40rem] md:max-w-[30rem] lg:max-w-[60rem]  md:left-[15%] z-50 md:mt-[-15rem] mt-[0rem] left-[-8rem] '/>
        </div>
   </section>
   <div className="h-[5vh] md:h-[25vh]"></div>
   {/*Third sec */}
   <section id="third" className={"mt-[0vh] mb-[40vh] min-h-[100vh]"}>
     {/* text */}
     <div className=' z-0 h-fit w-full'>
            <h1 className='hTextt relative  md:left-[0vw] mt-[25vh] md:mt-[16vh] lg:mt-0 bg-text font-niagra text-center text-n-4 text-[8rem] md:text-[10rem] xl:text-[20rem]   md:ml-[5rem] lg:tracking-[5px]  '>KissLand</h1>
        </div>
        <div className='hero-img1'>
            <img id='weeknd3' src = {thirdmain} height={1020} className=' relative md:absolute max-w-[40rem] md:max-w-[30rem] lg:max-w-[60rem]  md:left-[15%] z-50 md:mt-[-15rem] mt-[0rem] left-[-8rem]'/>
        </div>
   </section>
  
  
   
  </div>
  
   </div>
   <div className="h-[35vh]"></div>
   <Sidescroll/>
   <section className='h-[100vh]'>last</section>
   
   
   </>
  )
}

export default Hero