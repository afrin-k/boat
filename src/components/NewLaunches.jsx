import React from 'react';
import { newLaunches } from '../constants';

const NewLaunches = () => {
  return (
    <div>
      <h1 className="font-sans py-6 px-6 text-[22px] text-black">New <span className='font-extrabold'>Launc<span className="font-extrabold underline decoration-orange-600 decoration-2">hes</span></span></h1>
      <div className='flex flex-row justify-around items-center py-6'>
      {newLaunches.map((newL, index) => (
        <div className='relative'>
          <img src={newL.icon} alt={newL.id} className='rounded-xl w-[320px] h-[400px]' />
          <p className='absolute w-40 h-6 z-20 bg-black top-8 text-[14px] text-white rounded-r-lg'>{newL.superscript}</p>
          <p className='absolute h-6 w-40 z-20 top-72 left-16 text-center font-bold bg-yellow-300 text-[14px] text-black rounded-xl'>{newL.caption}</p>
          <div className='absolute flex flex-row justify-between bottom-0 w-[320px] h-[100px] bg-slate-200 rounded-b-lg'>
            <div>
              <h2 className='font-sans text-left px-4 pt-4 cursor-pointer text-[16px] font-semibold hover:underline hover:decoration-orange-600 hover:decoration-2'>{newL.title}</h2>
              <h2 className='px-4 font-sans text-left font-semibold'>{newL.price}</h2>
              <h2 className='px-4 font-sans font-semibold'>{newL.rating}</h2>
            </div>
            <div className='flex justify-center items-center pr-4'>
              <button className="bg-slate-800 hover:bg-gray-700 text-white text-[16px] py-1 px-8 rounded-full">Add To Cart</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default NewLaunches