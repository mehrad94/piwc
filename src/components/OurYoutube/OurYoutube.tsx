'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import Image from 'next/image'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Playlist } from '@/types'

interface OurYoutubeProps {
  playlists: Playlist[]
}
const OurYoutube: React.FC<OurYoutubeProps> = ({ playlists }) => {
  return (
    <div className='w-full bg-gray-200 py-16 mt-32'>
      <div className='mx-auto'>
        <h1 className='text-5xl font-extrabold text-gray-900 w-full text-center'>{'مواعظ ما در یوتیوب'}</h1>
        <h1 className='text-sm font-light mt-3 border-b border-primary pb-2 text-gray-900 w-full text-center'>{'شما میتوانید آخرین مواعظ مارو در یوتیوب ببینید'}</h1>
        <div className='mt-16'>
          <Swiper
            onBreakpoint={(swiper, breakpointParams) => {
              console.log('Current breakpoint params:', breakpointParams)
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'
          >
            {playlists.map((playlist) => {
              return (
                <SwiperSlide key={playlist.id}>
                  <div className='flex w-full relative bg-red-600 h-[400px] min-h-[300px] rounded-lg justify-center items-center'>
                    <div className='w-full h-full'>
                      <Image fill alt={playlist.snippet.title} className='object-fill' src={playlist.snippet.thumbnails.high.url} />
                    </div>
                    <div className='absolute left-0 right-0 bottom-0 flex flex-col px-8 pb-8 bg-black/50 pt-4'>
                      <span className='font-bold text-xl mb-2'>{playlist.snippet.title}</span>
                      <span className='font-light text-base'>{playlist.snippet.description}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default OurYoutube
