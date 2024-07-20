import React from 'react'
import DelayedDisplayComponent from './DelayedDisplayComponent'
import {TECHNOLOGIES} from '../utils/techstack'

export default function MainPage() {
  return (
    <div className='flex flex-col mx-16 sm:mx-24 md:mx-32 pt-24'>
        <DelayedDisplayComponent>
        <div className='flex flex-col gap-10'>
            <div className='text-7xl sm:text-8xl md:text-9xl
            font-bold text-transparent w-max
            bg-clip-text bg-gradient-to-r
            from-slate-900 via-cyan-950 
            to-slate-700'>
            Hello
            </div>
            <div className='text-2xl sm:text-3xl md:text-4xl'>
            My name is Vladyslava
            <br/>
            I'm a Full Stack Web developer
            </div>
            <div className='text-lg sm:text-xl'>
            I specialize in designing and developing web applications, 
            mostly with the help of Asp.Net Core MVC and ReactJS, 
            as well as Adroid applications using Java.
            </div>
        </div>
        <div className='text-5xl sm:text-6xl md:text-7xl 
            font-bold text-center mt-20'>
            Tech Stack
        </div>
        </DelayedDisplayComponent>
        <div className='grid xl:grid-cols-2 xl:gap-x-40 gap-20 my-12'>
            {TECHNOLOGIES.map(({section_name, items}) =>
            <DelayedDisplayComponent>
                <div className='text-3xl sm:text-4xl md:text-5xl 
                    font-semibold text-center mb-10'>
                {section_name}
                </div>
                <div className='flex mt-5 gap-8 sm:gap-8 lg:gap-14 justify-around flex-wrap'>
                    {items.map(({name, link}) => 
                    <div className='w-min flex flex-col 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]
                        justify-between items-center gap-3'>
                        <div className='w-max h-20 sm:h-24 md:h-28'>
                            <img className='h-full opacity-70 hover:opacity-100
                                duration-200 p-1
                                hover:p-0 ' src={link}/>
                        </div>
                        <p className='text-center font-semibold'>{name}</p>
                    </div>
                    )}
                </div>
            </DelayedDisplayComponent>
            )}
        </div>
    </div>
  )
}
