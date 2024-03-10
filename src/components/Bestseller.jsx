import React, {useState} from 'react';
import { bestSellers } from '../constants';

const Bestseller = () => {
  const [isHovered, setIsHovered] = useState(true);
  return (
    <div>
      <h1 className="font-sans py-6 px-6 text-[22px] text-black">Explore <span className='font-extrabold'>Bestselle<span className="font-extrabold underline decoration-orange-600 decoration-2">rs</span></span></h1>
      <div className='flex flex-row justify-around items-center '>
      {bestSellers.map((bestS, index) => (
        <video src={bestS.link} type="video/mp4" width={320} height={240} autoPlay loop muted />))}
      </div>
      <div className='py-4 flex flex-row justify-around items-center'>
      {bestSellers.map((bestS, index) => (
        <div className='h-10 w-40'>
          <a href='/'>
            <h2 className='font-medium text-center text-[18px] hover:font-bold'>{bestS.title}</h2>
          </a>
      </div>
        
      ))}
      </div>
    </div>
  )
}

export default Bestseller