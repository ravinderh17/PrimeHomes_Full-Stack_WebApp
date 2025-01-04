import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaShare} from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";


export default function SubHeader() {

  const [copied, setCopied] = useState(false);

  return ( 
    <subheader className=' sticky w-full top-0 z-50 text-slate-200'>
        <div  className='flex justify-between items-center max-w-6xl lg:mx-36 p-3 '>
      <Link to = '/search' className='hover:underline hover:text-slate-200'>
          <span className='items-center gap-2 flex flex-wrap '>
          <IoIosArrowBack /> 
         
          Back to Search
          </span>
      </Link>
        <div className='cursor-pointer flex items-center gap-2 hover:text-slate-500'
             onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
            >
            <FaShare
              className='text-slate-500'
            /> 
           <span>Share</span>
            
          </div>
          {copied && (
            <p className='fixed top-[23%] right-[6%] z-10 rounded-md bg-slate-100 p-2 font-sans'>
              Link copied!
            </p>
          )}
        </div>
    </subheader>
  )
}
