import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

type LinkProps = {
    text: string, 
    to: string
}

const BtnFleche = ({text, to}: LinkProps) => {
    return (
        <Link to={to} className='link'>{text}<FaArrowRight className='arrow'/></Link>
    )
}

export default BtnFleche