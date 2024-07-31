import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

// Lazy load the MdLocationOn icon
const MdLocationOn = React.lazy(() => import('react-icons/md').then(module => ({ default: module.MdLocationOn })));

export default function ListingItem({ listing }) {
  const imageUrl = listing.imageUrls[0] || 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg';

  return (
    <div className="relative shadow-lg hover:shadow-xl transition-shadow overflow-hidden rounded-t-full  w-full sm:w-[260px]
    
    group
    ">
      <Link to={`/listing/${listing._id}`}>
        <LazyLoad height={320} offset={100}>
          <img
            src={imageUrl}
            alt="listing cover"
            className="w-full h-[320px] object-cover"
          />
        </LazyLoad>
        <div className="absolute bottom-0 left-0 w-full p-3  bg-slate-800 bg-opacity-50 text-white">
          <p className="truncate text-lg font-semibold">{listing.name}</p>
          <div className="flex items-center gap-1
          mt-2
          ">
            <Suspense fallback={<div className="h-4 w-4"></div>}>
              <MdLocationOn className="h-4 w-4 text-green-500 text-xs" />
            </Suspense>
            <p className="text-xs truncate">{listing.address}</p>
          </div>
          <div className=''>
          <p className="mt-6 flex justify-between mx-1 text-xs">
          <span className='uppercase text-slate-200'>
              price
            </span>
            ${listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-transparent text-slate-300 uppercase text-sm border-b-4 border-l-0 border-r-0 font-semibold py-2 border-b-slate-400">
            See Details
          </button>
        </div>
      </Link>
    </div>
  );
}
