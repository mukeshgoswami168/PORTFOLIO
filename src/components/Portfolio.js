import study from "../assets/study.jpg"
import blog from "../assets/blog.jpg"
import shop from "../assets/shop.jpg"

function Portfolio(){
    return(
        <div id="portfolio" className="w-full h-screen  bg-gradient-to-b from-gray-800 
        to-black text-white md:h-screen">
          <div className="w-max-screen-lg p-4 justify-center h-full flex flex-col mx-auto ">
            <div className="pb-8 ml-[170px]">
                <p className="text-4xl font-bold inline border-b-4 border-gray-200" >Portfolio</p>
                <p className="py-6 font-semibold">Chech out some of my work right here </p>
            </div>
            <div className="  grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                <div className="   shadow-md shadow-gray-600  rounded-lg">
                    <img src={study}  alt="" className="rounded-md w-[100%] h-[245px] duration-500 hover:scale-105"></img>
                    <div className=" flex items-center justify-center ">
                        <button className="w-1/2  font-semibold px-6 py-3  m-4 duration-200 hover:scale-105"><a href="https://study-new-hosting.vercel.app/" target="_blank">Demo</a> </button>
                        <button className="w-1/2 px-6 py-3 font-semibold  m-4 duration-200 hover:scale-105"><a href="https://github.com/mukeshgoswami168/StudyNew-Hosting" target="_blank">Code Here</a></button>
                    </div>
                </div>
                <div className="   shadow-md shadow-gray-600  rounded-lg">
                    <img src={blog}  alt="" className="rounded-md w-[100%] duration-500 hover:scale-105"></img>
                    <div className=" flex items-center justify-center ">
                        <button className="w-1/2 font-semibold px-6 py-3 m-4 duration-200 hover:scale-105"><a href="" target="-blank">Demo</a> </button>
                        <button className="w-1/2 font-semibold px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://github.com/mukeshgoswami168/MUKESH-BLOGS" target="_blank">Code Here</a></button>
                    </div>
                </div>
                <div className="   shadow-md shadow-gray-600  rounded-lg">
                    <img src={shop}  alt="" className="rounded-md w-[100%] duration-500 h-[245px] hover:scale-105"></img>
                    <div className=" flex items-center justify-center ">
                        <button className="w-1/2 font-semibold px-6 py-3 m-4 duration-200 hover:scale-105"><a href="https://shopping-app-lovat.vercel.app/" target="_blank">Demo</a> </button>
                        <button className="w-1/2 font-semibold px-6 py-3 m-4 duration-200 hover:scale-105"><a  href="https://github.com/mukeshgoswami168/Shopping-App" target="_blank">Code Here</a></button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
export default Portfolio