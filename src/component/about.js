import React, { useEffect } from 'react';
import Home from './home';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className='container about-container' data-aos="fade-up-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">
      <Home />
      <span className='about-header'>About Me</span> <br />
      <span className='about-content'>I graduated from East Tennessee State University in May of 2022 with a bachelor's degree in computing and a concentration in Information Technology. I am most passionate about family, friends, and continuous learning. I currently reside in Elizabethton, Tennessee and will be relocating in July to Knoxville, Tennessee. I am a hard worker and a fast learner with a goal of finding a career in software engineering!</span>
    </div>
  )
}

export default About;