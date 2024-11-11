import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const Button = (props) => {

    const handleClick = () => {
        if (props.link) {
            window.open(props.link, '_blank');
    };
        
    };

    return (
        <button className='button' onClick={handleClick}>
            <BsWhatsapp className='zapzap'/>
            {props.text}
        </button>
    );
}

export default Button;