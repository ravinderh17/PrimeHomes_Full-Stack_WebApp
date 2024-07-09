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
          <div className='flex flex-col items-center justify-center '>
            <div className=''>
              <h2 className='text-3xl font-semibold text-slate-700 text-center my-10'>Recent places for sale</h2>
                </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
    </div>
  )
}
