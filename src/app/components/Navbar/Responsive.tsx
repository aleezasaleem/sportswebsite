'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import Mobile from './Mobile'

function Responsive() {
  const [showNav,setshownav]=useState(false)
  const openNavHandler=()=>setshownav(true)
  const closeNavHandler=()=>setshownav(false)
  return (
    <div>
        <Nav openNav={openNavHandler} />
        <Mobile nav={showNav} close={closeNavHandler} />
    </div>
  )
}

export default Responsive