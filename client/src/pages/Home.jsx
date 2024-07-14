import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import bgImage from '../../public/bg.jpg'; // Adjust the path as necessary


export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
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
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div className=''>

      <div className='flex flex-row pt-4 lg:pt-16  max-w-7xl sm:ml-28 lg:mr-12 ml-1 justify-between sm:flex-row md:mx-auto sm:mx-auto '>

  <div className='lg:pt-20 flex justify-between items-center md:mx-auto '>
    <div>
      <h1 className=' text-black-700 pl-6 font-bold lg:text-6xl sm:mx-auto md:mx-auto text-2xl   md:text-4xl'>
        Discover your   <br /> <span className='text-slate-500 '>
        perfect </span>space.
      </h1>
      <div className=' text-black-700 text-xs sm:text-sm pt-7 pl-6 md:mx-auto'>
      Explore PrimeHomes, your ultimate destination <br />for finding the perfect place to live. 
       
      </div>
      
      <Link
  to={'/search'}
  className='text-xs sm:text-sm text-blue-800 lg:font-bold hover:underline md:mx-auto'
>
  <button className='flex justify-center p-3 sm:p-4 ml-5 sm:ml-6 sm:bg-black bg-slate-800 text-white rounded-3xl hover:opacity-80  mt-8 '>
    Let&apos;s get started...
  </button>
</Link>

    </div>
  
  </div> 
  <img src={bgImage} alt="" className='w-[95vh] h-[75vh] flex float-right pr-0 mr-0 md:mx-auto hidden lg:block' />
 

</div>

{/* Explore, Discover, Move In */}
      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                  
                }}
                className='h-[300px] mx-auto mt-12 flex justify-center items-center lg:hidden'
                key={listing._id}
              ></div>
              
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl lg:mx-auto md:mx-auto p-3 sm:mx-auto flex flex-col gap-8 my-10 '>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3  '>
              <h2 className='text-2xl font-semibold text-slate-900 sm:mx-auto'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more</Link>
            </div>
            <div className='flex flex-wrap gap-4 '>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-900'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4 '>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-900'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
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