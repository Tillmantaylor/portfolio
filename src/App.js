import React from 'react';
import './App.css';
import Header from './component/header';
import Nav from './component/nav';
import About from './component/about';
import Footer from './component/footer';
import Contact from './component/contact';
import Projects from './component/projects';


function App() {
  return(
    <>
      <Nav />
      <div className="body-container">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
