import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer.js';
import AppBar  from './AppBar';

function LayoutRoute(props) {
    return (
        <React.Fragment>

            <AppBar/>
            <Route path={props.path} exact={props.exact} component={props.component}/>
            <Footer />

        </React.Fragment>
    )
}

export default LayoutRoute;