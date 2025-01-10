
import { useEffect, useState,lazy, Suspense } from 'react';
import Footer from './Footer';

// Lazy load the ListingItem component
const ListingItem = lazy(() => import('../components/ListingItem'));

export default function Rent() {

    const [rentListings, setRentListings] = useState([]);

    useEffect(() => {
    const fetchRentListings = async () => {
        try {
          const res = await fetch('/api/listing/get?type=rent&limit=4');
          const data = await res.json();
          setRentListings(data);
        
        } catch (error) {
          console.log(error);
        }
      };

      fetchRentListings(); 
    }, []);
  return (
    <div>
          {rentListings && rentListings.length > 0 && (
          <div className='flex flex-col items-center justify-center mt-4 '>
          <div className='text-slate-100'>
          <h2 className='relative text-3xl font-semibold mx-auto  mt-6 mb-12'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-400 pb-1 font-semibold '>
                    Available R
                  </span>
                  <span className='absolute bottom-0 left-0 right-0 h-1 ' />
                </span>
                <span className='relative inline-block font-semibold '>
                  <span className='font-semibold '>
                    entals
                  </span>
                </span>
              </h2>
            </div>
            <div className='flex flex-wrap sm:gap-6 lg:gap-8 lg:mx-24 mx-24 mt-4 px-auto items-center '>
              
                   <Suspense fallback={<div>Loading...</div>}>
                   {rentListings.map((listing) => (
                       <ListingItem listing={listing} key={listing._id} />
                   ))}
               </Suspense>
              
            </div>
          </div>
        )}

        <div>
          <Footer/>
        </div>
    </div>
  )
}
