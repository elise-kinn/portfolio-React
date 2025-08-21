import { Link, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const location = useLocation().pathname
    return (
        <header>
            <div>
                <Link to='/' className='name'>Elise LIAUTAUD</Link>
                <nav>
                    <ul>
                        <li><Link className={location === '/' ? "pink" : ""} to='/'>Accueil</Link><div /></li>
                        <li><Link className={location === '/about' ? "pink" : ""} to='/about'>À propos</Link><div /></li>
                        <li><Link className={location === '/projects' ? "pink" : ""} to='/projects'>Projets</Link><div /></li>
                        <li><Link className={location === '/contact' ? "pink" : ""} to='/contact'>Contact</Link><div /></li>
                    </ul>
                    <RxHamburgerMenu className='burger'/>
                </nav>
            </div>
        </header>
    )
}

export default Header