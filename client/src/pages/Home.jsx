import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import "./Home.css";
import Hero from "../components/Hero/Hero";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  SwiperCore.use([Navigation]);

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

  return (
    <div>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Hero />
        </div>
      </div>

      {/* Swiper - visible on mid/sm screen */}
      <Swiper navigation>
        {offerListings.length > 0 && offerListings.map((listing) => (
          <SwiperSlide key={listing._id}>
            <div
              style={{
                background: `url(${listing.imageUrls[0]}) center no-repeat`,
                backgroundSize: 'cover',
              }}
              className='h-[300px] mx-auto mt-12 flex justify-center items-center lg:hidden'
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Listing results for offer, sale, and rent */}
      <div className='max-w-6xl lg:ml-32 md:mx-auto p-3 sm:mx-auto flex flex-col gap-3 mb-10 mt-8'>
        <span className='text-orange-600 font-sans font-bold text-3xl flex'>
          Popular Choices
        </span>

        {offerListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-bold text-slate-800 sm:mx-auto font-sans'>Latest Deals</h2>
              <Link className='text-sm text-blue-800 hover:underline' to='/search?offer=true'>Show more</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='mt-10 text-2xl font-bold text-slate-800 font-sans'>Newly Available Rentals</h2>
              <Link className='text-sm text-blue-800 hover:underline' to='/search?type=rent'>Show more</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='mt-10 text-2xl font-bold text-slate-800 font-sans'>Newly Available Properties for Sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to='/search?type=sale'>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
