import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ExperienceItem = ({ link, img, title, completedDate }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="experience-item">
            <a className="experience-item-link" href={link} target="_blank" rel="noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={img} alt={title} className={`experience-item-img ${isHovered ? 'hovered' : ''}`} />
            </a>
            <div className={`experience-item-details ${isHovered ? 'show' : ''}`}>
                <h3 className="experience-item-details__header">{title}</h3>
                <p className="experience-item-details__p"> {completedDate}</p>
                {link && <a className="link experience-item-details__link" href={link} target="_blank" rel="noreferrer">
                    View Live <FontAwesomeIcon className="hero__icon-link" icon={faChevronRight} />
                </a>}
            </div>
        </div>
    );
};

export default ExperienceItem;
