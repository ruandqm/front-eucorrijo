import { ReactNode } from "react"

interface iFieldRootProps {
    children: ReactNode
}

export const FieldRoot = ({ children }: iFieldRootProps) => {
    return (
        <div className="flex flex-col mb-6">
            {children}
        </div>
    )
}