
export default function Testimonials() {
  return (
    <section className="bg-dark-900 text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 ">

              <h2 className='block text-center text-4xl lg:text-4xl font-semibold mb-12'>
        Our Success In Numbers
              </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 text-center">
          {/* Statistic 1 */}
          <div className="">
            <div className="text-5xl  font-normal text-yellow-400">10,000+</div>
            <p className="mt-2 text-lg">Happy Customers</p>
          </div>
          {/* Statistic 2 */}
          <div className="">
            <div className="text-5xl font-normal text-yellow-400">500+</div>
            <p className="mt-2 text-lg">Verified Listings</p>
          </div>
          {/* Statistic 3 */}
          <div className="">
            <div className="text-5xl font-normal text-yellow-400">20+</div>
            <p className="mt-2 text-lg">Years of Experience</p>
          </div>
          {/* Statistic 4 */}
          <div className="">
            <div className="text-5xl font-normal text-yellow-400">98%</div>
            <p className="mt-2 text-lg">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
