import React from 'react'
//images
//stiles
import '../style/Contact.css'
const Contact = () => {


    return (
        <div className='section_contact'>
            <div className='section_contact-title text-center'>
                <h2> Contáctame</h2>
                <p>Y pongámonos manos a la obra </p>
            </div>
            <div className="sns-links">
                    <a href="https://www.linkedin.com/in/cristian-andres-correa-alvarez-30034820a/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://twitter.com/cristia95349399" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/cristian.correa.5851127" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    <a href="https://github.com/cristian-cor" target="_blank" rel="noreferrer">
                        <i className="fa-brands github fa-github"></i>
                    </a>
                </div>
        </div>
    )
}

export default Contact