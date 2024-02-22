import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Achievements from './components/Achievements'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'



const page = () => {
  return (
   <main className='flex min-h-screen flex-col bg-[#121212]  '>
    <Navbar />
    <div className='container mt-24 mx-auto px-12 py-4'>
      
    <HeroSection />
    <Achievements />
    <AboutSection />
    <ProjectSection />
    <EmailSection />
   

    </div>
    <Footer />
  
    

   </main>
  )
}

export default page