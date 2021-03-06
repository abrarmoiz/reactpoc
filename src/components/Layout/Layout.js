import React from 'react';
import Aux from '../../hoc/Aux1';
import classes from './Layout.css'
const Layout = (props) => (
    
    <Aux>
        <div>Toolbar, sidebar, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;