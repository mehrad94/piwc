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
  '/gallery-1.jpg',
  '/gallery-5.jpg',
  '/gallery-6.jpg',
  '/gallery-7.jpg',
  '/gallery-8.jpg',
  '/gallery-10.jpg',
  '/gallery-11.jpg',
  '/gallery-13.jpg',
  '/gallery-15.jpg',
  '/gallery-16.jpg',
  '/gallery-17.jpg',
  '/gallery-18.jpeg',
  '/gallery-19.jpeg',
  '/gallery-20.jpeg',
  '/gallery-21.jpeg',
  '/gallery-22.jpeg',
  '/gallery-23.jpeg',
  '/gallery-24.jpeg',
  '/gallery-25.jpeg',
  '/gallery-26.jpeg',
  '/gallery-27.jpeg',
  '/gallery-28.jpeg',
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
