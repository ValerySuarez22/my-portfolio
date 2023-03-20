import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook, faFile} from '@fortawesome/free-brands-svg-icons';
import cv from "../assets/CV-valery.pdf";
import { faFile } from '@fortawesome/free-solid-svg-icons'
import '../styles/contact.css'

function Contact() {
    const [links, setLinks] = useState({
        gmail: 'mailto:valerysuarez2296@gmail.com',
        linkedin: 'https://www.linkedin.com/in/tu-perfil',
        github: 'https://github.com/tu-usuario',
        instagram: 'https://www.instagram.com/tu-usuario/'
    })

    const handleLinkClick = (link) => {
        window.open(link, '_blank')
    }

    return (
        <section id='ccontact' className="sectionContact">
          <h1 className="title-c">Work</h1>
            <div className="redes">
          <a href="https://github.com" target="_blank" className='buttons' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" className='buttons' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com" target="_blank" className='buttons' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="mailto:valerysuarez2296@gmail.com" target="_blank" className='buttons' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={cv} target="_blank" className='buttons' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFile} />
          </a>    
</div>
        </section>
    )
}

export default Contact;
