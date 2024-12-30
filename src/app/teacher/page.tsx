"use client"
import React from 'react'
import SideBar from '../../component/acertinity/SideBarTeacher'
import {BentoGridDemo} from '@/component/acertinity/WobbleCardTeacher'

const Home = () => {
  return (
    <SideBar components={<div className='flex align-middle '><BentoGridDemo /></div>}/>
  )
}

export default Home