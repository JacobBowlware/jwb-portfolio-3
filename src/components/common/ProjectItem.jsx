// React
import React, { useEffect, useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProjectItem = ({ title, body, icons, liveLink, repoLink, image }) => {
    const [liveLinkClasses, setLiveLinkClasses] = useState("hero__links-item");

    useEffect(() => {
        if (liveLink === "") {
            setLiveLinkClasses(["hero__links-item hero__link--disabled"]);
        }
    }, [liveLink])

    return (
        <div className="container-grid__item project-item">
            <div className="container-grid project-grid">
                <div className="projects-item">
                    <h4 className="text-dark projects-item__header">{title}</h4>
                    <p className="text-med p-text projects-item__text">
                        {body}
                    </p>
                    <div className="projects-item__tech-container">
                        {
                            icons.map((icon, index) => {
                                return (
                                    <FontAwesomeIcon className="projects-item__tech-icon" icon={icon} key={index} />
                                );
                            })
                        }
                    </div>
                    <div className="projects-item__links">
                        <div className={liveLinkClasses}>
                            <a href={liveLink} className={liveLink === "" ? "hero__link hero__link--disabled" : "hero__link"} target="_blank" rel="noreferrer">View Live</a>
                            <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} />
                        </div>
                        <div className="hero__links-item">
                            <a href={repoLink} className="link hero__link" target="_blank" rel="noreferrer">View Repository</a>
                            <FontAwesomeIcon className="hero__icon-link link" icon={faChevronRight} />
                        </div>
                    </div>
                </div>
                <div className="container-grid__item p-1">
                    <img className="about-img project-img" alt="" src={image} />
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;