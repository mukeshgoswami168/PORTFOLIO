import "./App.css";
import Navbar from "./components/common/Navbar"
import Home from "./pages/Home"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience";
import Contact from "./components/Contact"
function App() {
  return (
    <div  className="flex flex-col bg-gradient-to-b from-black via-black
    to-gray-800">
     <Navbar></Navbar>
     
     <div className="">
     <Home></Home>
     </div>
     <About></About>
     <Portfolio></Portfolio>
     <Experience></Experience>
     <Contact>
     </Contact>
     <SocialLinks></SocialLinks>
    
    </div>
  );
}

export default App;
