export const LandingHeroEffects = (props: { color: string, position: string }) => {
    return (
        <span className={`
        w-32
        h-32 
        md:w-60
        md:h-60
        rounded-full 
        ${props.color}
        absolute 
        blur-xl
        ${props.position}
        opacity-20
        `}>
        </span>
    )
}
