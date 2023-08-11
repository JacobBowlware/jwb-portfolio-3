// React
import React, { useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCode, faDatabase, faE, faFire } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faDiscord, faGit, faGithub, faHtml5, faJava, faJsSquare, faNodeJs, faPython, faReact, faStripe } from '@fortawesome/free-brands-svg-icons';

// Images
import manSitting from '../assets/man-sitting.svg';
import ProjectItem from '../common/ProjectItem';
import lovelyIconSS from '../assets/LovelyIconSS.png';
import groupBotSS from '../assets/GroupBotSS.png';
import mindMazeSS from '../assets/MindMazeSS.png';
import efficientDevSS from '../assets/EfficientDevSS.png';
import SubHeader from '../common/SubHeader';

// Components
import Header from '../common/Header';

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
                name: 'TypeScript',
                icon: faCode
            },
            {
                name: 'ReactJS',
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
            <Header />
            <SubHeader />
            <div className="container container-light-bg padding-container" id="hero">
                <h1 className="header text-dark hero__header">Jacob Bowlware</h1>
                <h2 className="subheader text-med hero__subheader">Web Developer. CS Student. Basketball Enthusiast</h2>
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
            <div className="container container-light-bg container-grid__item">
                <div className="container-grid" id="about">
                    <div className="grid__item-container">
                        <div className="container-grid__item">
                            <h2 className="subheader text-dark about__header">About Me</h2>
                            <p className="text-med about__text p-text">
                                Hi, my name is Jacob and I am a Computer Science student at the University of Oklahoma.
                                I have a strong passion for programming and am always looking
                                for new opportunities to learn and grow professionally.
                            </p>
                            <p className="text-med about__text p-text">
                                In my free time I enjoy reading, programming, and playing basketball. I am always
                                up for a challenge and I love to learn new things - whether it's a new programming language,
                                productivity hack, or basketball move.

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
            <div className="container container-dark-bg padding-container" id="skills">
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
            <div className="container container-light-bg padding-container" id="projects">
                <h3 className="subheader text-dark projects-header">
                    My Projects
                </h3>
                <div className="projects-item__container">
                    <ProjectItem
                        title="LovelyIcon" body="LovelyIcon is a web application 
                        that allows users to create an account, purchase credits, and 
                        effortlessly generate icons. The icons are generated using the 
                        OpenAI text-to-image API, and are then stored in a Firebase storage 
                        bucket. The payment system is handled with the Stripe API and custom 
                        cloud functions."
                        icons={[faHtml5, faCss3, faJsSquare, faReact, faFire, faStripe]}
                        image={lovelyIconSS}
                        liveLink="https://lovelyicon.com"
                        repoLink="https://github.com/JacobBowlware/LovelyIcon"
                    />
                    <ProjectItem
                        title="EfficientDev" body="EfficientDev is  my own personal blog website 
                        where I post about different topics in programming and productivity management. This project 
                        was a great opportunity for me to learn more about TypeScript, while also getting the chance to
                        to create blog posts about topics that I am passionate about."
                        icons={[faHtml5, faCss3, faJsSquare, faCode, faReact]}
                        image={efficientDevSS}
                        liveLink="https://efficient-dev.web.app/"
                        repoLink="https://github.com/JacobBowlware/EfficientDev"
                    />
                    <ProjectItem
                        title="GroupBot" body="Created during Hacklahoma of 2023, Group Bot 
                        is a Discord bot that allows users to seemlessly create and manage sub-groups 
                        within a Discord server. During this project, I gained valuable insights 
                        into the Discord developer API and the process of developing user-friendly 
                        API's, while also getting the chance to sharpen my front-end skills."
                        icons={[faHtml5, faCss3, faJsSquare, faReact, faDiscord]}
                        image={groupBotSS}
                        liveLink="https://group-bot-a78f2.web.app/"
                        repoLink="https://github.com/JacobBowlware/groupbot"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;