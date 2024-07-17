import React from 'react'
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';



const Footer = () => {
  return (
    <>
   <div className="foot-cont w-full h-fit border-t-[2px] border-zinc-900">
   <footer className='text-center py-3 text-[1.5rem] text-n-2 '>©Tamal Bhattacharjee</footer>
    <div className="socials flex items-center justify-center gap-[2rem] py-[1rem]">
    
    <a href="https://github.com/TamalBht" target="_blank" rel="noopener noreferrer"><Github size={40}/></a>
    <a href="https://www.linkedin.com/in/tamal-bhattacharjee-962a1b254/" target="_blank" rel="noopener noreferrer"><Linkedin size={40}/></a>
    <a href="https://www.instagram.com/ethereal.tamal/" target="_blank" rel="noopener noreferrer"><Instagram size={40}/></a>

    </div>
   </div>
    </>
  )
}


export default Footer