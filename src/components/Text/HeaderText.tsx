export const HeaderText = (props: { text: string, alignment?: string }) => {
    return (
        <h1 className="
        text-xl
        md:text-3xl
        font-bold
        text-center
        ">{props.text}</h1>
    )
}