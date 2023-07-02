import { ReactNode } from "react"

interface iFieldIconProps {
    icon: ReactNode,
    position: "left" | "right",
    action?: () => void,
    custom?: string
}

export const FieldIcon = (props: iFieldIconProps) => {

    const handleClick = () => {
        props.action ? props.action() : null
    }

    return (
        <div className={`
            inline-flex 
            items-center 
            justify-center 
            absolute 
            ${props.position}-0
            top-0 
            h-full w-10 
            text-gray-400
            text-xl 
            ${props.custom}
        `}
            onClick={() => handleClick()}
        >
            {props.icon}
        </div>
    )
}