'use client';
import React, { ReactNode, useEffect } from 'react'
import SideBar from './_components/SideBar'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import { Router } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function layout({children}: {children: ReactNode}) {
  const {user} = useUser();
  const router = useRouter()

  useEffect(() => {
    user&&checkUserBudget()
  },[user])

  // A function to check whether has a budget
  const checkUserBudget = async () => {


    const result = await db.select()
    .from(Budgets)
    .where(eq(Budgets.CreatedBy, user?.primaryEmailAddress?.emailAddress?? ""))

    console.log(result)

    // Changes the route back to dashboard page
    if(result?.length==0) {
      router.replace("/dashboard")
    }
  }
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
