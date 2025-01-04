import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListingItem from '../components/ListingItem';
import "../components/css-file/Home.css";
import Hero from "../components/Hero";
import { IoIosArrowForward } from "react-icons/io";
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUS';
import StatisticsSection from '../components/Statistics';
import RentSaleTab from '../components/ListingsTab';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=3');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  // Slick Slider settings
  const slickSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
      breakpoint: 780, // For medium screens (tablets and small desktops)
      settings: {
        slidesToShow: 2, // Show 3 slides at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
      }
    },
    {
      breakpoint: 1024, // For larger screens (desktops and above)
      settings: "unslick" // Disable slick slider for screens larger than 1024px
    }
  ]
  };

  return (
    <div className='overflow-hidden'>
      <div className="App ">
        <div>
          <div className="white-gradient " />
          <Hero />
        </div>
      </div>

      {/* Listing results for offer, sale, and rent */}
      <div className='list max-w-7xl mx-auto p-3 flex flex-col gap-3 my-4 items-center justify-center text-slate-200 pt-8'>

      <div> <StatisticsSection/> </div>

        {offerListings.length > 0 && (
          <div>
            <div className=' mb-4 flex flex-col  items-center  text-slate-200'>
              <h2 className='relative text-3xl font-semibold mt-8 mb-6'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-400 pb-1 font-normal text-4xl'>Featured D</span>
                  <span className='absolute bottom-0 left-0 right-0 h-1' />
                </span>
                <span className='relative inline-block'>
                  <span className=' font-normal text-4xl'>eals</span>
                </span>
              </h2>
            </div>
           
              <div className='fimg flex flex-wrap gap-6 items-center mx-auto justify-center'>
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
          </div>
        )}
        {/* Explore Properties */}
        <div> <RentSaleTab/> </div>
      </div>

       <div> <WhyChooseUs/> </div>

      <div> <Footer/> </div>
    </div>
  );
}