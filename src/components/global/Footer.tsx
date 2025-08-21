import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import BtnSocial from '../buttons/BtnSocial';

const Footer = () => {
    return(
        <footer>
            <div>
                <div>
                    <Link to="/" className="name">Elise LIAUTAUD</Link>
                    <p>Développeuse Web Front-End & Designer UI/UX</p>
                </div>
                <div>
                    <div id="icone-container">
                        <BtnSocial to='https://github.com/elise-kinn' icon={<FaGithub />}/>
                        <BtnSocial to='/' icon={<FaLinkedinIn />}/>
                    </div>
                    
                    <p>© 2025 Elise LIAUTAUD. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer