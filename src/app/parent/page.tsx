"use client"
import React from 'react'
import SideBar from '../../component/acertinity/SideBarParent'
import {BentoGridDemo} from '@/component/acertinity/WobbleCardTeacher'

const Home = () => {
  return (
    <SideBar components={<div className='flex align-middle '><BentoGridDemo /></div>}/>
  )
}

export default Home