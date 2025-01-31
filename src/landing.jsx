import { useState } from 'react';
import Button from "./button";
import Allbtn from "./allbtn";

function Landing() {
    const [isOpen, setIsOpen] = useState(false); // state to track menu status

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState); // toggle menu open/close
    };

    return (
        <>
            <div className="landing-container">
                <div className="navbar-container">
                    <nav className="navbar">
                        <div className="logo">
                            <h2 className="brand"><span>RE</span>VO STUDIO</h2>
                        </div>
                        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                            <ul>
                                <li><a className="nav-home" href="#home">HOME</a></li>
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#services">SERVICES</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                                <div className="nav-btn-query">
                                    <Button />
                                </div>
                            </ul>
                        </div>
                        <div className="nav-hamburger" onClick={toggleMenu}>
                            <div className="hamburger">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="nav-btn">
                            <Button />
                        </div>
                    </nav>
                </div>

                {/* main page */}
                <div className="container">
                    <div className="content">
                        <p className="head-top">WE ARE CREATING NINJA</p>
                        <h1 className="head-btm">REVO STUDIO</h1>
                        <p className="about">The most important things are not things, so we design experiences</p>
                        <div className="btn-query">
                            <Allbtn />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
