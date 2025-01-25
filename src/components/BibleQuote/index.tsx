'use client'
import Image from 'next/image'
import React from 'react'

const BibleQuote = () => {
  return (
    <div className='relative mt-10'>
      <div className='w-full h-[40vh]'>
        <Image fill src='/bible.avif' alt='placeholder' />
      </div>
      <div className='absolute top-0  left-0 right-0 bottom-0 bg-black/30'>
        <div className='grid grid-cols-1 grid-rows-2 h-full w-full md:grid-cols-2 md:grid-rows-1'>
          <div className='w-full flex-col flex  gap-3 justify-center items-center'>
            <h1 className='text-white font-extrabold text-5xl'>{'موضوع ماه'}</h1>
            <h2 className='text-white font-bold text-center text-3xl'>{'مستحکم‌شده توسط روح برای برنامه‌ی آزادسازی'}</h2>
          </div>
          <div className='w-full flex-col flex  gap-3 justify-center items-center'>
            <h1 className='text-white font-extrabold text-5xl'>{'آیات ماه:'}</h1>
            <h2 className='text-white font-bold text-center text-3xl'>{'اعمال 1:8، 1 پادشاهان 19:7-9، 1 قرنتیان 2:1-5، داوران 15:3-5'}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BibleQuote
