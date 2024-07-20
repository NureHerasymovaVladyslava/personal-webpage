import React from 'react'

export default function Header() {
  return (
    <nav className='flex justify-between items-center px-6 pt-2 pb-5 
        sm:px-8 sm:py-3 md:px-10 lg:px-12 text-slate-800 backdrop-blur-sm
        text-base sm:text-lg md:text-xl sticky top-0 z-20'>
        <a className='hover:text-slate-600 duration-200
                transition-all ease-in-out text-lg 
                sm:text-xl md:text-2xl
                hover:text-xl sm:hover:text-2xl
                md:hover:text-3xl' href='/'>
            <i class="fa-solid fa-code"></i>
        </a>
        <div className='flex gap-6 font-semibold kode-mono'>
            <a className={`relative hover:text-slate-600 
                transition-all ease-in-out before:left-[50%] 
                after:right-[50%] nav-links` + 
                (window.location.pathname === '/projects' ?
                ' before:w-[50%] after:w-[50%]' : '')} href='projects'>
                Projects
            </a>
            <a className={`relative hover:text-slate-600 
                transition-all ease-in-out before:left-[50%] 
                after:right-[50%] nav-links` + 
                (window.location.pathname === '/about' ?
                ' before:w-[50%] after:w-[50%]' : '')} href='about'>
                About
            </a>
        </div>
    </nav>
  )
}
