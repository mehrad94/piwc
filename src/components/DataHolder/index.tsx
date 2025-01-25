import React from 'react'

const DataHolder = () => {
  return (
    <div className='container mx-auto justify-center items-center flex py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
        <div className='flex gap-6 border-b cursor-pointer  md:border-l md:border-b-0 border-gray-900 pb-3 flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-5xl text-gray-900 font-bold'>{'ماموریت های ما'}</h2>
          <span className='text-md text-primary font-light'>{'هدف، چشم‌انداز و تعهد ما'}</span>
        </div>
        <div className='flex gap-6 border-b cursor-pointer md:border-l md:border-b-0 border-gray-900 pb-3 flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-5xl text-gray-900 font-bold'>{'خدمت‌ های ما'}</h2>
          <span className='text-md text-primary font-light'>{'ثبت‌نام کنید و در ایجاد تغییر کمک کنید'}</span>
        </div>
        <div className='flex gap-6 border-b cursor-pointer md:border-b-0 border-gray-900 pb-3 flex-col justify-center items-center'>
          <h2 className='text-3xl md:text-5xl text-gray-900 font-bold'>{'مشارکت کنید'}</h2>
          <span className='text-md  font-light text-primary'>{'داوطلب شوید، شرکت کنید یا کمک مالی کنید.'}</span>
        </div>
      </div>
    </div>
  )
}

export default DataHolder
