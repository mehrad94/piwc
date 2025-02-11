'use client'
import { UPCOMING_EVENTS_TITLE } from '@/constant/strings'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

export const UPCOMING_EVENTS = [
  {
    title: 'هر یکشنبه در کلیسا خواهیم بود',
    date: 'Sun',
    month: '',
    description: 'یکشنبه ها از ساعت ۳ تا ۶ با آغوش باز پذیرای شما خواهیم بود',
  },
  {
    title: 'برنامه ای وجود ندارد',
    date: 'Mon',
    month: '',
    description: '',
  },
  {
    title: 'تعلیم کتاب مقدس',
    date: 'Tue',
    month: '',
    description: 'روزهای سه شنبه در پلتفرم زوم با هم به مطالعه کتاب مقدس و یادگیری از آن می‌پردازیم.',
  },
  {
    title: 'برنامه ای وجود ندارد',
    date: 'Wed',
    month: '',
    description: '',
  },
  {
    title: 'برنامه ای وجود ندارد',
    date: 'Thu',
    month: '',
    description: '',
  },
]

gsap.registerPlugin(ScrollTrigger)

const UpcomingEvents: React.FC = () => {
  const cardRefs = useRef<HTMLDivElement[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const handleMouseEnter = (index: number) => {
    const overlay = cardRefs.current[index]?.querySelector('.overlay')
    if (overlay) {
      gsap.fromTo(
        overlay,
        { y: '-100%' },
        {
          y: '0%',
          duration: 0.6,
          ease: 'power3.out',
        }
      )
    }
  }
  const handleMouseLeave = (index: number) => {
    const overlay = cardRefs.current[index]?.querySelector('.overlay')
    if (overlay) {
      gsap.fromTo(
        overlay,
        { y: '-1%' },
        {
          y: '100%',
          duration: 0.6,
          ease: 'power3.out',
        }
      )
    }
  }
  useEffect(() => {
    gsap.from(cardRefs.current, {
      x: -400,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  return (
    <div ref={sectionRef} className='container flex flex-col  mx-auto mt-16 h-f bg-[#E2E3DA] w-full lg:rounded-3xl p-4'>
      <h1 className='text-4xl font-extrabold text-gray-900'>{UPCOMING_EVENTS_TITLE}</h1>
      <div className='grid lg:grid-cols-12 gap-4 mt-3 w-full'>
        <div className='col-span-3 hidden lg:flex relative rounded-xl overflow-hidden h-full'>
          <Image src={'/gallery-15.jpg'} alt='UPCOMING' fill className='object-fill' />
          <div className='absolute left-0 top-0 bottom-0 bg-gray-600 bg-opacity-20 w-full p-2' />
        </div>
        <div className='col-span-9 w-full grid grid-cols-1 grid-rows-5 gap-4'>
          {UPCOMING_EVENTS.map((event, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className='relative flex w-full rounded-xl cursor-pointer items-center px-4 overflow-hidden group gap-3'
            >
              {/* Overlay for the hover effect */}
              <div className='overlay absolute top-0 left-0 w-full h-full bg-[#01B7E2] -translate-y-full'></div>
              <div className='relative flex flex-col w-[100px] min-w-[100px] text-gray-900 text-[30px] font-extrabold h-[100px] items-center justify-center bg-white rounded-md z-10'>
                <span>{event.date}</span>
                <span className='text-base font-light'>{event.month}</span>
              </div>
              <div className='relative flex flex-col text-gray-900 z-10'>
                <p className='font-extrabold text-base  md:text-xl lg:text-2xl'>{event.title}</p>
                <p className='font-light text-base text-justify'>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
