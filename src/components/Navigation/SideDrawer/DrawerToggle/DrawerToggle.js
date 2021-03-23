import React from 'react';
import classes from './DrawerToggle.module.css'

const DrawerToggle = (props) => {
    return (
        <div className={classes.drawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default DrawerToggle;