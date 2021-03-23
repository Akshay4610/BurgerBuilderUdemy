import React from 'react';
import burderLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.logo}>
            <img src={burderLogo} alt="MyBurger" />
        </div>
    );
}

export default Logo;