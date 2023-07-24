import { useState, useEffect, useRef } from "react";
import Humberger from "./Humberger";

const Navbar = ({addandremoveclass}) => {
  
  return (
   <nav className=' pt-14 text-lime-50 relative' >
    <ul className='flex items-center list-none absolute right-52'>
        <li className='m-3 font-mono text-xl font-extrabold'>Let's</li>
        <li className='m-3 font-mono text-xl font-extrabold'>Start</li>
        <li onClick={addandremoveclass} className='m-3   arrow font-mono text-xl font-extrabold'>{">"}</li>
   <Humberger/>
 
    </ul>
   </nav>
  )
}

export default Navbar