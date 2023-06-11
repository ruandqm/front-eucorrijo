import { HeaderText } from '@/components/Text/HeaderText'
import IsFreeBanner from '../../../../assets/LandingAssets/IsFreeBanner.png'
import Image from 'next/image'

export const IsFreeSection = () => {
    return (
        <section className="IsFreeSection flex justify-center max-w-6xl mx-auto mb-10 items-center gap-10 flex-col lg:flex-row bg-slate-50 p-5 rounded-xl">
            <Image className='w-2/3 md:w-1/2' src={IsFreeBanner} alt="banner falando que a Eu Corrijo é grátis" />
            <div className="description justify-center text-justify text-lg flex flex-col gap-5">
                <HeaderText text="Por que gratuito?" />
                <p className='mt-4'>Nós acreditamos que todos devem ter acesso a uma educação de qualidade. Portanto, não admitimos que apenas pessoas que tenham condições de pagar altos valores
                    possam desfrutar de uma boa preparação para a redação do ENEM.
                </p>
                <p>
                    A Eu Corrijo se propõe a entregar correções detalhadas, eficazes e gratuitas, para que todos possam ter acesso a correções de qualidade. Nós seguimos
                    rigorosamente o modelo de correção do ENEM e estamos dispostos a te ajudar nessa jornada de preparação sem cobrar nenhum centavo por isso!
                </p>
            </div>

        </section>
    )
}
