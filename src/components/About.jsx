import React from 'react'
import DelayedDisplayComponent from './DelayedDisplayComponent'

export default function About() {
  return (
    <div className='flex flex-col items-center
      px-10 sm:px-16 lg:px-28 gap-10 py-16'>
        <DelayedDisplayComponent>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between items-center
            w-full gap-10'>
            <div className='flex flex-col gap-5'>
              <div className='text-6xl
                sm:text-7xl md:text-8xl
                text-transparent w-min
                bg-clip-text bg-gradient-to-r
                from-slate-900 via-cyan-900 
                to-slate-700'>
                  Hello there!
              </div>
              <div className='text-xl
                sm:text-2xl md:text-3xl'>
                As you already probably know, 
                my name is Vladyslava Herasymova, 
                and I am a Software Engineer.
              </div>
              <div className='hidden xl:block text-2xl'>
                I specialize in designing and developing web applications, 
                mostly with the help of Asp.Net Core MVC and ReactJS, 
                as well as Adroid applications using Java.
              </div>
            </div>
            <div className='max-w-60 sm:max-w-[30%]'>
              <img src='./portrait.png' className='drop-shadow-xl'/>
            </div>
          </div>
          <div className='text-lg sm:text-xl md:text-2xl xl:hidden'>
              I specialize in designing and developing web applications, 
              mostly with the help of Asp.Net Core MVC and ReactJS, 
              as well as Adroid applications using Java.
          </div>  
        </div>
        </DelayedDisplayComponent>
        <DelayedDisplayComponent>
          <div className='text-3xl sm:text-4xl md:text-5xl font-light'>
            Let me tell you a little bit about myself
          </div>
        </DelayedDisplayComponent>
      <div className='flex flex-col gap-6 w-full'>
        <DelayedDisplayComponent>
        <div className='flex flex-col gap-2 items-start'>
          <div className='text-2xl sm:text-3xl 
            md:text-4xl font-bold'>
            Education
          </div>
          <div className='text-lg sm:text-xl md:text-2xl'>
            As of right now, I am working towards my Bachelor’s degree in
            Software Engineering at Kharkiv National University of
            Radioelectronics.
          </div>
          <div className='text-lg sm:text-xl md:text-2xl'>
            I enrolled in 2022 and will graduate in 2026.
          </div>
          <div className='text-lg sm:text-xl md:text-2xl'>
            Aside from that, I try to study outside of University 
            as much as physicly possible.
            <br />
            As an example, I took an extensive course on .Net and web 
            development in general during my first year at uni. 
            I learned a lot and took part in the development of 
            a web application for distributed learning in a team with 
            other students under the mentourship of our tutors.
          </div>
        </div>
        </DelayedDisplayComponent>
        <DelayedDisplayComponent>
        <div className='flex flex-col gap-2 items-start'>
          <div className='text-2xl sm:text-3xl 
            md:text-4xl font-bold'>
            Location
          </div>
          <div className='text-lg sm:text-xl md:text-2xl'>
            I currently reside in Kharkiv, Ukraine, though I am 
            open for relocation.
          </div>
        </div>
        </DelayedDisplayComponent>
        <DelayedDisplayComponent>
        <div className='flex flex-col gap-2 items-start'>
          <div className='text-2xl sm:text-3xl 
            md:text-4xl font-bold'>
            Language
          </div>
          <div className='text-lg sm:text-xl md:text-2xl'>
            I am a native speaker of Ukrainian and am proficient 
            in English (B2-C1). I am also currently learning Spanish.
          </div>
        </div>
        </DelayedDisplayComponent>
        <DelayedDisplayComponent>
        <div className='flex flex-col gap-2 items-start'>
          <div className='text-2xl sm:text-3xl 
            md:text-4xl font-bold'>
            Strengths
          </div>
          <ul className='text-lg sm:text-xl md:text-2xl 
            list-disc pl-10'>
            <li>
              Responsibile
            </li>
            <li>
              Patient
            </li>
            <li>
              Effective team player
            </li>
            <li>
              Quick learner
            </li>
            <li>
              Good time management and prioritization skills
            </li>
          </ul>
        </div>
        </DelayedDisplayComponent>
        <DelayedDisplayComponent>
        <div className='flex flex-col gap-2 items-start'>
          <div className='text-2xl sm:text-3xl 
            md:text-4xl font-bold'>
            Weaknesses
          </div>
          <ul className='text-lg sm:text-xl md:text-2xl 
            list-disc pl-10'>
            <li>
              Sometimes fixate on solving a problem and loose track of time
            </li>
            <li>
              Have some troubles asking for help
            </li>
          </ul>
        </div>
        </DelayedDisplayComponent>
      </div>
    </div>
  )
}
