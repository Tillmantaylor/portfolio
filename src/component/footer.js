import React from 'react';
import { BsGithub, BsLinkedin} from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <div id='footer' className='container footer-container'>
        <div className='socials'>
            <a rel="norefferer noopener" target="_blank" href='https://github.com/Tillmantaylor'>
                <BsGithub className='social-icon'/>
            </a>
            <a rel="norefferer noopener" target="_blank" href='https://www.linkedin.com/in/taylor-tillman-8833b0235'>
                <BsLinkedin className='social-icon'/>
            </a>
        </div>
    </div>
  )
}

export default Footer