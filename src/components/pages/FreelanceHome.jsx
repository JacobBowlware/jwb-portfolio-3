// React
import React, { useEffect } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Images
import manSitting from '../assets/man-sitting.svg';
import lovelyIconSS from '../assets/LovelyIconSS.png';
import LimitedBitsSS from '../assets/LimitedBitsSS.png';
import JmPoolSS from '../assets/JmPoolSS.png';
import efficientDevSS from '../assets/EfficientDevSS.png';
import PricingCard from '../common/PricingCard';
import SubHeader from '../common/SubHeader';
import { Link } from 'react-router-dom';
import ExperienceItem from '../common/ExperienceItem';

const FreelanceHome = () => {

    useEffect(() => {
        document.title = "JWB | Web Development"
    }, [])

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
            <div className="container container-light-bg padding-container" id="experience">
                <h3 className="subheader text-dark projects-header">
                    Experience
                </h3>
                <div className="experience-item__container">
                    <ExperienceItem img={LimitedBitsSS} link="https://lovelyicon.com/" title="LimitedBits" completedDate="August 2023" />
                    <ExperienceItem img={lovelyIconSS} link="https://lovelyicon.com/" title="LovelyIcon" completedDate="May 2023" />
                    <ExperienceItem img={JmPoolSS} link="https://lovelyicon.com/" title="J&M Pool Installation & Repair" completedDate="April 2023" />
                    <ExperienceItem img={efficientDevSS} link="https://efficient-dev.web.app/" title="EfficientDev" completedDate="July 2023" />
                </div>
            </div>
        </div>
    );
}

export default FreelanceHome;