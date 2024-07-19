import React from 'react'
import TechStack from './TechStack'

export default function MainPage() {
  return (
    <div className='flex flex-col mx-16 sm:mx-24 md:mx-32
        gap-10 pt-28'>
        <div className='text-7xl sm:text-8xl md:text-9xl'>
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
        <div className='my-20'>
            <TechStack />
        </div>
    </div>
  )
}
