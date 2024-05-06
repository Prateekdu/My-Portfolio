import React from 'react'
import "./ContactMe.css"
// import { Link } from 'react-router-dom';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
    return (
        <section id="ContactMe" className="contact-container">
            <h5>Contact Me</h5>
            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="./assets/images/e1.png"
                        text="prateekdubey19999@gmail.com"
                        // link="prateekdubey903@gmail.com"
                    />
                    
                    
                    <ContactInfoCard
                        iconUrl="./assets/images/l4.png"
                        text1="LinkedIn Profile"
                        link="https://www.linkedin.com/in/prateek-dubey-b489511a9"
                    />                  
           
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default ContactMe