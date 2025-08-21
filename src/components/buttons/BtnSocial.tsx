import { Link } from 'react-router-dom'

type BtnSocialProp = {
    icon: React.ReactNode, 
    to: string, 

}

const BtnSocial = ({icon, to}: BtnSocialProp ) => {
    return (<Link to={to} target="_blank">{icon}</Link>)
}

export default BtnSocial