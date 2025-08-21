import { Link } from 'react-router-dom'

type LinkProps = {
    text: string, 
    variant: "green" | "blue", 
    to: string
}

const BtnColor = ({ text, variant = "green", to }: LinkProps) => {
    return (
        <Link to={to} className={`button ${variant}`}>
            {text}
        </Link>
    )
}

export default BtnColor