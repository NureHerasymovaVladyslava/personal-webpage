import React from 'react'
import DelayedDisplayComponent from './DelayedDisplayComponent'
import {TECHNOLOGIES} from '../utils/data'

export default function MainPage() {
  return (
    <div className='flex flex-col mx-16 sm:mx-24 md:mx-32 pt-24'>
        <DelayedDisplayComponent>
        <div className='flex flex-col gap-10'>
            <div className='text-7xl sm:text-8xl md:text-9xl
            font-bold text-transparent w-max
            bg-clip-text bg-gradient-to-r
            from-slate-900 via-cyan-950 
            to-slate-700 playfair-display'>
            Hello
            </div>
            <div className='text-2xl sm:text-3xl md:text-4xl'>
            My name is Vladyslava
            <br/>
            I'm a Full Stack Web developer
            </div>
            <div className='text-lg sm:text-xl'>
            I specialize in designing and developing web applications, 
            mostly with the help of ASP.NET Core MVC and ReactJS, 
            as well as Android applications using Java.
            </div>
        </div>
        </DelayedDisplayComponent>
        <div className='flex flex-col gap-16 mt-24'>
            {TECHNOLOGIES.map(({section_name, items}, index) =>
            <DelayedDisplayComponent key={index}>
                <div className='text-3xl sm:text-4xl md:text-5xl 
                    font-semibold text-center mb-10 kode-mono'>
                {section_name}
                </div>
                <div className='flex mt-5 gap-4 sm:gap-6 justify-around flex-wrap'>
                    {items.map(({name, link}) => 
                    <div className='w-min flex flex-col 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]
                        justify-between items-center gap-3'>
                        <div className='w-max h-16 sm:h-20 xl:h-24'>
                            <img className='h-full opacity-70 hover:opacity-100
                                duration-200 p-1
                                hover:p-0 ' src={link}/>
                        </div>
                        <p className='text-center text-base font-semibold kode-mono'>{name}</p>
                    </div>
                    )}
                </div>
            </DelayedDisplayComponent>
            )}
        </div>
    </div>
  )
}
