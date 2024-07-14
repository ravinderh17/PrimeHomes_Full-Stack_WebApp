import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]); 
  
  return ( 
    <header className='shadow-sm'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold lg:text-lg text-xs flex flex-wrap'>
            <span className='text-slate-500'>Prime</span>
            <span className='text-slate-700'>Homes</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-white-500 border border-slate-300 px-2 py-1 lg:px-3 lg:py-2 my-auto rounded-3xl flex items-center hover:border-slate-400'
        >
          {/* SEARCHBAR */}
          <input
            type='text'
            placeholder='Search Here...'
            className='flex focus:outline-none lg:w-52 w-28'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <SearchIcon className='text-slate-500' />
          </button>
        </form>

        <ul className='flex lg:gap-4 gap-2'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:text-slate-500 hover:border-b-2 border-slate-700 lg:p-4 sm:p-2 lg:text-md'>
              Home
            </li>
          </Link>
          <Link to='/rent'>
            <li className='hidden sm:inline text-slate-700 hover:text-slate-500 hover:border-b-2 border-slate-700 lg:p-4 sm:p-2'>
              Rent
            </li>
          </Link>
          <Link to='/sale'>
            <li className='hidden sm:inline text-slate-700 hover:text-slate-500 hover:border-b-2 border-slate-700 lg:p-4 sm:p-2'>
              Sale
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:text-slate-500 hover:border-b-2 border-slate-700 lg:p-4 sm:p-2'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover sm:mr-2 flex items-center justify-center'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='sm:inline text-slate-700 hover:text-slate-500 hover:border-b-2 border-slate-700 lg:p-4 sm:p-2'>
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
