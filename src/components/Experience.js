import html from "../assets/html.png"
import react from "../assets/react.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import javascript from "../assets/javascript.png"


function Experience(){

    const experiences=[
        {
           id:1,
           src:html,
           title:"HTML",
           style:"shadow-orange-500",
        },
        {
            id:2,
           src:css,
           title:"CSS",
           style:"shadow-blue-500",
        },
        {
            id:3,
           src:javascript,
           title:"JAVASCRIPT",
           style:"shadow-yellow-500",
        },
        {
            id:4,
            src:react,
            title:"REACT",
            style:"shadow-blue-600",
        },
        {
            id:5,
           src:tailwind,
           title:"TAILWIND",
           style:"shadow-sky-400",
        },
    ]
    return (
        <div id="experience" className="w-full h-screen  bg-gradient-to-b from-gray-800 
        to-black text-white">
           <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl  text-white font-bold inline border-b-4 boredr-gray-900">Experience</p>
                <p className="py-6 font-semibold text-white">This are the technologies I've worked with</p>
            </div>

            <div className=" w-full grid  grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {
                    experiences.map(({id,src,title,style})=>(
                       
                             <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                    <img src={src} className="mx-auto w-20"></img>
                    <p className="mt-4 font-semibold">{title}</p>
                </div>
                       
                    ))
                }
                
            </div>
           </div>
        </div>
    )
}

export default Experience