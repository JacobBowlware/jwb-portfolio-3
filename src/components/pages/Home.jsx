// React
import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Images
import manSitting from '../assets/man-sitting.svg';

const Home = () => {
    return (
        <div className="web-container web-container-light">
            <div className="container container-light-bg hero-container" id="hero">
                <h1 className="header text-dark hero__header">Jacob Bowlware</h1>
                <h2 className="subheader text-dark hero__subheader">Web Developer. CS Student. Rock Climbing Enthusiast.</h2>
                <div className="hero__links">
                    <div className="hero__links-item">
                        <a href="/#skills" className="link hero__link">Skills</a>
                        <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} />
                    </div>
                    <div className="hero__links-item">
                        <a href="/#projects" className="link hero__link">Projects</a>
                        <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} />
                    </div>
                </div>
            </div>
            <div className="container container-grid container-light-bg" id="about">
                <div className="grid__item-container">
                    <div className="container-grid__item">
                        <h2 className="header text-dark about__header">About Me</h2>
                        <p className="text-med about__text">
                            Hi, my name is Jacob and I am a Computer Science student at the University of Oklahoma. I am
                            passionate about programming and am always looking
                            for new opportunities to learn and grow as a developer.
                        </p>
                        <p className="text-med about__text">
                            In my free time, I enjoy rock climbing, playing
                            basketball, reading, and playing chess. I am always
                            up for a challenge and I love to learn new things.
                        </p>
                    </div>
                </div>
                <div className="grid__item-container">
                    <div className="container-grid__item">
                        <img className="about-img" alt="" src={manSitting} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;