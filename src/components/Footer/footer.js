import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p>
                <FontAwesomeIcon icon={faCopyright} className='iconStyle' /> {currentYear} Jesús Ramírez. All rights reserved.
            </p>
            <span>
                Made with love. <FontAwesomeIcon icon={faHeart} className='iconStyle' />
            </span>
        </footer>
    );
};

export default Footer;
