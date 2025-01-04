import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import '../components/css-file/Search.css'
import Footer from '../components/Footer';

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
    type: 'all',
    parking: false,
    furnished: false,
    offer: false,
    sort: 'created_at',
    order: 'desc',
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const parkingFromUrl = urlParams.get('parking');
    const furnishedFromUrl = urlParams.get('furnished');
    const offerFromUrl = urlParams.get('offer');
    const sortFromUrl = urlParams.get('sort');
    const orderFromUrl = urlParams.get('order');

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || '',
        type: typeFromUrl || 'all',
        parking: parkingFromUrl === 'true' ? true : false,
        furnished: furnishedFromUrl === 'true' ? true : false,
        offer: offerFromUrl === 'true' ? true : false,
        sort: sortFromUrl || 'created_at',
        order: orderFromUrl || 'desc',
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === 'all' ||
      e.target.id === 'rent' ||
      e.target.id === 'sale'
    ) {
      setSidebardata({ ...sidebardata, type: e.target.id });
    }

    if (e.target.id === 'searchTerm') {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }

    if (
      e.target.id === 'parking' ||
      e.target.id === 'furnished' ||
      e.target.id === 'offer'
    ) {
      setSidebardata({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === 'true' ? true : false,
      });
    }

    if (e.target.id === 'sort_order') {
      const sort = e.target.value.split('_')[0] || 'created_at';

      const order = e.target.value.split('_')[1] || 'desc';

      setSidebardata({ ...sidebardata, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', sidebardata.searchTerm);
    urlParams.set('type', sidebardata.type);
    urlParams.set('parking', sidebardata.parking);
    urlParams.set('furnished', sidebardata.furnished);
    urlParams.set('offer', sidebardata.offer);
    urlParams.set('sort', sidebardata.sort);
    urlParams.set('order', sidebardata.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const startIndex = numberOfListings;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/listing/get?${searchQuery}`);
    const data = await res.json();
    if (data.length < 9) {
      setShowMore(false);
    }
    setListings([...listings, ...data]);
  };
  return (
    <div className='flex flex-col md:flex-row my-2 mx-auto items-center justify-between gap-2 max-w-7xl'>
      <div className='p-7 pt-0 border-b-2 md:min-h-screen  flex-3 mt-0 text-slate-100  mx-auto my-auto'>
        <form onSubmit={handleSubmit} className='
        searchform
        flex flex-col gap-4  lg:max-w-64 pl-4 lg:pr-4 border border-l-slate-100 border-r-slate-100 border-2 border-b-0 border-t-0'>
          <div className='flex items-center justify-center '>
            <input
              type='text'
              id='searchTerm'
              placeholder='Search Keywords...'
              className='border rounded-lg p-2.5 mr-4 pl-6 w-full bg-transparent'
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className='
          type
          flex gap-2 flex-wrap md:flex-col lg:flex-col'>
            <label className='font-semibold'>Type:</label>
            <div className='rent flex gap-2'>
              <input
                type='checkbox'
                id='rent'
                className='w-5 cursor-pointer'
                onChange={handleChange}
                checked={sidebardata.type === 'rent'}
              />
              <span>Rent</span>
            </div>
            <div className='sale flex gap-2'>
              <input
                type='checkbox'
                id='sale'
                className='w-5 cursor-pointer'
                onChange={handleChange}
                checked={sidebardata.type === 'sale'}
              />
              <span>Sale</span>
            </div>
            <div className='
            offer flex gap-2'>
              <input
                type='checkbox'
                id='offer'
                className='w-5 cursor-pointer'
                onChange={handleChange}
                checked={sidebardata.offer}
              />
              <span>Offer</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='all'
                className='w-5 cursor-pointer'
                onChange={handleChange}
                checked={sidebardata.type === 'all'}
              />
              <span>Rent & Sale</span>
            </div>
          </div>
          <div className='flex md:flex-col lg:flex-col gap-2 flex-wrap '>
            <label className='font-semibold '>Amenities:</label>
            <div className='parking flex gap-2 '>
              <input
                type='checkbox'
                id='parking'
                className='w-5 cursor-pointer'
                onChange={handleChange}
                checked={sidebardata.parking}
              />
              <span>Parking</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='furnished'
                className='w-5 cursor-pointer'
                onChange={handleChange}
                checked={sidebardata.furnished}
              />
              <span>Furnished</span>
            </div>
          </div>
          <div className='flex md:flex-col lg:flex-col gap-2'>
            <label className='font-semibold flex items-center justify-center '>Sort:</label>
            <select
              onChange={handleChange}
              defaultValue={'created_at_desc'}
              id='sort_order'
              className='border rounded-lg p-1.5 px-auto  cursor-pointer outline-none
              sort bg-transparent
              '
            >
              <option 
              className='bg-[#121d1c] text-slate-100'
              value='regularPrice_desc'>Price high to low</option>
              <option 
              className='bg-[#121d1c] text-slate-100'
              value='regularPrice_asc'>Price low to hight</option>
              <option className='bg-[#121d1c] text-slate-100'
              
              value='createdAt_desc'>Latest</option>
              <option className='bg-[#121d1c] text-slate-100' value='createdAt_asc'>Oldest</option>
            </select>
          </div>
          <button className='bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-85 text-sm '>
           Search
          </button>
          </form>
          </div>

      {/* DISPLAYING SEARCH RESULTS 
          IF NO LISTING - NOT FOUND MSG
          IF FETCHING - DISPLAY LOADING MSG INITIALLY
          THEN MAP OVER THE LISTINGS NEEDED AND SHOW LISTINGS IN LISTINGCARD
          IMPLEMENT PAGINATION - LIMIT SEARCH RESULTS TO (e.g. 9) 
          SHOWMORE- TRIGGER SHOW-MORE FUNCTION
      */}

      <div className='result flex-1 mt-0 mx-auto  justify-start flex flex-col min-h-screen align-top '>
        <h1 className='text-2xl font-semibold text-slate-100 text-left flex '>
          Listing results:
        </h1>
        <div className='pt-3 my-0 flex flex-wrap gap-3 '>
          {!loading && listings.length === 0 && (
            <p className='text-xl text-slate-700'>No listing found!</p>
          )}
        {loading && (
          <div className="text-center flex items-center justify-center mx-auto py-32">
            <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        )}

          {!loading &&
            listings &&
            listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} 
           
              />
            ))}

          {showMore && (
            <button
              onClick={onShowMoreClick}
              className='text-green-700 hover:underline p-7 text-center w-full'
            >
              Show more
            </button>
          )}
        </div>
        <div>
                <Footer/>
              </div>
      </div>
 
    </div>
  );
}