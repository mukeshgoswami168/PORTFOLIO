import React from "react"
import {FaBars,FaTimes} from "react-icons/fa"
import {Link}  from "react-scroll"
import {useState} from "react"

function Navbar(){
     const[nav ,setNav]=useState(false);
    const links=[
        {
            id:1,
            link:"home",
         },
         {
            id:2,
            link:"about",
         },
         {
            id:3,
            link:"portfolio",
         },
         {
            id:4,
            link:"experience",
         },
         {
            id:5,
            link:"contact",
         },
     
    ]
    return (
        <div className="flex justify-between items-center w-full h-15
        text-white bg-black fixed px-4">
          <Link to="home" smooth={true} duration={500}>
         <h1  className="text-4xl font-signature ml-7 cursor-pointer ">MUKESH</h1>
         </Link>
          <ul className="hidden md:flex gap-6 mx-[150px] hover:scale-500">
            {
              links.map(({id,link})=>{
                return  (
                    <li key={id} className="cursor-pointer px-4 hover:scale-90 capitalize duration-300">
                       
                      <Link to={link} spy={true} 
                      smooth={true} duration={500}  className=" hover:scale-500 duration-200  hover:scale-900 font-semibold text-gray-500">
                      {link}
                      </Link>
                       
                    </li>
                )

                
})
            }
         </ul> 
         <div className="px-4 cursor-pointer z-10 pr-4 text-gray-500 md:hidden" onClick={()=>setNav(!nav)}>
          {
            nav?<FaTimes size={20}></FaTimes>: <FaBars size={20}></FaBars>
          } 
         </div>
         {nav && (
          <ul className="flex flex-col items-center justify-center absolut-top top-0 left-0 w-full h-screen
          bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {
              links.map(({id,link})=>{
                return  (
                    <li key={id} className="cursor-pointer px-4 hover:scale-90 capitalize duration-300">
                       
                      <Link  to={link} spy={true} 
                      smooth={true} duration={500}  className=" hover:scale-500 duration-200  hover:scale-900 font-semibold text-gray-500">
                      {link}
                      </Link>
                        
                    </li>
                )

                
})
            }

         </ul>
         )}
         

        </div>
    )
}
export default Navbar