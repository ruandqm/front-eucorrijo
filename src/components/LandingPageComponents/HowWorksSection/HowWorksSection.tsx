import { HeaderText } from "@/components/Text/HeaderText"
import FillForm from "../../../assets/LandingAssets/fillForm.svg"
import AddEssay from "../../../assets/LandingAssets/addEssay.svg"
import Done from "../../../assets/LandingAssets/done.svg"
import { IllustratedInfoCard } from "@/components/IllustratedInfoCard/IllustratedInfoCard"

export const HowWorksSection = () => {
    return (
        <section className="HowWorksSection flex justify-center items-center gap-10 flex-col my-10">
            <HeaderText text="Como Funciona" />

            <div className="cards flex justify-center items-center max-w-7xl gap-10 lg:flex-row flex-col">
                <IllustratedInfoCard image={FillForm} imgAlt="vetor representando o processo de cadastro"
                    text="É só você realizar o seu cadastro rápido e fácil na plataforma da Eu Corrijo e você receberá, automaticamente,
                    créditos para enviar até duas redações GRATUITAS por mês!" />

                <IllustratedInfoCard image={AddEssay} imgAlt="vetor representando o envio de uma redação"
                    text="Depois de fazer o cadastro, é só fazer login com a sua conta e clicar 'enviar uma redação' e adicionar o tema e 
                    a foto da sua redação. Após isso, sua redação será corrigida por nós!" />

                <IllustratedInfoCard image={Done} imgAlt="vetor representando uma redação corrigida"
                    text="Após enviar sua redação, é só ficar de olho que em até 5 dias úteis nós enviamos a sua correção personalizada DE GRAÇA!" />
            </div>

        </section>
    )
}
