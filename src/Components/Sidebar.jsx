import React from 'react'
import afterhour from "../assets/weeknd-1.png"
import dawn from "../assets/dawnfm.jpg"
import melancholy from "../assets/melancholy.jpg"
const Sidebar = () => {
  return (
    <div className='relative h-[100vh]   md:items-center   top-[10vh] md:top[0vh] w-auto'>
        <nav className=' relative top-[50vh] md:top-0 md:mt-[10rem] ml-[2.5rem] h-[100vh] md:h-auto'>
            <ul>
                <li className='mb-[3rem] rounded-full hover:shadow-[5px_5px_5px_#ff0909] px-3'>
                    <img src={afterhour} width={100}/>
                </li>
                <li className='mb-[3rem] rounded-full'>
                    <img src={dawn} width={100}/>
                </li>
                <li className='mb-[3rem] rounded-full mr-[2rem]'>
                    <img src={melancholy} width={100} />
                </li>
            </ul>
        </nav>
    </div>

  )
}

export default Sidebar