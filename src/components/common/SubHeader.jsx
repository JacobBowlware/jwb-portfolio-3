// React
import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// CSS for this component is located at: Header.css
const SubHeader = ({ freelance }) => {

    if (freelance)
        return (
            <div className="web-container web-container__med subheader-container">
                <h1 className="text-med subheader text-med nav-subheader">
                    Looking to take your business online? I can help with that. <a className="link" href="/freelance/#pricing"> Hire Me</a> <FontAwesomeIcon
                        className="link nav-subheader__icon" icon={faChevronRight} />
                </h1>
            </div>
        )


    return (
        <div className="web-container web-container__med subheader-container">
            <h1 className="text-med subheader text-med nav-subheader">
                Passionate Web Developer and Aspiring Intern Seeking Exciting
                Opportunities. <a className="link" href="mailto:jacobbowlware@gmail.com?subject=Regarding%20Job%20Opportunity"> Contact Me</a> <FontAwesomeIcon
                    className="link nav-subheader__icon" icon={faChevronRight} />
            </h1>
        </div>
    );
}

export default SubHeader;