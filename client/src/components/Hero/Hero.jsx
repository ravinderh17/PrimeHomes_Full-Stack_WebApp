import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../../public/hero-image.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row pt-3 sm:pt-16 w-full  pb-12 mx-auto sm:justify-between  md:mx-auto sm:mx-auto  pt-12 sm:pl-0 
    bg-gradient-to-r from-black to-black 
    ">
      {/* left side */}
      <div className="lg:pt-4 flex flex-col justify-start items-start md:mx-auto ">
        
        <h1 className="text-white font-bold lg:text-6xl text-2xl md:text-4xl font-sans">
          Discover your <br /> <span className="text-white">perfect </span>space.
        </h1>
        
        <div className="text-slate-300 text-xs sm:text-sm pt-10">
          Explore PrimeHomes, your ultimate destination <br /> for finding the perfect place to live.
        </div>

        <Link to="/search" className="text-xs sm:text-sm lg:font-bold hover:underline
        
        ">
  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
  md:mt-20 mt-8
  ">
    Let&apos;s get started...
  </button>
</Link>


        <div className="flex flex-row gap-4 items-center  sm:gap-10 pt-16 pb-8">
          <div className="flex flex-col items-center mr-4">
            <span className="font-medium text-white text-2xl ">
              <CountUp start={8800} end={9000} duration={4} /> <span className="text-orange-500">+</span>
            </span>
            <span className="secondaryText">Premium Product</span>
          </div>

          <div className="flex flex-col items-center mr-4">
            <span className="font-medium text-white text-2xl ">
              <CountUp start={1950} end={2000} duration={4} /> <span
              className="text-orange-500">+</span>
            </span>
            <span className="secondaryText">Happy Customer</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-medium text-white text-2xl ">
              <CountUp end={28} /> <span className="text-orange-500">+</span>
            </span>
            <span className="secondaryText">Awards Winning</span>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="lg:pr-12">
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          className="image-container"
        >
          <img src={heroImg} alt="houses" />
        </motion.div>
      </div>
    </div>
  );
}
