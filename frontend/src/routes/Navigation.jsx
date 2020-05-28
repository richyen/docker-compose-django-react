import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Routes from './index';

class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Routes.HOME}/>
                    <Route exact path="/edit-blog" component={Routes.EDITBLOG}/>
                    <Route exact path="/blog-type" component={Routes.BLOGTYPE}/>
                    <Route exact path ="/application-form" component={Routes.APPLICATIONFORM}/>
                </Switch>
            </React.Fragment>
        );
    } 
}
export default Navigation;