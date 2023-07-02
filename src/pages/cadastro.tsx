import { HeaderText } from "@/components/Text/HeaderText";
import Image from "next/image";
import logo from '../assets/logo.svg'
import { LoginForm } from "@/components/PrivateComponents/LoginPageComponents/LoginForm";


export default function Login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-fifth">
            <Image src={logo} alt="Logo da EuCorrijo" width={250} className="mb-5" />

            <div className="
            flex flex-col 
            bg-white 
            shadow-md 
            px-4 py-8
            sm:px-6 md:px-8 lg:px-10 
            rounded-2xl 
            w-11/12
            max-w-md 
            z-50">

                <HeaderText text="Entre na sua Conta" />

                <div className="mt-10">
                    <LoginForm />
                </div>

                <a href="" className="text-primary text-center hover:text-fourth">Ainda não tem uma conta?</a>

            </div>
        </div>
    )
}