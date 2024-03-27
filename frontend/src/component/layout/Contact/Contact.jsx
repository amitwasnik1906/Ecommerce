import React from 'react'
import "./Contact.css"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
    return (
        <div className='containerBox'>
            <div className='box'>
                <span>Created By</span>
                <div className='name'>Amit Wasnik</div>
                <div className='links'>
                    <div>
                        <EmailIcon />
                        <a href="tel:+">7498013803</a>
                    </div>
                    <div>
                        <PhoneIcon />
                        <a href="mailto:amitwasnik1906@gmail.com">amitwasnik1906@gmail.com</a>
                    </div>
                    <div>
                        <GitHubIcon />
                        <a href="https://github.com/amitwasnik1906" target='_blank' rel="noreferrer">https://github.com/amitwasnik1906</a>
                    </div>
                    <div>
                        <LinkedInIcon />
                        <a href="https://www.linkedin.com/in/amit-wasnik-55448a263" target='_blank' rel="noreferrer">Amit Wasnik</a>
                    </div>
                    <div>
                        <InstagramIcon />
                        <a href="https://www.instagram.com/amit__1906/" target='_blank' rel="noreferrer">amit__1906</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact
