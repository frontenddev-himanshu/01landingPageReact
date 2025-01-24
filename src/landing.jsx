import Button from "./button";
import Allbtn from "./allbtn";

function Landing() {

    // let hamburger = document.querySelector('.nav-hamburger');

    // let navLinks = document.querySelector('.nav-links');

    // let open = 0;

    // hamburger.addEventListener('click', () => {

    //     if (open == 0) {
    //         navLinks.style.top = "7vh";
    //         navLinks.style.opacity = "1";
    //         open = 1;
    //     } else {
    //         navLinks.style.top = "9vh";
    //         navLinks.style.opacity = "0";
    //         open = 0;
    //     }
    // });


    return (
        <>
            <div className="landing-container">
                <div className="navbar-container">
                    <nav className="navbar">
                        <div className="logo">
                            <h2 className="brand"><span>RE</span>VO STUDIO</h2>
                        </div>
                        <div className="nav-links">
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
                        <div className="nav-hamburger">
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
                        <p className="about">The most importent things are not things, so we'll desgine experiences</p>
                        <div className="btn-query">
                            <Allbtn />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;  