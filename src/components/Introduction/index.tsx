import React from 'react'

const Introduction = () => {
  return (
    <div className='container mx-auto justify-center items-center flex py-9'>
      <div className='w-full grid grid-cols-1 grid-rows-1 md:grid-row-1 md:grid-cols-2 gap-4'>
        <div>
          <video autoPlay loop muted className='w-full'>
            <source src='https://video.wixstatic.com/video/8afa3f_a4f5c11320354dbc9d774cafd099e553/1080p/mp4/file.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='text-gray-900'>
          <h1 className='font-extrabold text-3xl'>{'به کلیسا ما خوش آمدید'}</h1>
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
      </div>
    </div>
  )
}

export default Introduction
