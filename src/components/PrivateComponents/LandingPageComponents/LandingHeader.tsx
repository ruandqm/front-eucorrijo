import Logo from '../../../../public/favicon.ico'
import Image from 'next/image'

export const LandingHeader = () => {
    return (
        <header className='relative px-5 py-3 bg-fifth opacity-90 shadow shadow-zinc-300 w-full backdrop-blur z-50'>
            <Image src={Logo} className='w-16' alt="logo da Eu Corrijo" />
        </header>
    )
}
