import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="web-container web-container__med" id="links">
            <div className="container footer-container">
                <h1 className="footer-header">
                    Jacob Bowlware <FontAwesomeIcon className="footer-header__icon" icon={faChevronRight} />
                </h1>
                <ul className="footer-list">
                    <li className="footer-list__item">
                        <a
                            className='footer-list__link'
                            href="https://www.linkedin.com/in/jacob-bowlware-730824246/"
                            target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li className="footer-list__item">
                        <a
                            className='footer-list__link'
                            href="https://github.com/JacobBowlware"
                            target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li className="footer-list__item">
                        <a
                            className='footer-list__link'
                            href="mailto:jacobbowlware@gmail.com"
                            target="_blank" rel="noopener noreferrer">
                            jacobbowlware@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;