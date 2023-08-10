// React
import React from 'react'
import { Link } from 'react-router-dom';

// FontAwesome
import { faCheck, faChevronRight, faClockFour } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PricingCard = ({ title, price, description, link, disabled, bullets }) => {
    if (disabled) {
        return (
            <div className="pricing-card pricing-card--highlight">
                <h3 className="pricing-card__title text-light">{title} - ${price}</h3>
                <div className="pricing-card__disabled-container">
                    <FontAwesomeIcon icon={faClockFour} className="pricing-card__disabled-icon" />
                </div>
            </div>
        );
    }

    return (
        <div className="pricing-card">
            <div className="pricing-card-text">
                <h3 className="pricing-card__title text-light">{title} - ${price}</h3>
                <p className="pricing-card__description">{description}</p>
            </div>
            <div className="pricing-card-body">
                <ul className="pricing-card__list">
                    {bullets.map((bullet, index) => {
                        return (
                            <li className="pricing-card__list-item" key={index}>
                                <FontAwesomeIcon className="pricing-card__list-icon" icon={faCheck} /> {bullet}
                            </li>
                        );
                    })}
                    <li className="pricing-card__list-item">
                        <FontAwesomeIcon className="pricing-card__list-icon" icon={faCheck} /> Contact Form
                    </li>
                    <li className="pricing-card__list-item">
                        <FontAwesomeIcon className="pricing-card__list-icon" icon={faCheck} /> Custom Domain
                    </li>
                    <li className="pricing-card__list-item">
                        <FontAwesomeIcon className="pricing-card__list-icon" icon={faCheck} /> 1 Year Free Hosting
                    </li>
                </ul>
                <Link to={link} className="pricing-card__link link">Learn More <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} /></Link>
            </div>
        </div>
    );
}

export default PricingCard;