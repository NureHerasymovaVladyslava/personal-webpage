import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between px-6 sm:px-10 md:px-16 pb-5 gap-5'>
        <div className='flex flex-col gap-3'>
            <div className='text-2xl font-semibold'>
                Contact me:
            </div>
            <div className='flex gap-4'>
                <div className='font-bold text-base sm:text-lg md:text-xl'>
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div className='text-sm sm:text-base md:text-lg'>
                    <a href='mailto:vladyslava.herasymova@gmail.com'>
                        vladyslava.herasymova@gmail.com
                    </a>
                    <br />
                    <a href='mailto:herasymovavladyslava@gmail.com'>
                        herasymovavladyslava@gmail.com
                    </a>
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='font-bold text-base sm:text-lg md:text-xl'>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div className='text-sm sm:text-base md:text-lg'>
                    +380991709213
                </div>
            </div>
            <div className='flex gap-4'>
                <div className='font-bold text-base sm:text-lg md:text-xl'>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className='text-sm sm:text-base md:text-lg'>
                    <a href='https://www.linkedin.com/in/vladyslava-herasymova-7bb75328b/'>
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
        <div className='flex flex-col text-end justify-evenly'>
            <div className='font-thin text-3xl sm:text-4xl md:text-5xl'>
                Vladyslava
                <br />
                Herasymova
            </div>
            <div className='text-2xl sm:text-3xl md:text-4xl'>
                Full Stack Web Developer
            </div>
        </div>
    </div>
  )
}
