'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import './index.css'
import { Grid, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { useState } from 'react'
import { GALLERY_TITLE } from '@/constant/strings'

const images = [
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
  '/6.jpeg',
  '/7.jpeg',
  '/8.jpeg',
  '/9.jpeg',
  '/10.jpeg',
  '/11.jpeg',
  '/12.jpeg',
  '/13.jpeg',
  '/14.jpeg',
  '/15.jpeg',
  '/16.jpeg',
  '/17.jpeg',
  '/18.jpeg',
  '/19.jpeg',
  '/20.jpeg',
  '/21.jpeg',
  '/22.jpeg',
  '/23.jpeg',
  '/24.jpeg',
  '/25.jpeg',
  '/26.jpeg',
  '/27.jpeg',
  '/28.jpeg',
  '/29.jpeg',
  '/30.jpeg',
  '/31.jpeg',
  '/32.jpeg',
  '/33.jpeg',
  '/34.jpeg',
  '/35.jpeg',
  '/36.jpeg',
  '/37.jpeg',
  '/38.jpeg',
  '/39.jpeg',
  '/40.jpeg',
  '/41.jpeg',
  '/42.jpeg',
  '/43.jpeg',
  '/44.jpeg',
  '/45.jpeg',
  '/46.jpeg',
  '/47.jpeg',
  '/48.jpeg',
  '/49.jpeg',
  '/50.jpeg',
  '/51.jpeg',
  '/52.jpeg',
  '/53.jpeg',
  '/54.jpeg',
  '/55.jpeg',
  '/56.jpeg',
  '/57.jpeg',
  '/58.jpeg',
  '/59.jpeg',
  '/60.jpeg',
  '/61.jpeg',
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const closeModal = () => setSelectedImage(null)

  return (
    <div className='w-full container h-[40vh] md:h-[90vh] mt-10 gap-6 flex flex-col'>
      <h2 className='text-lg md:text-2xl lg:text-4xl font-extrabold text-center text-gray-800'>{GALLERY_TITLE}</h2>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
          640: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
          768: {
            slidesPerView: 2,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
          1024: {
            slidesPerView: 3,
            grid: {
              rows: 2,
              fill: 'row',
            },
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className='mySwiper'
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full h-full cursor-pointer bg-yellow-400' onClick={() => setSelectedImage(src)}>
              <Image src={src} alt={`Gallery image ${index + 1}`} fill className='object-cover' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* مودال برای نمایش تصویر بزرگ‌شده */}
      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50' onClick={closeModal}>
          <div className='relative w-[90vw] h-[90vh]'>
            <Image fill src={selectedImage} alt='Selected' className='object-contain' />
            <button onClick={closeModal} className='absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2'>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
