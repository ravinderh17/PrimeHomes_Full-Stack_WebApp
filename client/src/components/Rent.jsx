
import { useEffect, useState,lazy, Suspense } from 'react';

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
          <div className='flex flex-col justify-center '>
          <div className=''>
              <h1 className='text-2xl font-bold text-slate-600 font-sans mx-36 flex mt-16 mb-4 '>Newly Available Rentals</h1>
            </div>
            <div className='flex flex-wrap sm:gap-2 lg:gap-2 lg:mx-36 sm:mx-1 sm:mb-4 px-auto '>
              
                   <Suspense fallback={<div>Loading...</div>}>
                   {rentListings.map((listing) => (
                       <ListingItem listing={listing} key={listing._id} />
                   ))}
               </Suspense>
              
            </div>
          </div>
        )}
    </div>
  )
}
