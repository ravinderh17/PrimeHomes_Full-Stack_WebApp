import { Link} from 'react-router-dom';

export default function ProfileHeader() {
  return ( 
    <div className='sticky shadow-slate-200 shadow-sm w-full top-0 z-50'>
        <div  className='flex justify-between items-center max-w-6xl bg-white mx-auto p-3'>
        <ul className='flex gap-2 items-center justify-center'>
          <Link to='/my-listings'>
            <li className=' sm:inline text-slate-700 hover:text-slate-500 hover:border border-y-slate-700 lg:pr-4 pb-4 sm:pr-2 hover:border-t-0 hover:border-l-0 hover:border-r-0'>
              My Listings
            </li>
          </Link>
          <Link to='/profile'>
            <li className=' sm:inline text-slate-700 hover:text-slate-500 hover:border border-y-slate-700 lg:p-4 sm:p-3   hover:border-t-0 hover:border-l-0 hover:border-r-0 '>
              Account
            </li>
          </Link>
        </ul>
        </div>
    </div>
  )
}
