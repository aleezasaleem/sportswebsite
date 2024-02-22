// import { link } from 'fs'
import React from 'react'
import Navlinks from './NavLinks'

const MenuOverlay = ({links }) => {
  return (
 

     <ul className='flex flex-col py-4 items-center'>{links.map((link,index)=>(
     <li key={index}>
     <Navlinks href={link.path} title={link.title} /></li>))}</ul>
  )
}

export default MenuOverlay