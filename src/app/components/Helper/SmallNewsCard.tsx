import React from 'react'
import Image from 'next/image'
interface Props{
    title:string,
    date:string,
    image:string
}

function SmallNewsCard({title,image,date}:Props) {
  return (
    <div className='bg-gray-900 p-4 flex items-center space-x-6'>
        <div className='hidden sm:block'>
    <Image src={image} alt={title} width={120} height={120} className='object-cover' />
        </div>
        {/* content */}
        <div>
        <div className='flex items-center space-x-4 '>
            <h1 className='w-fit px-4 text-[8px] sm:text-[10px] py-[2px] uppercase
            bg-red-600 text-white'>Football</h1>
            <p className='text-white text-[9px] sm:text-[12px] text-opacity-75'>{date}</p>
        </div>
        <h1 className='text-[13px] sm:text-[17px] text-white
        hover:text-red-500 cursor-pointer hover:underline transition-all duration-500
        uppercase mt-[0.5rem] font-semibold'>{title}</h1>
        <p className='text-white text-[12px] sm:text-[15px] font-semibold hover:text-red-500 mt-[1rem]
        cursor-pointer hover:underline transition-all duration-500'>Read More</p>
        </div>
        
    </div>
  )
}

export default SmallNewsCard