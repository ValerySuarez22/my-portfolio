import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/contact.css'

function Contact() {
    const [links, setLinks] = useState({
        gmail: 'mailto:correo@gmail.com',
        linkedin: 'https://www.linkedin.com/in/tu-perfil',
        github: 'https://github.com/tu-usuario',
        instagram: 'https://www.instagram.com/tu-usuario/'
    })

    const handleLinkClick = (link) => {
        window.open(link, '_blank')
    }

    return (
        <section id='ccontact' className="sectionskills">
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

          <button class="boton-scroll"><i class="fa fa-angle-down"></i> Ver más</button>

        </div>
        </section>
    )
}

export default Contact;
