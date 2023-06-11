import logo from '../../../assets/logo.svg'
import Image from "next/image"
import { LandingHeroEffects } from './LandingHeroEffects'
import 'animate.css'
import { DefaultButton } from '@/components/Buttons/DefaultButton'

export const LandingHero = () => {
    return (
        <section className="flex justify-center bg-zinc-50 p-12 md:p-28">
            <span className="
                w-14 
                h-28
                md:w-32 
                md:h-64 
                rounded-full 
                rounded-l-none 
                bg-primary 
                absolute 
                left-0
                animate__animated animate__bounceInLeft"></span>

            <div className="flex flex-col justify-center">
                <Image src={logo} alt='Logo da Eu Corrijo' className='z-40 w-8/12 md:w-96 m-auto my-8' />
                <LandingHeroEffects color='bg-fourth' position='left-2/4' />
                <LandingHeroEffects color='bg-secondary' position='right-1/2 top-12' />
                <LandingHeroEffects color='bg-primary' position='left-1/3 top-58' />

                <h1 className='
                    text-lg
                    md:text-3xl
                    m-auto 
                    text-third 
                    font-bold 
                    text-center'>Correções gratuitas e detalhadas de redações modelo Enem</h1>

                <div className="actions flex flex-col md:flex-row m-auto justify-between">
                    <DefaultButton type='button' style='primary text-white mx-6 mt-12 w-48' text='Cadastre-se' />
                    <DefaultButton type='button' style='fourth text-white mx-6 mt-12 w-48' text='Entrar' />
                </div>


            </div>

            <span className="
                    w-16 
                    h-52
                    md:w-24
                    md:h-60
                    rounded-full 
                    rounded-br-none 
                  bg-secondary 
                    absolute
                    right-0
                    top-0
                    animate__animated animate__bounceInDown"></span>

        </section>
    )
}
