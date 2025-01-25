'use client'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-primary py-6'>
      <div className='container mx-auto py-4 justify-between items-center w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='w-full flex items-center'>
          <Image src={'/logo.avif'} width={100} height={100} alt='' className='min-w-[100px] max-w-[100px] max-h-[100px]' />
          <div className='text-[10px] font-light h-full justify-between flex flex-col gap-2'>
            <div className='flex gap-2'>
              <p>Email:</p>
              <p>piwc.aurora@pentecost.com</p>
            </div>
            <div className='flex gap-2'>
              <p>Phone:</p>
              <p>416-726-1007</p>
            </div>
            <div className='flex gap-2'>
              <p>Location:</p>
              <p>390 Industrial PKWay, South Aurora ON L4G 3VF</p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between items-center px-8 text-[10px] font-light'>
          <div className='flex flex-col gap-1'>
            <h2 className='font-extrabold'>{'دسترسی سریع'}</h2>
            <p>{'درباره ما'}</p>
            <p>{'اعضای تیم ما'}</p>
            <p>{'خدمات ما'}</p>
            <p>{'ارتباط با ما'}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='font-extrabold'>{'اطلاعات بیشتر'}</h2>
            <p>{'رویداد ها '}</p>
            <p>{'گزارش دعا'}</p>
            <p>{'مشارکت با ما'}</p>
            <p>{'کمک به ما'}</p>
          </div>
        </div>

        <div className='w-full'></div>
      </div>
    </footer>
  )
}

export default Footer
