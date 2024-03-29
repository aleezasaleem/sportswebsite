import Link from 'next/link'
import React from 'react'
interface Props{
    hideModel:()=>void
}

function Model({hideModel}:Props) {
  return (
    <div className='relative'>
        {/* overlay model */}
        <div onClick={hideModel} className='fixed top-0 right-0 left-0 bottom-0 bg-[#000000e1] z-[20]'></div>
        {/*main model  */}
        <div className='fixed top-[50%] left-[50%] w-[350px] h-[250px]
        md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[500px] z-[21] translate-x-[-50%]
        translate-y-[-50%]'>
           <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
      ></iframe>
        </div>
    </div>
  )
}

export default Model