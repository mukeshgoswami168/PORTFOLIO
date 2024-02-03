import HeroImage from "../assets/HeroImage.jpg"
import { RiArrowRightSLine } from "react-icons/ri";
import {Link} from "react-scroll"
function Home(){
    return(
        <div className=" w-full h-screen bg-gradient-to-b from-black via-black
        to-gray-800 gap-5">
           {/* <img src={HeroImage}></img> */}
           {/* <RiArrowRightSLine /> */}
           <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center 
           h-full px-4 md:flex-row w-[60%] ">
            <div className="flex flex-col justify-center h-full ">
                <h1 className="text-4xl sm:text-7xl font-bold
                text-white">
                    I'm a Full Stack Developer
                </h1>
                <p className="text-gray-500 py-4 max-w-rd font-semibold">
                    I'm a Fresher and looking 
                    for a Opportunities ,I love to 
                    work on web application technologies
                    like React ,Tailwind 
                    
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className=" group  font-semibold text-white px-6 py-3 my-2 flex w-fit items-center rounded-md
                    bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <RiArrowRightSLine  size={20} className="ml-1 "/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="w-[40%] ml-[40px] rounded-md ">
            <img src={HeroImage} alt="This is My Profile Photo" size={30} className="rounded-2xl mx-auto md:w-full w-4/3 ml-[60px]" ></img>
            </div>
           </div>
        </div>
    )
}

export default Home