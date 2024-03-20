import {Link, NavLink} from "react-router-dom";
import './Navbar.css';
import logoMedium from "../../assets/logo-medium.png";
const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-img-logo">
                    <img src={logoMedium} alt="Blogventure logo"/>
                </div>
                <ul className="navbar-ul">
                    <li><NavLink to="/"
                                 className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item-default'}
                    >Home</NavLink></li>
                    <li><NavLink to="/blogs"
                                 className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item-default'}
                    >Alle posts</NavLink></li>
                    <li><NavLink to="/add-blog"
                                 className={({isActive}) => isActive ? 'nav-item-active' : 'nav-item-default'}
                    >Nieuwe post maken</NavLink></li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;