import ListingItem from '../components/ListingItem';
import { useEffect, useState } from 'react';
export default function Sale() {

    const [saleListings, setSaleListings] = useState([]);
    useEffect(() => {
    const fetchSaleListings = async () => {
        try {
          const res = await fetch('/api/listing/get?type=sale&limit=4');
          const data = await res.json();
          setSaleListings(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSaleListings()
    }, []);
    
  return (
    <div>
            {saleListings && saleListings.length > 0 && (
          <div className='flex flex-col justify-center '>
            <div className=''>
              <h2 className='text-2xl font-bold text-slate-600 mx-36 font-sans flex mt-16 mb-4'>Newly Available Properties for Sale</h2>
              </div>
            <div className='flex flex-wrap sm:gap-2 lg:gap-2 lg:mx-36 sm:mx-1 sm:mb-4 px-auto'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
    </div>
  )
}
