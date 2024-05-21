import React from 'react'
import afterhour from "../assets/weeknd-1.png"
import dawn from "../assets/dawnfm.jpg"
import melancholy from "../assets/melancholy.jpg"
const Sidebar = () => {
  return (
    <div className=' absolute md:relative translate-y-[100vh] md:translate-y-0 h-fit md:h-[100vh]   top-[10vh] md:top[0vh] w-auto'>
        <nav className=' relative  md:top-0 md:mt-[10rem] ml-[2.5rem] h-[20vh] md:h-auto'>
            <ul className=' flex  md:block'>
                <li className='w-fit mb-[3rem]  rounded-full hover:shadow-[5px_5px_5px_#ff0909] px-3'>
                    <img src={afterhour} width={100}/>
                </li>
                <li className='w-fit mb-[3rem] rounded-full  hover:shadow-[5px_5px_5px#274F5F]'>
                    <img src={dawn} width={100}/>
                </li>
                <li className='mb-[3rem] rounded-full mr-[2rem] hover:shadow-[5px_5px_5px#B1471F]'>
                    <img src={melancholy} width={100} />
                </li>
            </ul>
        </nav>
    </div>

  )
}

export default Sidebar