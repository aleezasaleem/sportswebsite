'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Banner from '../images/banner.jpg'
import { BiCalendar } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import Model from '../Helper/Model';

function Hero() {
  const [showModel,setshowModel]=useState(false)
  const showModelHnadler=()=>setshowModel(true)
  const closeModelHnadler=()=>setshowModel(false)
  return (
    <div className={`flex  relative h-[88vh] w-[100%]   bg-cover bg-center`}>
     { showModel && <Model hideModel={closeModelHnadler} />}
      <Image  src={Banner} alt='baneer' objectFit='cover'objectPosition='fill' className='bg-cover bg-center '  />
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.68)]'>
      <div className='relative z-[10] flex items-center h-[100%] text-white'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
    {/* text content */}
    <div>
      <p className='sm:px-8 px-4 py-1 mb-[1rem] text-[12px] sm:text-[16px] bg-red-600
      text-white w-fit uppercase'>Football</p>
      <h1 className='text-[25px] sm:text-[32px] md:text-[38px] lg:text-[45px]
      text-white leading-[2rem] md:leading-[3.5rem] font-semibold'>THE WORLD CUP 2026 WHAT ARE THE EXCITING NEWS FOR US</h1>
      <div className='flex items-center space-x-14'
      >
        <div className='flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]'>
        <BiCalendar className='w-[2rem] h-[1.5rem] text-white' />
        <p className='text-[11px] sm:text-[16px] text-white uppercase font-medium'>March 20, 2025</p>
        </div>
        <div className='flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]'>
        <BiUser  className='w-[2rem] h-[1.5rem] text-white' />
        <p className='text-[11px] sm:text-[16px] text-white uppercase font-medium'>
          By Webdev Warrior
        </p>
        </div>
      </div>
      {/* button */}
    <div className='mt-[2.4rem] flex items-center space-x-6'>
      <button className='sm:px-8 sm:py-2.5 px-4 py-2 bg-red-600 hover:bg-red-800
      transition-all duration-200 sm:text-[17px] text-[13px] font-medium text-white'>Watch Highlight</button>
      <button className='sm:px-8 sm:py-2.5 px-4 py-2 bg-white hover:bg-gray-300
      transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-black'>Learn More</button>
    </div>
    </div>
    {/* play */}
<div>
  <div onClick={showModelHnadler} className='w-[10rem] lg:ml-auto h-[10rem] rounded-full bg-red-600 hover:bg-black
  transition-all duration-200 cursor-pointer sm:flex flex-col items-center
  justify-center hidden'>
<FaPlay className='w-[3rem] h-[3rem] text-white'/>
  </div>
</div>

{/*  */}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
