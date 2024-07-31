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
    <header className='sticky shadow-sm bg-black '>
      <div className='lg:mx-32 md:mx-8 sm:mx-3 flex justify-between items-center max-w-6xl my-auto p-3 relative '>
        <Link to='/'>
          <h1 className='font-semibold  relative my-auto text-md flex flex-wrap items-center'>
            <span className='text-slate-400 font-sans mr-3'>PrimeEstate</span>
          </h1>
        </Link>
         <form
          onSubmit={handleSubmit}
          className= 'flex'
        >
          {/* SEARCHBAR  rounded-r-full pr-3*/}
          <div className='flex '>
         <input 
            type='search'
            placeholder='Search Here...'
            className='flex  py-1.5 px-6 bg-transparent border-2 border-r-0 border-slate-600 rounded-l-full focus:outline-none lg:w-52 w-36 text-wrap  flex-wrap text-slate-300 text-sm '
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='p-1.5 pr-3 border border-l-0 border-2 border-slate-600 rounded-r-full'>
            <SearchIcon className='text-slate-500 font-sans hover:opacity-90' />
          </button>
          </div>
        </form> 

        <ul className='flex lg:gap-4 gap-2 
        items-center 
        '>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-300 hover:opacity-85 lg:p-4 sm:p-2 font-sans '>
              Home
            </li>
          </Link>
          <Link to='/rent'>
            <li className='hidden sm:inline text-slate-300 hover:opacity-85 lg:p-4 sm:p-2 font-sans'>
              Rent
            </li>
          </Link>
          <Link to='/sale'>
            <li className='hidden sm:inline text-slate-300 hover:opacity-85 lg:p-4 sm:p-2 font-sans'>
              Sale
            </li>
          </Link>
          {/* <Link to='/about'>
            <li className='hidden sm:inline text-slate-300 hover:opacity-85 lg:p-4 sm:p-2 font-sans'>
              About
            </li>
          </Link> */}
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover sm:mr-2 flex items-center justify-center font-sans'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <button className=' sm:inline text-slate-300 hover:opacity-85 lg:p-4 sm:p-1 font-sans text-wrap'>
                Sign in
              </button>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
