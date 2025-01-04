import "./css-file/Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../public/hero-image.png";

export default function Hero() {
  return (
    <div className=" items-center flex justify-between mt-12 lg:mt-8">
          {/* <div className="bg-gradient-to-r from-black to-black text-white items-center flex justify-between"> */}
      <div className="container relative max-w-7xl flex lg:flex-row flex-col mx-auto gap-4 lg:mt-0 ">
        {/* LEFT SIDE */}
        <div className="left flex flex-col justify-between justify-items-start  sm:mt-16 md:mt-18
        lg:ml-36 mx-6 ml-12 my-auto  ">
        <div className="flex flex-col justify-start lg:gap-0 gap-6 text-slate-100 ">
        <h1 className="h1 font-semibold text-5xl  lg:text-6xl lg:mx-0 lg:px-0 md:ml-12 sm:mx-4 mr-16 lg:pb-14">
        Luxury Homes Crafted for Your
        <span className="bg-gradient-to-r from-lime-300 to-pink-500 bg-clip-text text-transparent font-semibold  lg:text-6xl text-5xl ml-3 ">Unique Lifestyle</span>
        </h1>
        
        <span
        className="max-w-lg text-lg text-slate-300 lg:mx-0 lg:px-0 md:ml-12 font-normal sm:mx-4 mr-24 text-pretty"
        >Discover a curated collection of elegant properties that redefine comfort and sophistication.</span>
        <div className="flex  ">
        <Link to={'/search'}>

      <button type="button" className="text-slate-100 hover:text-black border border-slate-100 hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium text-sm px-5 py-2.5 text-center me-2  dark:border-white dark:text-black dark:hover:text-black dark:hover:bg-white dark:focus:ring-white mt-8 rounded-sm border-x-2 border-y-2 transition-all duration-500">Explore Properties</button>  
          </Link> 
          <Link to={'/create-listing'}>

<button type="button" className="text-slate-100 hover:text-black border border-slate-100 hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white dark:text-black dark:hover:text-black dark:hover:bg-white dark:focus:ring-white mt-8 rounded-sm border-x-2 border-y-2 transition-all duration-500">List your Property</button>  
    </Link> 
    </div>
        </div>
        </div>
       

        {/* RIGHT IMG SIDE hidden md:block */}
        <div className="right lg:mr-32 lg:mt-10 sm:mt-8 md:mt-4 md:mr-6 lg:ml-0  
        mb-6
        ">
        
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          className="image-container hidden lg:block mb-6"
        >
          <img src={heroImg} alt="houses" className="drop-shadow-2xl shadow-slate-200"/>
        </motion.div>
        
        </div>
      </div>
      </div>
  );
}
