import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

// Lazy load the MdLocationOn icon
const MdLocationOn = React.lazy(() => import('react-icons/md').then(module => ({ default: module.MdLocationOn })));

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-lg hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[260px]'>
      <Link to={`/listing/${listing._id}`}>
        <LazyLoad height={320} offset={100}>
          <img
            src={
              listing.imageUrls[0] ||
              'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
            }
            alt='listing cover'
            className='h-[320px] sm:h-[180px] w-full object-cover hover:scale-105 transition-scale duration-300 rounded-sm'
          />
        </LazyLoad>
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <Suspense fallback={<div className='h-4 w-4'></div>}>
              <MdLocationOn className='h-4 w-4 text-green-700' />
            </Suspense>
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-500 mt-2 font-semibold'>
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className='font-bold text-xs'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
