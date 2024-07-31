import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListingItem from '../components/ListingItem';
import "../components/css-file/Home.css";
import Hero from "../components/Hero";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
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
        slidesToShow: 3, // Show 3 slides at a time
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
    <div>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Hero />
        </div>
      </div>

      {/* Listing results for offer, sale, and rent */}
      <div className='list max-w-7xl lg:mx-24 md:mx-auto p-3 sm:mx-8 flex flex-col gap-3 mb-10 mt-4'>
        {offerListings.length > 0 && (
          <div>
            <div className='mb-3 flex flex-col justify-center text-center items-center'>
              <h2 className='relative text-3xl font-semibold text-black mt-8 mb-6'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-600 pb-1'>Featured D</span>
                  <span className='absolute bottom-0 left-0 right-0 h-1' />
                </span>
                <span className='relative inline-block'>
                  <span className='text-black'>eals</span>
                </span>
              </h2>
            </div>
            <div className="hidden md:block">
              <div className='fimg flex flex-wrap gap-2'>
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
            <div className="block md:hidden">
              <Slider {...slickSettings}>
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </Slider>
            </div>
          </div>
        )}

        {/* Rental Properties */}
        {rentListings.length > 0 && (
          <div>
            <div className='my-3 flex items-center justify-start'>
              <h2 className='relative text-3xl font-semibold mx-auto text-black mt-10 mb-6 flex items-center'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-600 pb-1'>Available R</span>
                  <span className='absolute bottom-0 left-0 right-0 h-1' />
                </span>
                <span className='relative inline-block'>
                  <span className='text-black'>entals</span>
                </span>
                <Link className='text-xl ml-2 mt-1 text-slate-600 flex items-center' to='/search?type=rent'>
                  <IoIosArrowForward />
                </Link>
              </h2>
            </div>
            <div className="hidden lg:block">
              <div className='flex flex-wrap gap-2'>
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
            <div className="block lg:hidden">
              <Slider {...slickSettings}>
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </Slider>
            </div>
          </div>
        )}

        {saleListings.length > 0 && (
          <div>
            <div className='my-3 flex text-center'>
              <h2 className='relative text-3xl font-semibold mx-auto text-black mt-10 mb-8 flex items-center'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-600 pb-1'>Residentials F</span>
                  <span className='absolute bottom-0 left-0 right-0 h-1' />
                </span>
                <span className='relative inline-block'>
                  <span className='text-black'>or Sale</span>
                </span>
                <Link className='text-xl ml-2 mt-1 text-slate-600 flex items-center' to='/search?type=sale'>
                  <IoIosArrowForward
                    className='hover:text-black bg-white hover:bg-slate-500 hover:bg-opacity-20 rounded-full p-3'
                  />
                </Link>
              </h2>
            </div>
            <div className="hidden lg:block">
              <div className='flex flex-wrap gap-2'>
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
            <div className="block lg:hidden">
              <Slider {...slickSettings}>
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
