import React from 'react'
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

function Layout(props) {
  return (
    <div>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
}

export default Layout
