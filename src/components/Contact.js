

function Contact(){
    return(
        <div  className=" w-full  h-screen  bg-gradient-to-b from-gray-800 
        to-black text-white p-4">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
            <div className="pb-8 mt-12">
                <p className="text-4xl  text-white font-bold inline border-b-4 boredr-gray-900">
                     Contact
                </p>
                <p className="py-6 font-semibold">Submit the form below to get in touch  with me</p>
            </div>
            <div className="flex  justify-center items-center w-[50%]">
                <form action="https://getform.io/f/f2df6514-7b61-4cd9-b78b-1ef86a69fe34" method="POST"
                className="flex flex-col w-full "
            
               ><input type="text" name="name" placeholder="Enter your Name Here " className="p-2   
               bg-transparent border-2 rounded-md text-white  focus:outline-none"></input>
               <input type="text" name="email" placeholder="Enter your Email Here " className="p-2 my-4  
               bg-transparent border-2 rounded-md text-white focus:outline-none"></input>
               <textarea name="message" rows="10" placeholder="Enter your Message Here " className="p-2   
               bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
               <button className="text-white font-semibold bg-gradient-to-b  from-cyan-500 to-blue-500 px-4 py-2 mx-auto mb-2 my-4 flex flex-col
               items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
                </form>
            </div>
          </div>
        </div>
    )
}
export default Contact