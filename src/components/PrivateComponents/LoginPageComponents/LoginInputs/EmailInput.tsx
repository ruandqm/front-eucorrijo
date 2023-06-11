import React from 'react'

export const EmailInput = () => {
    return (
        <div className="relative">

            <div className="
            inline-flex 
            items-center 
            justify-center 
            absolute 
            left-0 top-0 
            h-full w-10 
            text-gray-400">

                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>

            </div>

            <input id="email" type="email" name="email" placeholder="E-Mail" className="
            text-sm sm:text-base 
            placeholder-gray-500 
            pl-10 pr-4 py-2
            rounded-lg 
            order 
            border-gray-400 
            w-full  
            focus:outline-none 
            focus:border-fourth"/>

        </div>
    )
}
