import React, {useState, useEffect} from 'react'
import { dailydcountdown } from '../assets';
import { dailyDeals } from '../constants';

const DailyDeal = () => {
  return (
    <div>
      <h1 className="font-sans py-6 px-6 text-[22px] text-black">Daily <span className='font-extrabold'>De<span className="font-extrabold underline decoration-orange-600 decoration-2">als</span></span></h1>
      <div className='relative z-20'>
        <h1 className='font-sans absolute bottom-10 right-80 z-20 text-[28px] text-white'>Ending in <span className='text-[32px] font-bold'>21</span> Hours : <span className='text-[32px] font-bold'>07</span> Mins : <span className='text-[32px] font-bold'>33</span> Sec</h1>
        <img src={dailydcountdown} alt="banner" className='relative mx-6 rounded-xl overflow-hidden'/>
      </div>
      <div className='flex flex-row justify-around items-center py-6'>
      {dailyDeals.map((ddS, index) => (
        <div className='relative'>
          <img src={ddS.icon} alt={ddS.id} className='rounded-xl w-[320px] h-[400px]' />
          <p className='absolute w-40 h-6 z-20 bg-gray-500 top-8 text-[14px] text-white rounded-r-lg'>{ddS.superscript}</p>
          <p className='absolute h-6 w-40 z-20 top-72 left-16 text-center font-bold bg-yellow-300 text-[14px] text-black rounded-xl'>{ddS.caption}</p>
          <div className='absolute flex flex-row justify-between bottom-0 w-[320px] h-[100px] bg-slate-200 rounded-b-lg'>
            <div>
              <h2 className='font-sans text-left px-4 pt-4 cursor-pointer text-[16px] font-semibold hover:underline hover:decoration-orange-600 hover:decoration-2'>{ddS.title}</h2>
              <h2 className='px-4 font-sans text-left font-semibold'>{ddS.price}</h2>
              <h2 className='px-4 font-sans font-semibold'>{ddS.rating}</h2>
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

export default DailyDeal