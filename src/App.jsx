// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';
import Project from './Components/Project/Project';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import {  Element, scroller } from 'react-scroll';
function App() {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
     
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
    
    <Navbar/>
     <div className="container">
     <Element name="Hero" className="element">
     <Hero/>
     </Element>
     <Element name="Skills" className="element">
     <Skills/>
        </Element>
     
     <Element name="WorkExperience" className="element">
     <WorkExperience/>
        </Element>
     
     <Element name="Project" className="element">
     <Project/>
        </Element>
    
     <Element name="ContactMe" className="element">
     <ContactMe/>
        </Element>
     
     
     </div>
     <Footer/>
    </>
   
  );
}

export default App;
