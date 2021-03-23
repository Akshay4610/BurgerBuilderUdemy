import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {

    let attachClasses = [classes.sideDrawer, classes.close];
    if(props.open) {
        attachClasses = [classes.sideDrawer, classes.open];
    }
    return (
        <>
        <div className={attachClasses.join(' ')}>
            <Logo  height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
         <Backdrop show={props.open} clicked={props.closed}/>
        </>
    );
}

export default SideDrawer;