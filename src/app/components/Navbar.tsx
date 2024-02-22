"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Navlinks from './NavLinks'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'

const navLink=[{
    title:"About",
    path:"#about"
},{
    title:"Projects",
    path:"#project"
},{
    title:"Contact",
    path:"#contact"
}

]

const Navbar = () => {
    const [navbarOpen,setNavbarOpen]=useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 px-4'>
    <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
        <Link href={'/'} className=' mx-6 text-xl md:text-5xl text-white font-semibold'>Portfolio</Link>
        <div className='mobile-menu block md:hidden'>
            {
               !navbarOpen?(
                    <button onClick={()=>setNavbarOpen(true)} className=' flex items-center px-3 py-4 border rounded border-slate-200 text-slate-200  hover:text-white
                    hover:border-white '><Bars3Icon className='h-5 w-5' /></button>
                ):(
                    <button onClick={()=>setNavbarOpen(false)} className=' flex items-center px-3 py-4 border rounded border-slate-200 text-slate-200  hover:text-white
                    hover:border-white '><XMarkIcon className='h-5 w-5' /></button>
                )
            }
        </div>
        <div className='menu hidden md:block md:w-auto ' id='navbar'>
            <ul className='flex font-semibold mx-6 p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
               {navLink.map((link,index)=>(<li key={index}>
                <Navlinks href={link.path} title={link.title} />
               </li>))}
            </ul>
        </div>
    </div>
    {/* {navbarOpen ?<MenuOverlay links={navLink}/> :null} */}
    </nav>
  )
}

export default Navbar