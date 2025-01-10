import { Link} from 'react-router-dom';

export default function ProfileHeader() {
  return ( 
    <div className='sticky bg-inherit text-white w-full top-0 z-50'>
        <div  className='flex justify-between items-center max-w-6xl   mx-auto p-3 mt-4 '>
        <ul className='flex gap-2 items-center justify-center text-slate-100 '>
          <Link to='/my-listings'>
            <li className=' sm:inline hover:opacity-90 lg:pr-4 pb-4 sm:pr-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 font-semibold'>
              My Listings
            </li>
          </Link>
          <Link to='/profile'>
            <li className=' sm:inline hover:opacity-90 lg:p-4 sm:p-3   hover:border-t-0 hover:border-l-0 hover:border-r-0 font-semibold'>
              Account
            </li>
          </Link>
        </ul>
        </div>
    </div>
  )
}
