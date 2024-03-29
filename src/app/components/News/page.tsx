import React from 'react'
import NewsCard from '../Helper/NewsCard'
import Image from 'next/image'
import N1 from '../images/n1.jpg'
import N2 from '../images/n2.jpg'
import N3 from '../images/n3.jpg'
import N4 from '../images/n4.jpg'

function News() {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            {/* heading */}
            <h1 className='heading'>Trending News</h1>
            {/* card divs */}
            <div className='pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
                {/* card 1 */}
                <div >
          <NewsCard image={N1.src}  date='June 6,2024' title='Whats New in Pakistan team'
                        height='h-[300px]' />
                     
                </div>
                {/* card2 */}
                <div>
                    <NewsCard image={N2.src} date='June 7,2024' title='Whats New in Pakistan team'
                        height='h-[300px]' />
                </div>
                {/* card3 */}
                <div>
                    <NewsCard image={N3.src} date='June 8,2024' title='Whats New in Pakistan team'
                        height='h-[300px]' />
                </div>
                {/* card4 */}
                <div>
                    <NewsCard image={N4.src} date='June 9,2024' title='Whats New in Pakistan team'
                        height='h-[300px]' />
                </div>
            </div>
        </div>
    )
}

export default News