import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FreelanceHeader = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="web-container">
            <nav className="navbar navbar-expand-sm">
                <div className="nav-icons__container">
                    <a className="nav-item nav-link nav-link__main" href="/freelance/#hero">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
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
                        <a className="nav-item nav-link" href="/freelance/#about">About</a>
                        <a className="nav-item nav-link" href="/freelance/#portfolio">Portfolio</a>
                        <a className="nav-item nav-link" href="/freelance/#testimonials">Testimonials</a>
                        <a className="nav-item nav-link" href="/freelance/#pricing">Pricing</a>
                        <a className="nav-item nav-link" href="/freelance/#contact">Contact</a>
                        <a className="nav-item nav-link nav-icon" href="mailto:Jacobbowlware@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default FreelanceHeader;