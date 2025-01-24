import Button from "./button";

function Navbar() {

    const hamburger = document.querySelector('.nav-hamburger');

    const navLinks = document.querySelector('.nav-links');
    
    let open = 0;

    hamburger.addEventListener('click', () => {

        if (open == 0) {
            navLinks.style.right = '0';
            open = 1;
        } else {
            navLinks.style.right = '-100%';
            open = 0;
        }
    });




    return (
        <>
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



        </>
    )
}

export default Navbar;  