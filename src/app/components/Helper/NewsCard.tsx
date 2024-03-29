import React from 'react'
interface Props{
    title:string,
    image:string,
    height:string,
    date:string
}

function NewsCard({title,date,image,height}:Props) {
    const cardBackground={
        backgroundImage:`url(${image})`
    }
  return (
    <div className={`relative flex items-start justify-end flex-col bg-cover bg-center ${height}`}
    style={cardBackground}>
       {/*card overlay  */}
       <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#0000008f] h-[100%]'></div>
       {/* card content */}
       <div  className='relative z-10 p-4'>
        <div className='flex items-center space-x-4'>
          <h1 className='w-fit px-4 text-[12px] py-[2px] uppercase bg-red-500 text-white'>Football</h1>
          <p className='text-white opacity-75'>{date}</p>
        </div>
        <h1 className='text-[20px] hover:text-red-500 cursor-pointer hover:underline
        transition-all duration-500 uppercase mt-[0.5rem] text-white font-semibold'>{title}</h1>
        <div>
          <button className='mt-[1rem] hover:text-red-500 text-white font-semibold hover:underline
          transition-all duration-300 text-[17px] w-fit'>Read More</button>
        </div>


       </div>
    </div>
  )
}

export default NewsCard