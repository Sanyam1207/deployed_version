"use client"
import React from 'react'
import WobbleCardDemo from '@/component/acertinity/WobbleCard'
import { BentoGridDemo } from '@/component/acertinity/BentoGrid'
import SideBarComponent from '@/component/sidebar/sidebar'

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <SideBarComponent />
        <div className='flex-1 px-6 py-10 overflow-y-auto dark:bg-neutral-800'>
            <p className='text-neutral-300 font-sans font-bold ml-4 mb-8 text-3xl border-b-4 pb-2'>Latest And Trending Courses</p>
            <BentoGridDemo />
        </div>
    </div>
  )
}

export default Home