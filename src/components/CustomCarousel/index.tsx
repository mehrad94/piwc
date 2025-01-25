'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CustomCarousel = () => {
  return (
    <div className='' style={{ direction: 'ltr' }}>
      <Carousel showStatus={false} infiniteLoop swipeable={false}>
        {/* Slide 1 */}
        <div className='relative w-full h-[80vh]'>
          {/* Desktop Image */}
          <div className='hidden md:block relative w-full h-full'>
            <Image src='/gallery-1.jpg' alt='Desktop Image 1' fill />
          </div>
          {/* Mobile Image */}
          <div className='block md:hidden relative w-full h-full'>
            <Image src='/gallery-5.jpg' alt='Mobile Image 1' fill />
          </div>
        </div>

        {/* Slide 2 */}
        <div className='relative w-full h-[80vh]'>
          <div className='hidden md:block relative w-full h-full'>
            <Image src='/gallery-2.jpg' alt='Desktop Image 2' fill />
          </div>
          <div className='block md:hidden relative w-full h-full'>
            <Image src='/gallery-6.jpg' alt='Mobile Image 2' fill />
          </div>
        </div>

        {/* Slide 3 */}
        <div className='relative w-full h-[80vh]'>
          <div className='hidden md:block relative w-full h-full'>
            <Image src='/gallery-3.jpg' alt='Desktop Image 3' fill />
          </div>
          <div className='block md:hidden relative w-full h-full'>
            <Image src='/gallery-10.jpg' alt='Mobile Image 3' fill />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default CustomCarousel
