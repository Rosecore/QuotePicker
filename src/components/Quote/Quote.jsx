import React from 'react';
import './Quote.scss'

const Quote = ({idx, text}) => {
    return (
        <div className={idx} id={idx}>
            {text}
        </div>
    );
};

export default Quote;