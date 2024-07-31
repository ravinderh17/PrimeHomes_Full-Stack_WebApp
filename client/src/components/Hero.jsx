import "./css-file/Hero.css";
// import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../public/hero-image.png";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-black to-black text-white ">
      <div className="relative flex lg:flex-row md:flex-row sm:flex-col items-center lg:gap-0 gap-8 flex-col">

        {/* LEFT SIDE */}
        <div className="left flex flex-col justify-between justify-items-start  sm:mt-16 md:mt-18
        lg:ml-36  my-auto  ">
        <div className="flex flex-col justify-start lg:gap-0 gap-6">
        <h1 className="h1 font-semibold  lg:text-6xl sm:text-4xl lg:mx-0 lg:px-0 md:ml-12 sm:mx-4 mr-16 lg:pb-14">
          The exclusive houses with an individual approach to the client.
        </h1>
        
        <span
        className="max-w-lg text-lg text-slate-300 lg:mx-0 lg:px-0 md:ml-12 sm:mx-4 mr-24 "
        >Discover a world of luxury living with our exclusive collection of luxury homes. Browse our catalog of prestigious residence projects today.</span>
        
        <Link to={'/search'}>
        <button
        className="lime border border-l-0 border-t-0 border-r-0 flex border-b-lime-500  
        justify-start mx-auto ml-0 lg:ml-0 lg:pt-6
        md:ml-12 sm:ml-4 sm:mr:24 hover:text-opacity-85
         font-semibold text-lime-400 pb-2  border-4 items-center gap-2"
        >View all projects <FaLongArrowAltRight
        className="flex items-center "
        /></button>
          </Link> 
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
          className="image-container  mb-6"
        >
          <img src={heroImg} alt="houses" />
        </motion.div>
        
        </div>
      </div>
      </div>
  );
}
