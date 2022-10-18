import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer.js';
import AppBar  from './AppBar';

export default function ContentLayoutRoute(props) {
    return (
        <React.Fragment>

            
            <Route path={props.path} exact={props.exact} component={props.component}/>
            

        </React.Fragment>
    )
}