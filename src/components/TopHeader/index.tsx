import { FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK, YOUTUBE_LINK } from '@/constant/strings'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const TopHeader = () => {
  return (
    <div className='w-full bg-primary text-white py-2 px-6 flex gap-4'>
      <Link href={TWITTER_LINK}>
        <FaXTwitter className='cursor-pointer hover:text-black' size={16} />
      </Link>
      <Link href={INSTAGRAM_LINK}>
        <FaInstagram className='cursor-pointer hover:text-pink-800' size={16} />
      </Link>
      <Link href={YOUTUBE_LINK}>
        <FaYoutube className='cursor-pointer hover:text-red-800' size={16} />
      </Link>
      <Link href={FACEBOOK_LINK}>
        <FaFacebookF className='cursor-pointer hover:text-blue-900' size={15} />
      </Link>
    </div>
  )
}

export default TopHeader
