import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
function SocialLinks(){
    const links=[
        {
            id:1,
            child:(
                <>LinkedIn <FaLinkedin size={25}></FaLinkedin></>
            ),
            href:"https://www.linkedin.com/in/mukesh-goswami-b55964213/",
           
        },
        {
            id:2,
            child:(
                <>GitHub <FaGithub size={25}></FaGithub></>
            ),
            href:"https://github.com/mukeshgoswami168",
           
        },
        {
            id:3,
            child:(
                <>Mail <HiOutlineMail size={25}></HiOutlineMail></>
            ),
            href:"mailto: mukeshgoswami168@gmail.com",
           
        },
        {
            id:4,
            child:(
                <>Resume <BsFillPersonLinesFill size={25}></BsFillPersonLinesFill></>
            ),
            href:"/MUKKUFINALRESUME.pdf.pdf",
            download:true
            
        },
    ]
    return(
        <div className="hidden lg:flex flex-col top-[40%] left-0 fixed">
         <ul>
            {links.map(({child,id,href,download})=>(
                     <li  key={id} className="flex justify-between items-center w-40 h-10 
                px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-md  duration-300 bg-gray-500">
                    <a href={href} className=" flex justify-between items-center w-full text-white  font-semibold"
                    download={download}
                    target="_blank"
                    >
                        {child}
                    </a>
                </li>
    )
            )
                 }
         </ul>
        </div>
    )
}
export default SocialLinks