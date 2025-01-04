
export default function Testimonials() {
  return (
    <section className="bg-dark-900 text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className='text-center text-3xl lg:text-4xl font-normal mb-12'>
                <span className='relative inline-block'>
                  <span className='border-b-8 border-slate-400 pb-1 font-normal text-4xl'>Our Success i</span>
                  <span className='absolute bottom-0 left-0 right-0 h-1' />
                </span>
                <span className='relative inline-block'>
                  <span className=' font-normal text-4xl'>n Numbers</span>
                </span>
              </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 text-center">
          {/* Statistic 1 */}
          <div className="hover:scale-105 transition transform duration-300">
            <div className="text-5xl cursor-pointer font-normal text-yellow-400">10,000+</div>
            <p className="mt-2 text-lg">Happy Customers</p>
          </div>
          {/* Statistic 2 */}
          <div className="hover:scale-105 transition transform duration-300">
            <div className="text-5xl cursor-pointer font-normal text-yellow-400">500+</div>
            <p className="mt-2 text-lg">Verified Listings</p>
          </div>
          {/* Statistic 3 */}
          <div className="hover:scale-105 transition transform duration-300">
            <div className="text-5xl cursor-pointer font-normal text-yellow-400">20+</div>
            <p className="mt-2 text-lg">Years of Experience</p>
          </div>
          {/* Statistic 4 */}
          <div className="hover:scale-105 transition transform duration-300">
            <div className="text-5xl font-normal cursor-pointer text-yellow-400">98%</div>
            <p className="mt-2 text-lg">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
