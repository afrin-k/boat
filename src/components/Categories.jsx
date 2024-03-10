import React from 'react';
import { categories } from '../constants';

const Categories = () => {
  return (
    <div className='py-4'>
      <h1 className="font-sans py-6 px-6 text-[22px] text-black">Shop By <span className='font-extrabold'>Categor<span className="font-extrabold underline decoration-orange-600 decoration-2">ies</span></span></h1>
      <ul className="list-none flex flex-row justify-evenly items-center">
                {categories.map((cat, index) => (
                  <div className='h-35 w-35 flex flex-col justify-center items-center'>
                    <li key={cat.id} className={`px-4 py-4`}>
                      <a href={`#${cat.id}`}>
                        <img src={cat.icon} alt={cat.title} className="rounded-full w-20 h-20 p-2"/>
                      </a>
                    </li>
                    <div className='h-20 w-20'>
                      <h2 className="font-sans text-center cursor-pointer text-[16px] text-black hover:font-semibold hover:underline hover:decoration-orange-600 hover:decoration-2">{cat.title}</h2>
                    </div>
                  </div>
                ))}
            </ul>
    </div>
  )
}

export default Categories