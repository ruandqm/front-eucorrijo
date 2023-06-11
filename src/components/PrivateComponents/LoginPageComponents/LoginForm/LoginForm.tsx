import { DefaultButton } from '@/components/Buttons/DefaultButton'
import React from 'react'
import { EmailInput } from '../LoginInputs/EmailInput'
import { PasswordInput } from '../LoginInputs/PasswordInput'

export const LoginForm = () => {
    return (
        <form action="#">
            <div className="flex flex-col mb-6">

                <label htmlFor="email" className="
                mb-1 
                text-xs 
                sm:text-sm 
                tracking-wide 
                text-gray-600">Seu E-mail:</label>

                <EmailInput />
            </div>

            <div className="flex flex-col mb-6">

                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Sua Senha:</label>

                <PasswordInput />
            </div>

            <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                    <a href="#" className="inline-flex text-xs sm:text-sm text-primary hover:text-fourth">Esqueceu sua senha?</a>
                </div>
            </div>
            <DefaultButton type="submit" text="Entrar" style="primary mx-auto mb-6 w-full" />

        </form>
    )
}
