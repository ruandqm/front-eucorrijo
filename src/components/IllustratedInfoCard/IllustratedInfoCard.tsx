import Image from "next/image"

export const IllustratedInfoCard = (props: { image: string, imgAlt: string, text: string }) => {
    return (
        <article className="flex flex-col items-center justify-center max-w-xl gap-5 align-middle bg-slate-50 p-5 rounded-xl">
            <Image src={props.image} alt={props.imgAlt} className="h-60" />
            <p className="text-md text-center w-80 h-32">{props.text}</p>
        </article>
    )
}