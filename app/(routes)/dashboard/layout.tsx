import React, { ReactNode } from 'react'
import SideBar from './_components/SideBar'
import DashboardHeader from './_components/DashboardHeader'

export default function layout({children}: {children: ReactNode}) {
  return (
    <div>
      <div className='fixed shadow-md md:w-64 hidden md:block h-screen'>
        <SideBar/>
      </div>
      <div className=' ml-64'>
        <DashboardHeader/>
        {children}
      </div>
    </div>
  )
}
