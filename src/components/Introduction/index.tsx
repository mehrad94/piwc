import Image from 'next/image'
import React from 'react'

const Introduction = () => {
  return (
    <div className='container mx-auto justify-center items-center flex py-9 h-full'>
      <div className='w-full grid grid-cols-1 grid-rows-1 md:grid-row-3 md:grid-cols-1 gap-4 h-full'>
        <div className='text-gray-900 row-span-1'>
          <h1 className='font-extrabold text-4xl'>{'به کلیسا ما خوش آمدید'}</h1>
          <p className='text-lg text-justify font-light mt-4'>
            {`ما بسیار خوشحالیم که اینجا با شما در ارتباط هستیم. امیدواریم این سایت جایی باشد که بتوانید منابعی را کشف کنید و بیابید که به رشد رابطه شما با عیسی مسیح کمک کند.`}
          </p>
          <p className='text-lg text-justify font-light mt-4'>
            {`
            ما هیچ‌گاه تا این اندازه درباره حضور خدا، نقشه او برای کلیسای باشکوهش و بسیج مردم او در دعا و انجام مأموریتی که به کلیسا سپرده است، احساس ضرورت نکرده‌ایم. ما کلیسایی هستیم که به دعا و کلام خدا متعهد است و برای تجربه کامل روح‌القدس تلاش می‌کنیم، در حالی که عشق ورزیدن و اطاعت از عیسی مسیح را می‌آموزیم. مأموریت ما این است که شاگردانی بسازیم که خودشان شاگرد بسازند.
            `}
          </p>
          <p className='text-lg text-justify font-light mt-4'>{`
          خداوند شما را برکت دهد،
            `}</p>
        </div>
        <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 p-2 w-full  row-span-2 md:h-[400px]'>
          <div className='flex justify-center gap-2 items-center text-gray-900 flex-col'>
            <div className='bg-red-400 w-72 h-72 rounded-full relative overflow-hidden'>
              <Image src={'/maryam.jpeg'} alt='maryam' className='object-cover' fill />
            </div>
            <p className='text-2xl font-bold'>{'مریم کاوند'}</p>
            <p className='text-xl font-light'>{'کشیش کلیسا'}</p>
          </div>
          <div className='flex justify-center gap-2 items-center text-gray-900 flex-col'>
            <div className='bg-red-400 w-72 h-72 rounded-full relative overflow-hidden'>
              <Image src={'/philip.jpeg'} alt='maryam' className='object-cover' fill />
            </div>
            <p className='text-2xl font-bold'>{'پاستور فیلیپ چمل'}</p>
            <p className='text-xl font-light'>{'عضو ارشد کلیسا'}</p>
          </div>
          <div className='flex justify-center gap-2 items-center text-gray-900 flex-col'>
            <div className='bg-red-400 w-72 h-72 rounded-full relative overflow-hidden'>
              <Image src={'/maziar.jpeg'} alt='maryam' className='object-cover' fill />
            </div>
            <p className='text-2xl font-bold'>{'مازیار طبری'}</p>
            <p className='text-xl font-light'>{'کشیش و رهبر کلیسا'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
