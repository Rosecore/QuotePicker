import React from 'react';
import './Button.scss'

const Button = ({idx, func, text}) => {
    return (
            <button className="Button" id={idx} onClick={func}>{text}</button>
    );
};

export default Button