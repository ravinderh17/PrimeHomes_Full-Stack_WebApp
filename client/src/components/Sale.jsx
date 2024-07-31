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
          <div className='flex flex-col items-center justify-center mt-4 '>
            <div className=''>
            <h2 className='relative text-3xl font-semibold mx-auto text-black mt-6 mb-12'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-600 pb-1 '>
                    Residentials F
                  </span>
                  <span className='absolute bottom-0 left-0 right-0 h-1 ' />
                </span>
                <span className='relative inline-block'>
                  <span className='text-black'>
                   or Sale
                  </span>
                </span>
                </h2>
              </div>
            <div className='flex flex-wrap sm:gap-2 lg:gap-2 lg:mx-24 sm:mx-1 sm:mb-4 px-auto'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
    </div>
  )
}
