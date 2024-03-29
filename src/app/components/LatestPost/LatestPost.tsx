import React from 'react'
import PostCard from './PostCard'
import Image from 'next/image'
import N1 from '../images/n1.jpg'
import N2 from '../images/n2.jpg'
import N3 from '../images/n3.jpg'
import N4 from '../images/n4.jpg'

function LatestPost() {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>Latest Post</h1>
        <div className='w-[80%] mx-auto mt-[3rem]'>
            {/* post card */}
            <div>
                <PostCard title='THE WOLRD CUP WHAT TO EXPECT FROM PAKISTAN FOOTBALL CLUB BETWEEN POLICY SOLUTION'
                image={N1.src} date='21 March, 2024' />
            </div>
            {/* card2 */}
            <div>
                <PostCard title='THE WOLRD CUP WHAT TO EXPECT FROM PAKISTAN FOOTBALL CLUB BETWEEN POLICY SOLUTION'
                image={N2.src} date='22 March, 2024' />
            </div>
            {/* card3 */}
            <div>
                <PostCard title='THE WOLRD CUP WHAT TO EXPECT FROM PAKISTAN FOOTBALL CLUB BETWEEN POLICY SOLUTION'
                image={N3.src} date='23 March, 2024' />
            </div>
            {/* card4 */}
            <div>
                <PostCard title='THE WOLRD CUP WHAT TO EXPECT FROM PAKISTAN FOOTBALL CLUB BETWEEN POLICY SOLUTION'
                image={N4.src} date='24 March, 2024' />
            </div>
        </div>
    </div>
  )
}

export default LatestPost
