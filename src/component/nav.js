import React, { useState } from "react";
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {MdOutlineAssignment} from 'react-icons/md';
import {BiMessageRoundedDots} from 'react-icons/bi';
import {BsArrowDownCircle} from 'react-icons/bs';
import './nav.css';
import { IconButton, Drawer } from "@mui/material";
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
    const [active, setActive] = useState(0);
    const [anchor, setAnchor] = useState(null);

    const handleActive = (value) => setActive(value);

    return (
        <>
            <div className="navigation">
                <a href="#home">
                    <AiOutlineHome className={`icon ${active === 0 ? 'active-nav' : ''}`} onClick={() => handleActive(0)} />
                </a>
                <a href="#about">
                    <AiOutlineUser className={`icon ${active === 1 ? 'active-nav' : ''}`} onClick={() => handleActive(1)} />
                </a>
                <a href="#projects">
                    <MdOutlineAssignment className={`icon ${active === 2 ? 'active-nav' : ''}`} onClick={() => handleActive(2)} />
                </a>
                <a href="#contact">
                    <BiMessageRoundedDots className={`icon ${active === 3 ? 'active-nav' : ''}`} onClick={() => handleActive(3)} />
                </a>
                <a href="#footer">
                    <BsArrowDownCircle className={`icon ${active === 4 ? 'active-nav' : ''}`} onClick={() => handleActive(4)} />
                </a>
            </div>
            <div className="hamburger-nav">
                <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
                    <GiHamburgerMenu className="hamburger-icon" />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={Boolean(anchor)}
                    onClose={() => setAnchor(null)}  
                    sx={{
                        "& .MuiDrawer-paper": {
                            background: "#EEEEEE",
                            gap: "12px",
                            paddingTop: "12px",
                        }
                    }}              
                >
                    <div className="hamburger-options">
                        <a href="#home">
                            <AiOutlineHome className={`icon ${active === 0 ? 'active-nav' : ''}`} onClick={() => handleActive(0)} />
                            <span>Home</span>
                        </a>
                    </div>
                    <div className="hamburger-options">
                        <a href="#about">
                            <AiOutlineUser className={`icon ${active === 1 ? 'active-nav' : ''}`} onClick={() => handleActive(1)} />
                            <span>About</span>
                        </a>
                    </div>
                    <div className="hamburger-options">
                        <a href="#projects">
                            <MdOutlineAssignment className={`icon ${active === 2 ? 'active-nav' : ''}`} onClick={() => handleActive(2)} />
                            <span>Projects</span>
                        </a>
                    </div>
                    <div className="hamburger-options">
                        <a href="#contact">
                            <BiMessageRoundedDots className={`icon ${active === 3 ? 'active-nav' : ''}`} onClick={() => handleActive(3)} />
                            <span>Contact</span>
                        </a>
                    </div>
                    <div className="hamburger-options">
                        <a href="#footer">
                            <BsArrowDownCircle className={`icon ${active === 4 ? 'active-nav' : ''}`} onClick={() => handleActive(4)} />
                            <span>Footer</span>
                        </a>
                    </div>
                </Drawer>
            </div>
        </>
    );
}

export default Nav;