
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const EmailSection = () => {
  return (
    <section className='grid  md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        
        <div className=''>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7Be] mb-4 max-w-md'>{" "}
            I am currenty looking for new opportunities,my inbox is alway open.
            whether you have a question or just want to say hi, I'll try my best and get 
            to back to you!</p>
            <div className='socials flex flex-row gap-2'>
                <Link  href='github.com'>
                    <FaGithub  className='text-white text-[50px]' />
                </Link>
                <Link href='linkedin.com'>
                    <FaLinkedin className='text-white text-[50px]' />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col '>
                <div className='mb-6'>
                <label htmlFor='email'  className='text-white block mb-2  text-sm font-medium '>Your Email</label>
                <input type='email' id='email' required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg
                block w-full p-2.5'
                placeholder='aleeza182@gmail.com' /></div>
                <div>
                
                <label htmlFor='subject'  className='text-white block  text-sm mb-2 font-medium '>Subject</label>
                <input type='text' id='subject' required
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg
                block w-full p-2.5'
                placeholder='just saying hi!' /></div>

                <div className='mb-6'>
                    <label htmlFor='message ' className='text-white block text-sm mb-2 font-medium'>Message
                    </label>
                    <textarea name='message' id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                    text-grey-100 text-sm rounded-lg w-full p-2.5 ' 
                    placeholder='lets talk about...'>

                    </textarea>
                </div>
                <button type='submit'
                className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg 
                w-full'
                >Send Message</button>

            </form>
        </div>
    </section>
  )
}

export default EmailSection