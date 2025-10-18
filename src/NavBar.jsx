import './NavBar.css';
import logo from "../src/logo.png";
import menu from "../src/menu.png";
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [sticky, setSticky] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

     

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className={`menu ${isMenuActive ? 'mobile-menu-active' : ''}`}>
                <li>
                    <Link to="Company" smooth={true} offset={0} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="About" smooth={true} offset={-260} duration={500}>About us</Link>
                </li>
                <li>
                    <Link to="Cities" smooth={true} offset={-150} duration={500}>Cities</Link>
                </li>
                <li>
                    <Link to="winter" smooth={true} offset={-260} duration={500}>Travel</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={-260} duration={500}>
                        <button className='btn'>Contact Us</button>
                    </Link>
                </li>
            </ul>
            <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    );
}

export default NavBar;




