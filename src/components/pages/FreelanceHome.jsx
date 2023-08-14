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

// Components
import SubHeader from '../common/SubHeader';
import ExperienceItem from '../common/ExperienceItem';
import FreelanceHeader from '../common/FreelanceHeader';
import TestimonialItem from '../common/TestimonialItem';


/* TODO:
- Create Testimonials component and implement it - DONE.
- Change font sizing for mobile/desktop views.
- Add a contact section at the bottom of the page.
- Setup the contact form to send emails to my email address.
*/
const FreelanceHome = () => {
    useEffect(() => {
        document.title = "JWB | Web Development"
    }, [])

    return (
        <div className="web-container web-container-light">
            <FreelanceHeader />
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
                            <h2 className="subheader text-dark about__header">What I Can Offer You</h2>
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
            <div className="container container-dark-bg padding-container" id="portfolio">
                <h3 className="subheader text-light projects-header">
                    Portfolio
                </h3>
                <p className="text-light portfolio-helper">
                    Below are some of the projects I have worked on. Click on the images to view the websites.
                </p>
                <div className="experience-item__container">
                    <ExperienceItem img={LimitedBitsSS} title="LimitedBits" completedDate="" />
                    <ExperienceItem img={lovelyIconSS} link="https://lovelyicon.com/" title="LovelyIcon" completedDate="May 2023" />
                    <ExperienceItem img={JmPoolSS} link="https://jmpoolsinstallation.com/" title="J&M Pool Installation & Repair" completedDate="April 2023" />
                    <ExperienceItem img={efficientDevSS} link="https://efficient-dev.web.app/" title="EfficientDev" completedDate="July 2023" />
                </div>
            </div>
            <div className="container container-light-bg padding-container" id="testimonials">
                <h3 className="subheader text-dark projects-header">
                    Testminoials
                </h3>
                <p className="text-dark portfolio-helper">
                    See what my clients have to say about me and my work.
                </p>
                <div className="experience-item__container">
                    <TestimonialItem body="Jacob is a great web developer. He is very professional and easy to work with. I would recommend him to anyone looking for a website." name="John Doe" />
                    <TestimonialItem body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere maiores eaque officiis laudantium velit possimus... " name="John Doe" />
                    <TestimonialItem body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere maiores eaque officiis laudantium velit possimus... " name="John Doe" />
                </div>
                <p className="text-dark pricing-container-helper mt-0">
                    Have you worked with me before? <a href="mailto:Jacobbowlware@gmail.com?subject=Testimonial" className="link">Leave a testimonial<FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} /></a>
                </p>
            </div>
            <div className="container container-med-bg padding-container" id="pricing">
                <h3 className="subheader text-dark skills-header">
                    Website Packages
                </h3>
                <div className="pricing-container">
                    <div className="pricing-container-grid">
                        <PricingCard bullets={["1 Page"]} title="Basic" price={69.99} description="A basic website with one page and a contact form - perfect for individuals." />
                        <PricingCard bullets={["3 Pages"]} title="Standard" price={99.99} description="A standard website with up to 3 pages and a contact form - perfect for small businesses." />
                        <PricingCard title="Premium" price={199.99} disabled={true} />
                    </div>
                    <p className="text-light pricing-container-helper">
                        * All packages include a 100% money back guarantee if you are not satisfied with my work.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FreelanceHome;