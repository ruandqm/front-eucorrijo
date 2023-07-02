import { DefaultButton } from '@/components/Buttons/DefaultButton'
import React, { useState } from 'react'
import { Field } from '@/components/Field'
import { MdAlternateEmail, MdVisibility, MdVisibilityOff, MdLock } from 'react-icons/md'

export const LoginForm = () => {

    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const changePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    return (
        <form action="#">
            <Field.Root>
                <Field.Label text='Seu E-mail' />
                <Field.Input type='email' placeholder='E-mail'>
                    <Field.Icon icon={<MdAlternateEmail />} position='left' />
                </Field.Input>
            </Field.Root>

            <Field.Root>
                <Field.Label text='Sua senha' />
                <Field.Input type={passwordVisibility ? 'text' : 'password'} placeholder='Senha'>
                    <Field.Icon icon={<MdLock />} position='left' />
                    <Field.Icon
                        icon={passwordVisibility ? <MdVisibilityOff /> : <MdVisibility />}
                        position='right' action={changePasswordVisibility}
                        custom='cursor-pointer' />
                </Field.Input>
            </Field.Root>

            <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                    <a href="#" className="inline-flex text-xs sm:text-sm text-primary hover:text-fourth">Esqueceu sua senha?</a>
                </div>
            </div>
            <DefaultButton type="submit" text="Entrar" style="primary mx-auto mb-6 w-full" />

        </form>
    )
}
