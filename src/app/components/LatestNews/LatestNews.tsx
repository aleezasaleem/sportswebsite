import React from 'react'
import Image from 'next/image'
import NewsCard from '../Helper/NewsCard'
import N1 from '../images/n1.jpg'
import N2 from '../images/n2.jpg'
import N3 from '../images/n3.jpg'
import SmallNewsCard from '../Helper/SmallNewsCard'

function LatestNews() {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        {/* heading */}
        <h1 className='heading'>Latest News</h1>
        <div className='w-[80%] mx-auto pt-[4rem] grid grid-cols-1 lg:grid-cols-5 gap-[2rem]'>
            {/* big card */}
            <div className='col-span-3'>
                <NewsCard image={N1.src} date='June 6,2024' title='Whats New in team Pakistan' height='h-[400px]'/>
            </div>
            {/* small card */}
            <div className='col-span-2'>
                <div>
                    <SmallNewsCard image={N1.src} date='24 October,2024' title='Whats New in team Pakistan'  />
                </div>
                {/* card2 */}
                <div className='mt-[1.4rem] mb-[1.4rem]'>
                    <SmallNewsCard image={N2.src} date='25 October,2024' title='Whats New in team Pakistan'  />
                </div>
                {/* card3 */}
                <div>
                    <SmallNewsCard image={N3.src} date='26 October,2024' title='Whats New in team Pakistan'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews