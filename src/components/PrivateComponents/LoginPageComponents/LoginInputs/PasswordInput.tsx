import React from 'react'

export const PasswordInput = () => {
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

                <span>
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

            </div>

            <input id="password" type="password" name="password" placeholder="Senha" className="
            text-sm 
            sm:text-base 
            placeholder-gray-500 
            pl-10 
            pr-4 
            rounded-lg 
            border 
            border-gray-400 
            w-full 
            py-2 
            focus:outline-none 
            focus:border-fourth" />

        </div>
    )
}
