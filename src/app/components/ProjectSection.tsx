import React from 'react'
import ProjectCard from './ProjectCard'
import { title } from 'process'
import Image from 'next/image'

const projectdata =[
    {
        id:1,
        title:"React Portfolio Website",
        description:"Project 1 description",
        image:"/1.png",
        tag:["All","Web"],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id:2,
        title:"Photography Portfolio Website",
        description:"Project 2 description",
        image:"/2.png",
        tag:["All","Web"],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id:3,
        title:"E-Commerce Application",
        description:"Project 3 description",
        image:"/3.png",
        tag:["All","Web"],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id:4,
        title:"Food Odering Application",
        description:"Project 4 description",
        image:"/4.png",
        tag:["All","Web"],
        gitUrl:'/',
        previewUrl:'/'
    },
    {
        id:5,
        title:"React Firebase Template",
        description:"Authentications and CRUD operations",
        image:"/5.png",
        tag:["All","Web"],
        gitUrl:'/',
        previewUrl:'/'
    }, {
        id:6,
        title:"Full Stack Roadmap",
        description:"Project 5 description",
        image:"/6.png",
        tag:["All","Web"],
        gitUrl:'/',
        previewUrl:'/'
    }
]

const ProjectSection = () => {
  return (
    <>
   <h2 className='text-centre text-white text-4xl font-bold mt-4 md:text-center mb-7'>My Projects</h2>

<div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
    <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>All</button>
    <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>Web</button>
    <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer'>Mobile</button>
</div>


   <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
    {projectdata.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description}
   imgUrl={project.image} tag={project.tag}
   gitUrl={project.gitUrl}
   previewUrl={project.previewUrl} />
   )}</div>
   </>
  )
}

export default ProjectSection