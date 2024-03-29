import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import {  FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111] '>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
            {/* 1st Part */}
            <div >
                <h1 className='text-[22px] text-white font-semibold mb-[1.5rem] uppercase'>About Club</h1>
                <p className='text-[17px] text-white font-semibold text-opacity-75'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ullam, eveniet laboriosam vel sequi quo </p>
                <div className='mt-[1.5rem] flex items-center space-x-3'>
                    <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center
                    justify-center flex-col'>
                        <FaFacebookF className='text-white' />
                    </div>
                    {/*  */}
                    <div className='w-[2.4rem] h-[2.4rem] bg-sky-300 rounded-full flex items-center
                    justify-center flex-col'>
                        <FaTwitter className='text-white' />
                    </div>
                    {/*  */}
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center
                    justify-center flex-col'>
                        <FaYoutube className='text-white' />
                    </div>
                    {/*  */}
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center
                    justify-center flex-col'>
                        <FaInstagram className='text-white' />
                    </div>
                </div>
            </div>
            {/* 2nd Part */}
            <div>
                <h1 className='text-[22px] text-white font-semibold mb-[1.5rem] uppercase'>About Us</h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>contacts</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>about club</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>price table</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>shop</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>our players</p>
            </div>
            {/* 3rd part */}
            <div>
                <h1 className='text-[22px] text-white font-semibold mb-[1.5rem] uppercase'>Quick Link</h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>contacts</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>about club</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>price table</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>shop</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>our players</p>
            </div>
            {/* 4 part */}
            <div>
                <h1 className='text-[22px] text-white font-semibold mb-[1.5rem] uppercase'>Get In Touch</h1>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] '>+92 236728 89399</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] '>example@gmail.com</p>
                <p className='text-[15px] w-fit text-white hover:text-yellow-400 cursor-pointer text-opacity-30 mb-[0.7rem] '>Karachi,Pakistan</p>
                
            </div>
        </div>
        {/* copyright */}
        <h1 className='mt-[2rem] text-white text-[14px] w-[80%] mx-auto opacity-50'>COPYRIGHT BY WEBDEV WARRIOR - 2024</h1>
    </div>
  )
}

export default Footer