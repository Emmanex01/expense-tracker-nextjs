import { SignedOut } from '@clerk/nextjs'
import React from 'react'

export default function Hero() {
  return (
    <div>
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                    Understand Your Spending.

                    <span className="sm:block"> Control Your Finance. </span>
                </h1>

                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                    Start budgeting today and discover the power of saving big! Take control of your finances and achieve your goals with a clear plan
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <SignedOut>
                            <a
                                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/dashboard"
                            >
                            Get Started
                            </a>
                    </SignedOut>
                    
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
