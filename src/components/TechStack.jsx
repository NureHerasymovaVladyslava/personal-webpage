import {TECHNOLOGIES} from '../utils/techstack'
import React from 'react'

export default function TechStack() {
  return (
    <div className='flex flex-col'>
        <div className='text-5xl sm:text-6xl md:text-7xl 
            font-bold text-center'>
            Tech <span className='text-blue-800'>Stack</span>
        </div>
        <div className='flex flex-col gap-20 mt-12'>
            {TECHNOLOGIES.map(({section_name, items}) =>
            <div>
                <div className='text-3xl sm:text-4xl md:text-5xl 
                    font-semibold text-center mb-10'>
                {section_name}
                </div>
                <div className='flex mt-5 gap-6 sm:gap-8 lg:gap-14 justify-around flex-wrap'>
                    {items.map(({name, link}) => 
                    <div className='w-min flex flex-col 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]
                        justify-between items-center gap-3'>
                        <div className='w-max h-20 sm:h-28 md:h-36'>
                            <img className='h-full opacity-70 hover:opacity-100
                                duration-200 p-1
                                hover:p-0 ' src={link}/>
                        </div>
                        <p className='text-center font-semibold'>{name}</p>
                    </div>
                    )}
                </div>
            </div>
            )}
        </div>
    </div>
  )
}
