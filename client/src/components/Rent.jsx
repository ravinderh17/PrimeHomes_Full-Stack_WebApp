import ListingItem from '../components/ListingItem';
import { useEffect, useState } from 'react';
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
          <div className='flex flex-col items-center justify-center '>
            <div className=''>
              <h1 className='text-3xl font-semibold text-slate-700 text-center my-10'>Recent places for rent</h1>
            </div>
            <div className='flex flex-wrap gap-4 '>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
    </div>
  )
}
