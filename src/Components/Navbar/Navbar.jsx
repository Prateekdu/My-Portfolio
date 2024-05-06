import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleDownload = () => {
    const resumeFilePath = './assets/images/Prateek-Dubey.pdf'; // Update with your file path
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = 'Prateek-Dubey.pdf'; // Specify the desired filename
    link.click();
  };

  

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h2 className='logo'>Portfolio</h2>
          {/* <img className='logo' src="./assets/images/logo" alt="" /> */}
          <ul>
            <li><Link  to="Hero" smooth={true} duration={400}  className='menu-item'  >Home</Link></li>
            <li><Link to="Skills" smooth={true} duration={400} className="menu-item" >Skills</Link></li>
            <li><Link to="WorkExperience" smooth={true}  duration={400} className="menu-item"  >Work Experience</Link></li>
            <li><Link to="Project" smooth={true} duration={400} className="menu-item" >Project</Link></li>
            <li><Link to="ContactMe" smooth={true} duration={400} className="menu-item" >Contact Me</Link></li>
            <button className='contact-btn' onClick={handleDownload}>Resume</button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.5rem" }}>
             
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar