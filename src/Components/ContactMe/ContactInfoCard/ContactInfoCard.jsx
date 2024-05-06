import React from 'react'
import "./ContactInfoCard.css"
// import { Link } from 'react-router-dom'

const ContactInfoCard = ({iconUrl,text,link,text1}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text}/>
        </div>
        <a href={`mailto:${text}`}>{text}</a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p>{text1}</p>
        </a>
        {/* <p>{text}</p> */}
    </div>
  )
}

export default ContactInfoCard