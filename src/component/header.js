import React, { useEffect } from "react";
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <div id='home' className="container header-container" data-aos="fade-up" data-aos-duration="2000">
            <span className="headerSpan">I'm</span>
            <span className="headerSpan">Taylor Tillman</span>
            <span className="headerSpan">Front-End Web Developer</span>
        </div>
    );
}

export default Header;