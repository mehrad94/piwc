'use client'
import { HEADER_MENU } from '@/constant/menus'
import { WEBSITE_NAME } from '@/constant/strings'
import Image from 'next/image'
import { useState } from 'react'
import { FaChurch } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className=' flex items-center justify-between px-4 py-3 bg-white shadow-md'>
      <div className='container flex justify-between items-center mx-auto'>
        <div className='text-xl font-bold flex items-center'>
          <Image src={'/logo.avif'} alt='' width={72} height={72} />
          <span className='text-gray-900'>{WEBSITE_NAME}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-6'>
          <ul className='flex justify-center text-gray-950 cursor-pointer items-center w-full gap-8 text-sm font-normal'>
            {HEADER_MENU.map((item, index) => (
              <li
                key={index}
                className='transition-all hover:text-primary hover:font-extrabold hover:text-lg '
                onMouseEnter={(e) => {
                  const siblings = Array.from(e.currentTarget.parentElement!.children).filter((child) => child !== e.currentTarget)
                  siblings.forEach((sibling) => sibling.classList.add('text-gray-400'))
                }}
                onMouseLeave={(e) => {
                  const siblings = Array.from(e.currentTarget.parentElement!.children).filter((child) => child !== e.currentTarget)
                  siblings.forEach((sibling) => sibling.classList.remove('text-gray-400'))
                }}
              >
                <a href={'/fa' + item.pathname}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className='block md:hidden text-primary focus:outline-none '>
          {menuOpen ? <IoClose size={24} /> : <FaChurch size={24} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='absolute top-16  bg-primary text-white right-0 mt-[10%] shadow-lg w-full md:hidden'>
            <nav className='flex flex-col space-y-4 p-4'>
              {HEADER_MENU.map((item, index) => (
                <li
                  key={index}
                  className='transition-all hover:text-primary hover:font-extrabold hover:text-lg '
                  onMouseEnter={(e) => {
                    const siblings = Array.from(e.currentTarget.parentElement!.children).filter((child) => child !== e.currentTarget)
                    siblings.forEach((sibling) => sibling.classList.add('text-gray-400'))
                  }}
                  onMouseLeave={(e) => {
                    const siblings = Array.from(e.currentTarget.parentElement!.children).filter((child) => child !== e.currentTarget)
                    siblings.forEach((sibling) => sibling.classList.remove('text-gray-400'))
                  }}
                >
                  <a href={'/fa' + item.pathname}>{item.title}</a>
                </li>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
