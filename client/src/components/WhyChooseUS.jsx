
export default function WhyChooseUs() {
  return (
        <section className="text-slate-100 pb-16 ">
          <div className="container mx-auto px-4 text-center flex flex-col items-center">
            {/* Section Header */}
            <h2 className='text-4xl font-normal  mb-6'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-400 pb-1 font-normal text-4xl'>Why C</span>
                  <span className='absolute bottom-0 left-0 right-0 h-1' />
                </span>
                <span className='relative inline-block'>
                  <span className=' font-normal text-4xl'>hoose Us</span>
                </span>
              </h2>
       
            <p className="mb-12 text-lg max-w-xl">
              Discover what makes us stand out from the competition. Your dream property journey begins here.
            </p>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-transparent shadow-lg rounded-lg p-6 border border-slate-500 hover:scale-105 transition transform duration-300 cursor-pointer">
                <div className="flex justify-center items-center bg-blue-200 w-16 h-16 rounded-full mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h11M9 21V3m-6 7a7 7 0 1114 0v4a7 7 0 01-14 0v-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
                <p className=" font-normal">
                  All properties are verified to ensure trust and authenticity for your peace of mind.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-transparent shadow-lg rounded-lg p-6 border border-slate-500 hover:scale-105 transition transform duration-300 cursor-pointer">
                <div className="flex justify-center items-center bg-green-100 w-16 h-16 rounded-full mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Financing Options</h3>
                <p className="font-normal">
                  We offer a range of financing solutions to make property ownership easier for you.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-transparent shadow-lg rounded-lg p-6 border border-slate-500  hover:scale-105 transition transform duration-300 cursor-pointer">
                <div className="flex justify-center items-center bg-yellow-100 w-16 h-16 rounded-full mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h11M9 21V3m-6 7a7 7 0 1114 0v4a7 7 0 01-14 0v-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="font-normal">
                  Our team of experts is available 24/7 to guide you at every step of the process.
                </p>
              </div>
            </div>
          </div>
        </section>
      )
}
