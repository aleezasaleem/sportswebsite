"use client"
import React,{useTransition,useState} from 'react'
import Image from 'next/image'


const AboutSection = () => {
    // const [tab,setTab]=useState("skills")
    // const [isPending,startTransition,]=useTransition()
    // const handleTabChange=(id)=>{
    //     startTransition(()=>{
    //         setTab(id)
    //     })
    // }
  return (
   
    <section className='text-white'><div className='md:grid md:grid-cols-2
    gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
       <Image src="/about-image.png" alt='image' width={500} height={500} />
       <div>
        <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>
I am full-stack web developer, I am proficient in both front-end and back-end technologies, capable of building complete web applications from start to finish. My skill set likely includes languages and frameworks like HTML, CSS, JavaScript (and popular libraries like React or Angular), as well as server-side languages like Node.js, Python, Ruby, or PHP, and database technologies</p>
<div className='flex flex-row mt-8 text-white'>
    
    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer border-b border-purple-500  '>Skills</span>
    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer border-b border-purple-500'>Education</span>
    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer border-b border-purple-500'>Experience</span>
</div>
<div className='mt-4 font-semibold'>
    <ul>
        <li>Node Js</li>
        <li>React Js</li>
        <li>Next Js</li>
        <li>Data Fetch</li>
        <li>Chat Gpt</li>
    </ul>
</div>

       </div>
        </div></section>
  )
}

export default AboutSection