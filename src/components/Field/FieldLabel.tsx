interface iFieldLabelProps {
    text: string
}

export const FieldLabel = (props: iFieldLabelProps) => {
    return (
        <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">{props.text}</label>
    )
}