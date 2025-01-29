'use client';
import React from 'react';
import { MdDashboard } from "react-icons/md";
import { LuRabbit } from "react-icons/lu";
import { SiExpensify } from "react-icons/si";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link  from 'next/link';

const SideBar = () => {
    const menus = [
        {
            id: 1,
            name: "Dashboard",
            Icon: MdDashboard,
            path: "/dashboard"
        },
        {
            id: 2,
            name: "Budget",
            Icon: LuRabbit,
            path: "/dashboard/budgets"
        },
        {
            id: 3,
            name: "Expenses",
            Icon: SiExpensify,
            path: "/dashboard/expenses"
        },
        {
            id: 4,
            name: "Upgrade",
            Icon: IoShieldCheckmarkOutline,
            path: "/dashboard/upgrades"
        },
    ];

    const params = usePathname();
  return (
    <div>
      <img 
            src="/logo.svg" 
            alt="" 
            width={100}
            height={50}
            className='p-5'
        />
        <div>
            {menus.map((menu, index) => (
            <Link href={menu.path}>
                <h1 key={menu.id} className={`flex gap-2 items-center rounded-md text-gray-500 font-medium p-4 hover:text-primary hover:bg-blue-100 ${menu.path == params && "bg-blue-100"}`}>
                        <menu.Icon/>
                        {menu.name}
                </h1>
            </Link>
            ))}
        </div>
        <div className='flex gap-2 items-center p-5 fixed bottom-10'>
            <UserButton/>
            Profile
        </div>
    </div>
  )
}

export default SideBar
