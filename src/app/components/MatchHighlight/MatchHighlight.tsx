import React from 'react'
import HighlightCard from './HighlightCard'
import Image from 'next/image'
import H1 from '../images/h1.jpg'
import H2 from '../images/h2.jpg'
import H3 from '../images/h3.jpg'
import H4 from '../images/h4.jpg'

function MatchHighlight() {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>Match Highlights</h1>
        {/*  */}
        <div className='mt-[3rem] w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4
        gap-[3rem]'>
<div>
   <HighlightCard image={H1.src} title='ARSENAL STAY TOP, TEN HEN MEN DISPLAY' date='June 6, 2024'/>
</div>
{/* card2 */}
<div>
   <HighlightCard image={H2.src} title='ARSENAL STAY TOP, TEN HEN MEN DISPLAY' date='June 7, 2024'/>
</div>
{/* card3 */}
<div>
   <HighlightCard image={H3.src} title='ARSENAL STAY TOP, TEN HEN MEN DISPLAY' date='June 8, 2024'/>
</div>
{/* card4 */}
<div>
   <HighlightCard image={H4.src} title='ARSENAL STAY TOP, TEN HEN MEN DISPLAY' date='June 9, 2024'/>
</div>

        </div>
    </div>
  )
}

export default MatchHighlight