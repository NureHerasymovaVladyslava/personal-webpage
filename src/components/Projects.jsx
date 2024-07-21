import React from 'react'
import DelayedDisplayComponent from './DelayedDisplayComponent'
import ImageGallery from './ImageGallery'
import {PROJECTS} from '../utils/data'

export default function Projects() {
  return (
    <div className='flex flex-col mx-16 sm:mx-24 md:mx-32 mt-20'>
      <DelayedDisplayComponent>
        <div className='text-7xl sm:text-8xl md:text-9xl line
          font-bold text-transparent w-max
          bg-clip-text bg-gradient-to-r leading-normal
          sm:leading-relaxed md:leading-loose
          from-slate-900 via-cyan-950 
          to-slate-700 playfair-display'>
          Projects
        </div>
        <div className='text-lg sm:text-xl md:text-2xl mt-5'>
          Aside from my personal webpage that you are currently 
          browsing, which I developed using ReactJS and Tailwind CSS, 
          I have worked on several other projects in the past few years.
        </div>
      </DelayedDisplayComponent>
      <DelayedDisplayComponent>
        <div className='flex gap-x-6 gap-y-2 mt-10 flex-wrap
          sm:gap-x-8 md:gap-x-12 text-lg sm:text-xl md:text-2xl kode-mono'>
          {PROJECTS.map((project, index) => 
            <a href={`#${index}`} key={index}
            className='relative hover:text-slate-600 
                transition-all ease-in-out before:left-[50%] 
                after:right-[50%] nav-links w-max'>
              {project.name}
            </a>
          )}
        </div>
      </DelayedDisplayComponent>
      <div className='flex flex-col gap-20 mt-20'>
        {PROJECTS.map((project, index) =>
        <div>
        <DelayedDisplayComponent key={index}>
          <div className='-mt-20 absolute' id={index}></div>

          <div className='kode-mono text-2xl sm:text-3xl 
            md:text-4xl font-semibold'>
            {project.name}
          </div>
          <div className='text-base sm:text-lg 
            md:text-xl font-light mt-3 kode-mono'>
            {project.timeframe}
          </div>
        </DelayedDisplayComponent>
        <DelayedDisplayComponent>
          <div className='xl:hidden mt-5 max-w-[540px] mx-auto'>
            <ImageGallery images={project.images}/>
          </div>
        </DelayedDisplayComponent>
        <DelayedDisplayComponent>
          <div className={'flex gap-16 items-stretch h-max mt-5 ' + 
            (index % 2 === 1 && 'xl:flex-row-reverse')}>
              <div className={'flex flex-col flex-1 gap-10 justify-evenly ' + 
                (index % 2 === 1 && 'xl:text-end')}>
                <div className='flex flex-col gap-2'>
                  <div className='text-2xl sm:text-3xl font-bold'>
                    My role
                  </div>
                  <div className='sm:text-lg'>
                    {project.role}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='text-2xl sm:text-3xl font-bold'>
                    Project type
                  </div>
                  <div className=''>
                    {project.type}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='text-2xl sm:text-3xl font-bold'>
                    Project status
                  </div>
                  <div className=''>
                    {project.status}
                  </div>
                </div>
              </div>
              <div className='hidden xl:block xl:w-[60%] 2xl:w-[50%]'>
                <ImageGallery images={project.images}/>
              </div>
          </div>
        </DelayedDisplayComponent>
        <div className='flex flex-col flex-1 gap-10 mt-10'>
        <DelayedDisplayComponent>
            <div className='flex flex-col gap-2'>
              <div className='text-2xl sm:text-3xl font-bold'>
                About
              </div>
              <div className=''>
               {project.about}
              </div>
            </div>
          </DelayedDisplayComponent>
          <DelayedDisplayComponent>
            <div className='flex flex-col gap-2'>
              <div className='text-2xl sm:text-3xl font-bold'>
                Comment
              </div>
              <div className=''>
               {project.comment}
              </div>
            </div>
          </DelayedDisplayComponent>
          <DelayedDisplayComponent>
            <div className='flex flex-col gap-4'>
              <div className='text-2xl sm:text-3xl font-bold'>
                Features
              </div>
              <div>
                {(project.features.length > 1 ? 
                <div className='flex flex-col justify-center gap-4'>
                  {project.features.map((category, index) =>
                  <div className='flex flex-col gap-1' key={index}>
                    <div className='text-lg sm:text-xl font-bold'>
                      {category.part_name}:
                    </div>
                    <ul className='list-disc ml-8'>
                      {category.f_list.map((feature, index) => 
                      <li key={index}>
                        {feature}
                      </li>)}
                    </ul>
                  </div>)}
                </div> : 
                <ul className='list-disc ml-5'>
                  {project.features[0].f_list.map((feature, index) => 
                  <li key={index}>
                    {feature}
                  </li>)}
                </ul>)}
              </div>
            </div>
          </DelayedDisplayComponent>
          <DelayedDisplayComponent>
            <div className='flex flex-col gap-4'>
              <div className='text-2xl sm:text-3xl font-bold'>
                Technologies
              </div>
              <div className=''>
                <div className='flex flex-col gap-4 justify-center'>
                  {project.technologies.map((category, index) =>
                  <div className='flex flex-col gap-1' key={index}>
                    {project.technologies.length > 1 && 
                    <div className='text-lg sm:text-xl font-bold'>
                      {category.part_name}
                    </div>}
                    <div className='flex flex-col gap-1 text-lg sm:text-xl font-semibold' key={index}>
                      <div>
                        Main: <span className='text-base sm:text-lg font-normal'>{category.main.join(', ')}</span>
                      </div>
                      <div>
                        Additional: <span className='text-base sm:text-lg font-normal'>{category.aditional.join(', ')}</span>
                      </div>
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
          </DelayedDisplayComponent>
          </div>
        </div>)}
      </div>
    </div>
  )
}
