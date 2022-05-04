import React from "react";
import img from '../assets/self.jpg';
import './home.css';
import { DiCss3, DiHtml5, DiJavascript, DiJava, DiNetmagazine, DiReact } from 'react-icons/di';


const Home = () => {
    return (
        <div className="container home-container">
            <div className="logo">
                <div className="techIcons Left">
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
                        className="html"
                    >
                        <DiHtml5 />
                    </a>
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                        className="css"
                    >
                        <DiCss3 style={{ transform: "translate(-25px, 0px)"}}/>
                    </a>
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank"
                        href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                        className="js"
                    >
                        <DiJavascript  />    
                    </a>  
                </div>
                <img src={img} className="splash-image" alt='Taylor Tillman'></img>
                <div className="techIcons Right">
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        href='https://docs.oracle.com/en/java/'
                        className="java"
                    >
                        <DiJava />
                    </a>
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        href='https://docs.microsoft.com/en-us/dotnet/'
                        className="net"
                    >
                        <DiNetmagazine style={{ transform: "translate(25px, 0px)"}}/>
                    </a>
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        href='https://reactjs.org/docs/getting-started.html'
                        className="react"
                    >
                        <DiReact />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;