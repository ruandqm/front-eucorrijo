export const DefaultButton = (props: { text: string, style: string }) => {
    return (
        // <button className={`bg-${props.style} p-3 rounded-xl`}>{props.text}</button>
        <button className={`group mx-6 mt-12 rounded-2xl h-12 w-48 bg-${props.style} font-bold text-lg text-white relative overflow-hidden`}>
            {props.text}
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
            </div>
        </button>
    )
}