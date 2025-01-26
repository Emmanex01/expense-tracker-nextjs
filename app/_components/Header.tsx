import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Header() {
  return (
    <div className='p-5 flex justify-between border shadow-md'>
        <img 
            src="/logo.svg" 
            alt="" 
            width={100}
            height={50}
        />
        <SignedOut>
          {/* <Button
              variant="outline" 
          >
              <SignInButton/>
          </Button> */}
           <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
       
    </div>
  )
}
