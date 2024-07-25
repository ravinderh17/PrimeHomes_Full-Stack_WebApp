import React, { Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from "react-router-dom";
import Aboutbg from "../../public/about (2).jpg";

// Lazy load icons
const IoHomeOutline = React.lazy(() => import('react-icons/io5').then(module => ({ default: module.IoHomeOutline })));
const IoLeafOutline = React.lazy(() => import('react-icons/io5').then(module => ({ default: module.IoLeafOutline })));
const IoTrophyOutline = React.lazy(() => import('react-icons/io5').then(module => ({ default: module.IoTrophyOutline })));
const GrSecure = React.lazy(() => import('react-icons/gr').then(module => ({ default: module.GrSecure })));

export default function About() {
  return (
    <div className="">
      <section className="container mx-auto pt-3 flex pl-16">
        <figure className="pt-20 h-[400vh] w-[300vh] ">
          <LazyLoad height={200} offset={100}>
            <img src={Aboutbg} alt="House interior" className="w-full" />
          </LazyLoad>
        </figure>

        <div className="ml-20 pt-32">
          <p className="p-2 bg-slate-100 flex justify-center items-center w-32 rounded-3xl mb-3 text-slate-700">About Us</p>

          <h1 className="text-5xl font-bold text-slate-800 mb-3">Your Premier Real Estate Marketplace.</h1>
          <span className="text-5xl font-bold text-slate-800">Estate Marketplace.</span>
         
          <p className="mt-6 text-md text-slate-600 mb-4 pl-1 pr-32 text-justify">
            Our platform offers a curated selection of top-quality properties for rent and sale, making your search for the perfect home smooth and satisfying.
          </p>

          <div className="flex flex-wrap mr-24 justify-between mt-12 ml-2 text-slate-700 font-medium">
            <ul className="flex flex-col">
              <li className="flex justify-center items-center gap-4">
                <Suspense fallback={<div>Loading...</div>}>
                  <IoHomeOutline /> Smart Home Design
                </Suspense>
              </li>
              <li className="flex justify-center items-center gap-4 pt-3">
                <Suspense fallback={<div>Loading...</div>}>
                  <IoLeafOutline /> Exceptional Lifestyle
                </Suspense>
              </li>
            </ul>
           
            <ul className="flex flex-col">
              <li className="flex justify-center items-center gap-4">
                <Suspense fallback={<div>Loading...</div>}>
                  <IoTrophyOutline /> Beautiful Scene Around
                </Suspense>
              </li>
              <li className="pt-3 flex justify-center items-center gap-4">
                <Suspense fallback={<div>Loading...</div>}>
                  <GrSecure /> Complete 24/7 Security
                </Suspense>
              </li>
            </ul>
          </div>

          <p className="text-slate-700 -4 pr-32 mt-12 border border-l-slate-700 text-justify border-l-4 border-r-0 border-t-0 border-b-0 pl-2">
            At PrimeHomes, we strive to make your property search as easy and enjoyable as possible. Whether you&apos;re looking for a place to rent or buy, our comprehensive listings and expert guidance will help you find your perfect space.
          </p>

          <Link to={'/search'}>
            <button className="bg-slate-800 text-white font-md px-6 py-3 rounded-3xl inline-block hover:opacity-80 transition duration-300 mt-16">
              Explore Listings
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
