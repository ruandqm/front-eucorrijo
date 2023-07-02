import { useRouter } from "next/router"

export const DefaultButton = (props:
    {
        text: string,
        style: string,
        type: "button" | "submit" | "reset" | undefined,
        action?: "link" | "function" | "none",
        link?: string,
        function?: Function
    }) => {

    const router = useRouter()

    const handleClick = () => {
        switch (props.action) {
            case "link":
                props.link != undefined ? router.push(props.link) : null
                break
            case "function":
                props.function != undefined ? props.function() : null
                break
            case "none":
                break
        }
    }

    return (
        <button
            onClick={() => handleClick()}
            type={props.type}
            className={`group rounded-2xl h-12 bg-${props.style} font-bold text-lg text-white relative overflow-hidden`}>
            {props.text}
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
            </div>
        </button>
    )
}