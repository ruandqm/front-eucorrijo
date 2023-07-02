import { ReactNode } from "react"

interface iFieldInputProps {
    type: 'text' | 'number' | 'email' | 'password',
    placeholder: string,
    children?: ReactNode
}

export const FieldInput = (props: iFieldInputProps) => {
    return (
        <div className="relative">
            <input
                id={props.type}
                type={props.type}
                name={props.type}
                placeholder={props.placeholder}
                className="
                text-sm sm:text-base 
                placeholder-gray-500 
                pl-10 pr-4 py-2
                rounded-lg 
                border 
                border-gray-400 
                w-full  
                focus:outline-none 
                focus:border-fourth"
            />

            {props.children}
        </div>
    )
}