// React
import React, { useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faDatabase, faE, faFire } from '@fortawesome/free-solid-svg-icons';

// Images
import manSitting from '../assets/man-sitting.svg';
import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJava, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const skills = [
    {
        section: 'Front End',
        items: [
            {
                name: 'HTML',
                icon: faHtml5
            },
            {
                name: 'CSS',
                icon: faCss3
            },
            {
                name: 'JavaScript',
                icon: faJsSquare
            },
            {
                name: 'ReactJS',
                icon: faReact
            },
            {
                name: 'React Native',
                icon: faReact
            },
            {
                name: 'Bootstrap',
                icon: faBootstrap
            },
        ]
    },
    {
        section: 'Other',
        items: [
            {
                name: 'Java',
                icon: faJava
            },
            {
                name: 'Python',
                icon: faPython
            },
            {
                name: 'Git',
                icon: faGit
            },
            {
                name: 'GitHub',
                icon: faGithub
            },
        ]
    },
    {
        section: 'Back End',
        items: [
            {
                name: 'NodeJS',
                icon: faNodeJs
            },
            {
                name: 'Express',
                icon: faE
            },
            {
                name: 'MongoDB',
                icon: faDatabase
            },
            {
                name: 'Firebase',
                icon: faFire
            }
        ]
    }
];

const Home = () => {
    const [selectedSkill, setSelectedSkill] = useState(0);

    const handleSkillSelect = (index) => {
        setSelectedSkill(index);
        const skillsSelection = document.querySelectorAll('.skills-selection-container__item');
        skillsSelection.forEach((item, i) => {
            if (i === index) {
                item.classList.add('skills-selection-container__item--active');
            } else {
                item.classList.remove('skills-selection-container__item--active');
            }
        });
    }

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
                        <h2 className="subheader text-dark about__header">About Me</h2>
                        <p className="text-med about__text p-text">
                            Hi, my name is Jacob and I am a Computer Science student at the University of Oklahoma. I am
                            passionate about programming and am always looking
                            for new opportunities to learn and grow as a developer.
                        </p>
                        <p className="text-med about__text p-text">
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
            <div className="container container-dark-bg" id="skills">
                <h3 className="subheader text-light skills-header">
                    My Skills
                </h3>
                <div className="skills-selection-container">
                    <p className="skills-selection-container__item text-light skills-selection-container__item--active" onClick={() => handleSkillSelect(0)}>
                        Front End
                    </p>
                    <p className="skills-selection-container__item text-light" onClick={() => handleSkillSelect(1)}>
                        Other
                    </p>
                    <p className="skills-selection-container__item text-light" onClick={() => handleSkillSelect(2)}>
                        Back End
                    </p>
                </div>
                <div className="skills-item__container">
                    {
                        skills[selectedSkill].items.map((item, index) => {
                            return (
                                <div className="skills-item" key={index}>
                                    <FontAwesomeIcon className="skills-item__icon" icon={item.icon} />
                                    <p className="skills-item__text text-light">{item.name}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;