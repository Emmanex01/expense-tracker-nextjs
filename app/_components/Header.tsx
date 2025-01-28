'use client'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React from 'react'

export default function Header() {
  const {user, isSignedIn} = useUser();

  return (
    <div className='p-5 flex justify-between border shadow-md'>
        <img 
            src="/logo.svg" 
            alt="" 
            width={100}
            height={50}
        />

        { isSignedIn ? 
          
          <UserButton/> : 
          <Link href="/dashboard">
              <Button
                variant="outline" 
              >
                  Get Started
            </Button>
          </Link>
          

        }
        {/* <SignedOut>
          <Button
              variant="outline" 
          >
              <SignInButton/>
         </Button>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn> */}
       
    </div>
  )
}
