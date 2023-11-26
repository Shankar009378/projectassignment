"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Banner = () => {
  const [page, setPage] = useState<number>(1);


  useEffect(() => {
    let int = setInterval(()=>{
      setPage(prev => ((prev + 1) >= 5 ? 1 : prev+1));
    }, 8000);

    return () => clearInterval(int);
  },[]);

  const handlePrevPage = () => {
    setPage(prev => ((prev - 1) <= 0 ? 4 : prev-1));
  }

  const handleNextPage = () => {
    console.log('next')
    setPage(prev => ((prev + 1) >= 5 ? 1 : prev+1));
  }


  return (
    <div className='relative flex h-[calc(85vh-70px)] w-screen flex-col justify-center items-center'>

      <div className='absolute w-full h-full'>

        <Image className='w-full h-full object-cover object-center' sizes='100vw' fill alt='Image' src={`/assets/image${page}.png`} />

        <div className='absolute bottom-8 left-10 py-3 px-6'>

        </div>

      </div>

      <div onClick={handlePrevPage} className='absolute z-10 bottom-2/2 left-4 text-4xl font-semibold'>
        <span className='inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-white'><FaCircleArrowLeft /></span>
      </div>

      <div onClick={handleNextPage} className='absolute z-10 bottom-2/2 right-4 text-4xl font-semibold'>
        <span className='inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-white'><FaCircleArrowRight /></span>
      </div>
    </div>
  )
}

export default Banner