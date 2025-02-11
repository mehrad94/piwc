'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CustomCarousel = () => {
  return (
    <div className='w-full h-full' style={{ direction: 'ltr' }}>
      <Carousel showStatus={false} infiniteLoop swipeable={false} showThumbs={false}>
        {/* Slide 1 */}
        <div className='relative w-full h-[90vh] bg-red-500'>
          {/* Desktop Image */}
          <div className='hidden md:block relative w-full h-full'>
            <Image src='/slide1.jpeg' alt='Desktop Image 1' fill />
          </div>
          {/* Mobile Image */}
          <div className='block md:hidden relative w-full h-full'>
            <Image src='/gallery-5.jpg' alt='Mobile Image 1' fill />
          </div>
        </div>

        {/* Slide 2 */}
        <div className='relative w-full h-[90vh]'>
          <div className='hidden md:block relative w-full h-full'>
            <Image src='/slide2.jpeg' alt='Desktop Image 2' fill className='object-fill' />
          </div>
          <div className='block md:hidden relative w-full h-full'>
            <Image src='/gallery-13.jpg' alt='Mobile Image 2' fill />
          </div>
        </div>

        {/* Slide 3 */}
        <div className='relative w-full h-[90vh]'>
          <div className='hidden md:block relative w-full h-full'>
            <Image src='/slide3.jpeg' alt='Desktop Image 3' fill />
          </div>
          <div className='block md:hidden relative w-full h-full'>
            <Image src='/gallery-16.jpg' alt='Mobile Image 3' fill />
          </div>
        </div>
        <div className='relative w-full h-[90vh]'>
          <div className='hidden md:block relative w-full h-full'>
            <Image src='/slide4.jpeg' alt='Desktop Image 3' fill />
          </div>
          <div className='block md:hidden relative w-full h-full'>
            <Image src='/gallery-17.jpg' alt='Mobile Image 3' fill />
          </div>
        </div>
        <div className='relative w-full h-[90vh]'>
          <div className='hidden md:block relative w-full h-full'>
            <Image src='/slide5.jpeg' alt='Desktop Image 3' fill />
          </div>
          <div className='block md:hidden relative w-full h-full'>
            <Image src='/slide4.jpeg' alt='Mobile Image 3' fill />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default CustomCarousel
