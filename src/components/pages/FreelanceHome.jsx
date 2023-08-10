// React
import React, { useEffect, useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCode, faFire } from '@fortawesome/free-solid-svg-icons';
import { faCss3, faDiscord, faHtml5, faJsSquare, faReact, faStripe } from '@fortawesome/free-brands-svg-icons';

// Images
import manSitting from '../assets/man-sitting.svg';
import ProjectItem from '../common/ProjectItem';
import lovelyIconSS from '../assets/LovelyIconSS.png';
import groupBotSS from '../assets/GroupBotSS.png';
import efficientDevSS from '../assets/EfficientDevSS.png';
import PricingCard from '../common/PricingCard';
import SubHeader from '../common/SubHeader';

const FreelanceHome = () => {
    const [selectedSkill, setSelectedSkill] = useState(0);

    useEffect(() => {
        document.title = "JWB | Web Development"
    }, [])

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

    const basicPackage = {
        title: 'Basic Website',
        description: 'A basic website with a few pages and a contact form - perfect for small businesses and individuals.',
        price: 100,
        features: [
            'Up to 3 pages',
            'Contact form',
            'Responsive design',
            'SEO',
            '1 Year of free hosting',
        ]
    }

    return (
        <div className="web-container web-container-light">
            <SubHeader freelance={true} />
            <div className="container container-light-bg padding-container" id="hero">
                <h1 className="header text-dark hero__header">Jacob Bowlware</h1>
                <h2 className="subheader text-med hero__subheader">Freelance Web Developer</h2>
                <div className="hero__links">
                    <div className="hero__links-item">
                        <a href="/freelance/#experience" className="link hero__link">Experience</a>
                        <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} />
                    </div>
                    <div className="hero__links-item">
                        <a href="/freelance/#testimonials" className="link hero__link">Testimonials</a>
                        <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} />
                    </div>
                </div>
            </div>
            <div className="container container-light-bg container-grid__item">
                <div className="container-grid" id="about">
                    <div className="grid__item-container">
                        <div className="container-grid__item">
                            <h2 className="subheader text-dark about__header">What I can Offer You</h2>
                            <p className="text-med about__text p-text">
                                Hello, I am Jacob Bowlware, a freelance web developer. I specialize in building
                                websites and web applications for small businesses and individuals. I will work with you
                                to create a website that fits your needs and helps you reach your goals. <strong>
                                    Better yet, I have a
                                    100% money back guarantee. If you are not satisfied with my work, I will refund you in full.
                                </strong>
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
            <div className="container container-dark-bg padding-container" id="pricing">
                <h3 className="subheader text-light skills-header">
                    Website Packages
                </h3>
                <div className="pricing-container">
                    <div className="pricing-container-grid">
                        <PricingCard bullets={["1 Page"]} title="Basic" price={69.99} description="A basic website with one page and a contact form - perfect for individuals." />
                        <PricingCard bullets={["3 Pages"]} title="Standard" price={99.99} description="A standard website with up to 3 pages and a contact form - perfect for small businesses." />
                        <PricingCard title="Premium" price={199.99} disabled={true} />
                    </div>
                    <p className="text-light pricing-container-helper">
                        * All packages include a 100% money back guarantee - if you are not satisfied with my work.
                    </p>
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

export default FreelanceHome;