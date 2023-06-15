// React
import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="web-container web-container-light">
            <div className="container container-light-bg hero-container">
                <h1 className="header text-dark hero__header">Jacob Bowlware</h1>
                <h2 className="subheader text-dark hero__subheader">Web Developer. CS Student. Rock Climbing Enthusiast.</h2>
                <div className="hero__links">
                    <div className="hero__links-item">
                        <a href="/#about" className="link hero__link">About</a>
                        <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} />
                    </div>
                    <div className="hero__links-item">
                        <a href="/#projects" className="link hero__link">Projects</a>
                        <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;