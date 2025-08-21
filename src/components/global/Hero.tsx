type HeroProp = {
    title: string
}

const Hero = ({title} : HeroProp) => {
    return (
        <div id="bandeau">
            <h2>{title}</h2>
        </div>
    )
}

export default Hero