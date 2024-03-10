import React from 'react';
import { logo } from "../assets";
import { navLinks } from "../constants";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <nav>
        <div className='bg-gray-200 h-8 flex justify-center items-center'>
            <a>
              <p className='text-black text-sm font-sans'>Light up your beats with 20W RMS Sound. <span className='font-bold'>Stone Spinx Pro</span> is out now! <span className='font-bold'>Grab @ ₹2999 👆</span></p>
            </a>
        </div>
      <div className='container bg-white mx-auto flex justify-around items-center'>
        <div className='flex items-center'>
          <img src={logo} alt='boAt' className=' w-[65%] h-[65%] p-4' />
        </div>
        <div className='flex'>
            <ul className="list-none flex items-center">
                {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-sans mx-4 cursor-pointer text-[18px] text-black hover:font-semibold hover:underline hover:decoration-orange-600 hover:decoration-2`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
                ))}
            </ul>
        </div>
        <div className='flex relative'>
            <div className='absolute left-8 top-2.5'>
            <IoSearch/>
            </div>
        <button className="bg-gray-200 text-gray-500 text-[17px] py-1.5 px-20 rounded-full hover:cursor-text duration-300 flex justify-start items-center">
            Search "Speakers"
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;