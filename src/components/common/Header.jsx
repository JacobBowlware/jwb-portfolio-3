// React
import React, { useState } from 'react';

// Icons
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="web-container">
            <nav className="navbar navbar-expand-sm">
                <div className="nav-icons__container">
                    <a className="nav-item nav-link nav-link__main" href="/#hero">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                    <div>
                        <a className="nav-icons__item" href="https://github.com/JacobBowlware" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="nav-icons__item" href="https://www.linkedin.com/in/jacob-bowlware-730824246/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
                <button
                    className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    <FontAwesomeIcon className="nav-toggler-icon" icon={navOpen ? faXmark : faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/#about">About</a>
                        <a className="nav-item nav-link" href="/#skills">Skills</a>
                        <a className="nav-item nav-link" href="/#projects">Projects</a>
                        <a className="nav-item nav-link" href="/#links">Links</a>
                        <a className="nav-item nav-link nav-icon" href="https://github.com/JacobBowlware" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="nav-item nav-link nav-icon" href="https://www.linkedin.com/in/jacob-bowlware-730824246/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;