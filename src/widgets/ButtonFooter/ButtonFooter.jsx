import React from 'react';
import Button from '../../components/Button/Button';
import ButtonWithHref from '../../components/ButtonWithHref/ButtonWithHref';

const ButtonFooter = ({func}) => {
    return (
        <div>
            <ButtonWithHref idx ={"tumblr-quote"}/>
             <ButtonWithHref idx ={"tweet-quote"} link={"twitter.com/intent/tweet"}/>
             <Button idx ={"new-quote"} func={func} text={'New quote'}/>
        </div>
    );
};

export default ButtonFooter;