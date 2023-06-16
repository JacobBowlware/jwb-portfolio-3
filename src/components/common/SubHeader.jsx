// React
import React from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// CSS for this component is located at: Header.css
const SubHeader = () => {
    return (
        <div className="web-container web-container__med subheader-container">
            <h1 className="text-med subheader text-med nav-subheader">
                Passionate Web Developer and Aspiring Intern Seeking Exciting
                Opportunities. <a className="link" href="mailto:jacobbowlware@gmail.com?subject=Regarding%20Job%20Opportunity"> Hire Me</a> <FontAwesomeIcon
                    className="link nav-subheader__icon" icon={faChevronRight} />
            </h1>
        </div>
    );
}

export default SubHeader;