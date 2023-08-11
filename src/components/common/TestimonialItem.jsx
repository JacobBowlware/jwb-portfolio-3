import React from 'react'

const TestimonialItem = ({ body, name }) => {
    return (
        <div className="testimonial-item">
            <p className="testimonial-item__text">
                {body}
            </p>
            <p className="testimonial-item__name">
                - {name}
            </p>
        </div>
    );
}

export default TestimonialItem;