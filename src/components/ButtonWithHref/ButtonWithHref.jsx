import React from 'react';
import Button from '../Button/Button';

const ButtonWithHref = ({idx,link }) => {
    return (
        <a href={link}>
         <Button idx={idx}/>   
        </a>
    );
};

export default ButtonWithHref;