import React from 'react'
import "./MobileNav.css";
import { Link } from 'react-scroll';
const MobileNav = ({isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <h2 className='logo'>Portfolio</h2>
                    <ul>
                        <li><Link  to="Hero" smooth={true} duration={800} className='menu-item'>Home</Link></li>
                        <li><Link  to="Skills" smooth={true} duration={800}  className="menu-item">Skills</Link></li>
                        <li><Link  to="WorkExperience" smooth={true} duration={800} className="menu-item">Work Experience</Link></li>
                        <li><Link  to="ContactMe" smooth={true} duration={800} className="menu-item">Contact Me</Link></li>
                        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default MobileNav