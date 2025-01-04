import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";

export default function MyListings() {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetchUserListings();
    }
  }, [currentUser]);

  const fetchUserListings = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/user/listings/${currentUser._id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      if (data.success === false) {
        console.error('Error fetching listings:', data.message);
        setLoading(false);
        return;
      }
      setUserListings(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching listings:', error.message);
      setLoading(false);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ProfileHeader className='text-slate-200 ' />
      <div className="flex flex-col p-3 pt-4 px-3 max-w-6xl mx-auto ">
        {loading ? (
            <div className="text-center py-8">
            <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : userListings && userListings.length > 0 ? (
          <div className='flex flex-col gap-3'>
          {userListings.map((listing) => (
            <Link
              key={listing._id}
              to={`/listing/${listing._id}`}
              className="block"
            >
              <div
                className='border rounded-lg p-3 flex justify-between items-center shadow-lg gap-4 hover:opacity-50 transition-opacity duration-400 cursor-pointer'
              >
                <img
                  src={listing.imageUrls[0]}
                  alt='listing cover'
                  className='h-28 w-36 object-cover'
                />
                <p className='font-semibold text-slate-200 hover:underline truncate flex-1'>
                  {listing.name}
                </p>
                <div className='flex flex-col items-center'>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the event from propagating to the Link
                      handleListingDelete(listing._id);
                    }}
                    className='text-red-400 font-semibold hover:underline uppercase'
                  >
                    Delete
                  </button>
                  <Link
                    to={`/update-listing/${listing._id}`}
                    onClick={(e) => e.stopPropagation()} // Prevent navigation by the parent Link
                  >
                    <button className='text-green-400 font-semibold hover:underline uppercase'>
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}

          </div>
        ) : (
          <div className="flex flex-col float-start gap-6">
            <p className='text-slate-200 mt-5 text-lg'>
              You haven&apos;t listed any property! Tap below to get started.
            </p>
          </div>
        )}
        <div className="flex px-auto mx-auto my-3">
          <Link
            className='flex px-auto ml-0 justify-center mx-auto border border-2 border-t-0 border-l-0 border-r-0 hover:border-b-opacity-50 text-slate-200 font-medium p-3 uppercase text-center hover:opacity-55'
            to={'/create-listing'}
          >
            Create New Listing
          </Link>
        </div>
      </div>
    </div>
  );
}
