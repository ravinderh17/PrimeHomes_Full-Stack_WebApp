import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
    <footer className="w-full py-4 text-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <a href="" className="flex justify-center ">
                </a>
                    <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                        <li>
                             <Link to={'/search'}><a className="hover:opacity-80">Properties</a>
                             </Link></li>
                        <li> <Link to={'/rent'}><a className="  hover:opacity-80">Rent</a></Link></li>
                        <li> <Link to={'/sale'}><a className=" hover:opacity-80">Sale</a></Link></li>
                        {/* <li>  <Link to={'/about'}><a  className=" hover:opacity-80">About</a></Link></li>
                        <li> <Link to={'/contact'}><a className=" hover:opacity-80">Contact</a></Link></li> */}
                    </ul>

                    <span className="text-lg text-center block">©<a href="https://pagedone.io/">primehomes</a> 2024, All rights reserved.</span>
            </div>
        </div>
    </footer>
                                            
    </div>
  )
}
