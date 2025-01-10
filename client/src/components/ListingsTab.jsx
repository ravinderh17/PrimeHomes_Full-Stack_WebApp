import { useState, useEffect } from "react";
import ListingItem from "./ListingItem";

export default function ListingsTab() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("rent");

  // States for listings
  const [rentListings, setRentListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [loading, setLoading] = useState(false); // State to show loading spinner

  // Fetch listings
  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true); // Start loading
      try {
        const rentRes = await fetch("/api/listing/get?type=rent&limit=4");
        const saleRes = await fetch("/api/listing/get?type=sale&limit=4");

        const rentData = await rentRes.json();
        const saleData = await saleRes.json();

        setRentListings(rentData);
        setSaleListings(saleData);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchListings();
  }, []);

  return (
    <section className="bg-dark-900 text-gray-100 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className='block sm:hidden text-center text-4xl lg:text-4xl font-normal my-10'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-400 pb-1 font-normal text-4xl'>Explore P</span>
                  <span className='absolute bottom-0 left-0 right-0 h-1' />
                </span>
                <span className='relative inline-block'>
                  <span className=' font-normal text-4xl'>roperties</span>
                </span>
              </h2>
       
              <h2 className='hidden sm:block text-center text-4xl lg:text-4xl font-semibold my-10'>
               Explore Properties
              </h2>

        {/* Tabs */}
        <div className="flex items-center mx-auto justify-center mb-8 ">
          <button
            className={`px-6 py-2 text-lg font-normal ${
              activeTab === "rent"
                ? "bg-white text-black"
                : "bg-gray-700 hover:bg-gray-600 transition-all duration-300"
            } rounded-l-md`}
            onClick={() => setActiveTab("rent")}
          >
            On Rent
          </button>
          <button
            className={`px-6 py-2 text-lg font-normal ${
              activeTab === "sale"
                ? "bg-white text-black"
                : "bg-gray-700 hover:bg-gray-600 transition-all duration-300"
            } rounded-r-md`}
            onClick={() => setActiveTab("sale")}
          >
            On Sale
          </button>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center py-8 ">
            <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        )}
        <div className=" flex flex-wrap ">
        {/* Properties Display */}
        {!loading && (
          <div className=" flex flex-wrap items-center mx-auto justify-center gap-2 ">
            {/* On Rent Listings */}
            {activeTab === "rent" &&
              rentListings.map((listing) => (
               <ListingItem listing={listing} key={listing._id}/>
              ))}

            {/* On Sale Listings */}
            {activeTab === "sale" &&
              saleListings.map((listing) => (
               <ListingItem listing={listing} key={listing._id}/>
              ))}
          </div>
        )}
        </div>
        {/* No Properties Found */}
        {!loading && activeTab === "rent" && rentListings.length === 0 && (
          <p className="text-center text-gray-400">No properties available for rent.</p>
        )}
        {!loading && activeTab === "sale" && saleListings.length === 0 && (
          <p className="text-center text-gray-400">No properties available for sale.</p>
        )}
      </div>
    </section>
  );
}
