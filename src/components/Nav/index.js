import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinks } from '../../config.json';
import './style.scss';

export default function Nav() {
    const [isMenuActive, setMenuClass] = useState(false);
    function handleClick() {
        setMenuClass(!isMenuActive);
    }

    return (
        <nav className={isMenuActive ? 'active' : 'in-active'}>
            <div className="logo-wrapper">RK</div>
            <div className="ham-menu" onClick={handleClick }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
            {
                navLinks.map((nav, index) => {
                    return <li key={index}><Link to={nav.url} spy={true} smooth={true} duration={500} offset={-95}>{nav.name}</Link></li>
                })
            }
            </ul>
        </nav>
    )
}